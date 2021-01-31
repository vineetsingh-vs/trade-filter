import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { TradeComponent } from '@trade/trade.component';
// import { CoreModule } from '@core/core.module';
import { TradeRoutingModule } from '@trade/trade-routing.module';
import { TradeItemComponent } from '@trade/trade-item/trade-item.component';

const modules = [SharedModule, TradeRoutingModule];
const  components = [
  TradeComponent, TradeItemComponent
]


@NgModule({
  declarations: [...components],
  imports: [
    ...modules
  ]
})
export class TradeModule { }
