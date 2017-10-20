import { MdButtonModule, MdCheckboxModule, MdIconModule } from '@angular/material';
import { NgModule } from '@angular/core';

const materialModules = [MdButtonModule, MdCheckboxModule, MdIconModule];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
})
export class AppMaterialModule {}
