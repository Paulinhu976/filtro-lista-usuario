import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    MatButtonModule,
    MatListModule,
    MatDividerModule
  ],
  exports: [
    MatButtonModule,
    MatListModule,
    MatDividerModule
  ]
})
export class AngularMaterialModule {

}
