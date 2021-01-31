import { Component, Input, OnInit } from '@angular/core';
import { Item } from '@trade/model/trade.model';

@Component({
  selector: 'app-trade-item',
  templateUrl: './trade-item.component.html',
  styleUrls: ['./trade-item.component.scss']
})
export class TradeItemComponent implements OnInit {

  @Input()
  public items: Item[];

  constructor() { }

  ngOnInit() {
  }

}
