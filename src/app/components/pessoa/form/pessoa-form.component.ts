import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PessoaService } from '../../service/pessoa.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {

  public formCadastro: FormGroup;
  private cpf: string;

  constructor(private form: FormBuilder,
    private service: PessoaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.formCadastro = this.form.group({
      nome: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      email: [null, [Validators.required]],
      endereco: this.form.group({
        id: [null, []],
        cep: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
        logradouro: [null, [Validators.required]],
        numero: [null, [Validators.required, Validators.maxLength(5)]],
        complemento: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        uf: [null, [Validators.required, Validators.maxLength(2)]]
      })
    });

    this.cpf = this.route.snapshot.paramMap.get("cpf");
    if (this.cpf) {
      this.get();
    }
  }

  private get(): void {
    this.service.getPorCpf(this.cpf).subscribe(pessoa => {
      this.formCadastro.setValue(pessoa);
      this.formCadastro.updateValueAndValidity();
    });
  }

  public salvar(objeto: any): void {

    if (!this.cpf) {
      this.service.add(objeto).subscribe(() => {
        this.router.navigate(['/pessoa']);
      });
    } else {
      this.service.put(this.cpf, objeto).subscribe(() => {
        this.router.navigate(['/pessoa']);
      });
    }
  }

}
