import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TopBarComponent,
    CardComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    TopBarComponent,
    CardComponent,
    SearchComponent
  ]
})
export class ComponentsModule { }
