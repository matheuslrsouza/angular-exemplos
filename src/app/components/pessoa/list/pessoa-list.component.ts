import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../../model/pessoa.model';
import { PessoaService } from '../../service/pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

  public pessoas: Observable<Array<Pessoa>>;

  constructor(private service: PessoaService) { }

  ngOnInit() {
    this.get();
  }

  public get(): void {
    this.pessoas = this.service.get();
  }

  public editar(cpf: string) {
    alert('excluir')

  }

  public excluir(cpf: string) {
    alert('excluir')
  }

}
