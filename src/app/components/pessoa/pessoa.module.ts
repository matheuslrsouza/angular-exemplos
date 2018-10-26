import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaFormComponent } from './form/pessoa-form.component';
import { PessoaListComponent } from './list/pessoa-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PessoaRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PessoaFormComponent, PessoaListComponent]
})
export class PessoaModule { }
