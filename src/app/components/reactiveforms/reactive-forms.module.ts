import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsRoutingModule, 

    ReactiveFormsModule
  ],
  declarations: [FormComponent]
})
export class ReactiveModule { }
