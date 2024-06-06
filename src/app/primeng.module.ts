import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AvatarModule} from 'primeng/avatar';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {MenuModule} from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';


//Modulos Prime
const modPrime: any = [
  AvatarModule,
  MenuModule,
  MenubarModule,
  ButtonModule,
  TooltipModule,
  ToolbarModule,
  CardModule,
  InputTextModule,
  ButtonModule,
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modPrime
  ],
  exports:[
    modPrime
  ]
})
export class PrimengModule { }
