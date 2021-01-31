import { Component, OnInit } from '@angular/core';
import { TradeService } from '@trade/services/trade.service';
import { ApiResponse, Item, Stash } from '@trade/model/trade.model';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss']
})
export class TradeComponent implements OnInit {
  private readonly initialID = 'b9799e92-0a0a-456f-b427-f4c67ed114f3';
  private readonly url = '/public-stash-tabs';

  public stashs: Stash[];
  private initialStashs: Stash[];
  public tradeStashs: string[];
  public items: Item[] = [];
  public activeIndex: any = 0;
  public value: any = '';
  public loading: boolean;

  constructor(private tradeService: TradeService) { }

  ngOnInit() {
    this.loading = true;
    this.getStashs(this.initialID);
  }

  private getStashs(id: string): void {
    setTimeout(() => {
      this.loading = false;
      this.tradeService.getTradeStashsByID(`${this.url}?id=${id}`)
        .toPromise()
        .then((response: ApiResponse[]) => {
          if ((response || []).length === 0) {
            this.getStashs(this.initialID);
          } else {
            this.stashs = (((response || [])[0]).stashes);
            this.tradeStashs = ['All', ...new Set(
              this.stashs.filter((stash: Stash) => !!stash.league && !!stash.accountName).map((stash: Stash) => stash.league))];
            this.stashs
              .filter((stash: Stash) => !!stash.items && stash.items.length > 0 )
              .forEach((stash: Stash) => this.items =  [...this.items, ...stash.items]);
            this.initialStashs = [...this.stashs];
            setTimeout(() => {
              this.value = '';
              this.activeIndex = 0;
              this.loading = true;
              this.getStashs((((response || [])[0]).next_change_id));
            }, 30000);
          }
        });
    }, 2000);
  }

  public textChange(): void {
    this.items = [];
    this.stashs
      .filter((stash: Stash) => !!stash.items && stash.items.length > 0 )
      .forEach((stash: Stash) => this.items =  [...this.items, ...stash.items]);
    if (!!this.value) {
      const filteredItems = this.items.filter((item) => {
        return !!(item.typeLine || '').toLowerCase().includes((this.value || '').toLowerCase())
          || !!(item.name || '').toLowerCase().includes((this.value || '').toLowerCase());
      });
      this.items = filteredItems;
    }
  }

  public quickFilter(value: string, index: number): void {
    this.items = [];
    this.activeIndex = index;
    this.stashs = [...this.initialStashs];
    this.stashs = this.stashs
      .filter((stash: Stash) =>  value === 'All' ?
        !!stash.items && stash.items.length > 0 : !!stash.items && stash.items.length > 0 && stash.league === value);
    this.stashs.forEach((stash: Stash) => this.items =  [...this.items, ...stash.items]);
    this.textChange();
  }
}
