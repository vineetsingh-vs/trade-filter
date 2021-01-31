import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


const modules = [HttpClientModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class CoreModule { }
