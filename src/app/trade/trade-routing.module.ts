import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradeComponent } from '@trade/trade.component';

const routes: Routes = [{ path: '', component: TradeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TradeRoutingModule {}
