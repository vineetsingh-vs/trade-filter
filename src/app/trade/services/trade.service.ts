import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '@trade/model/trade.model';
import { CoreHttpService } from '@core/services/core-http.service';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  constructor(private coreHttpService: CoreHttpService) { }

  public getTradeStashsByID(url: string): Observable<ApiResponse[]> {
    return this.coreHttpService.getData(url);
  }
}
