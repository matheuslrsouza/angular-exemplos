import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Endereco } from '../../model/endereco.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formPessoa = this.fBuilder.group({
    nome: ['', [
      Validators.required, Validators.maxLength(4)
    ]], 
    sobrenome: [''], 
    endereco: this.fBuilder.group({
      cep: [''], 
      logradouro: ['']
    })
  });

  constructor(private fBuilder: FormBuilder) { }

  ngOnInit() {
  }

  carregaDadosEndereco() {
    let endereco: Endereco = {
      id: '',
      cep: '15990518',
      logradouro: 'Yolanda T Groppa',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: ''
    };

    this.formPessoa.patchValue({
      nome: '12345',
      endereco: endereco
    });
  }

  salvar() {
    console.log(this.formPessoa.value);
  }

  //possibilidade de utilizar essa property como atalho
  //ex: [ngClass]="{'txt-invalido': nome.invalid && nome.touched}"
  get nome() {
    return this.formPessoa.get('nome');
  }

}
