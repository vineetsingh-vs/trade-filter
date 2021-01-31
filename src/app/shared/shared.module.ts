import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CommonModule, FormsModule, LoaderComponent]
})
export class SharedModule { }
