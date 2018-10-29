import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private URL_API = 'http://10.11.21.162:8080/pessoa';

  constructor(private http: HttpClient) { }

  public get(): Observable<Array<Pessoa>> {
    return this.http.get<Array<Pessoa>>(this.URL_API);
  }
  
  public getPorCpf(cpf: string): Observable<Pessoa> {
    return this.http.get<Pessoa>(this.URL_API + '/' + cpf);
  }

  public add(pessoa: Pessoa): Observable<void> {
    return this.http.post<void>(this.URL_API, pessoa);
  }
  
  public put(cpf: string, pessoa: Pessoa): Observable<void> {
    return this.http.put<void>(this.URL_API + '/' + cpf, pessoa);
  }
}
