import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { DetailsComponent } from './details/details.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../components/components.module';
import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
  declarations: [
    UserComponent,
    DetailsComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ComponentsModule
  ],
  exports: [
    UserComponent,
    DetailsComponent
  ]
})
export class UserModule { }
