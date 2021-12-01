import { Component } from '@angular/core';

// Template do componente contendo um contianer com margens, um título e uma tabela com os dados dos alunos.
// Usado o *ngFor para percorrer a lista de alunos e mostrar todos em uma tabela com estilização do Bootstrap
@Component({
  selector: 'app-arquivo',
  template: `
  <div class="container xs-6 mt-4">
    <h2>Lista de alunos</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">RU</th>
          <th scope="col">Curso</th>
          <th scope="col">Data de nascimento</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of items">
          <td scope="col">{{item.name}}</td>
          <td scope="col">{{item.ru}}</td>
          <td scope="col">{{item.course}}</td>
          <td scope="col">{{item.birthday}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  `
})
export class ArquivoComponent  {
  
  items

  constructor() { 
    // Lista de alunos
    this.items = [
      {
        name: "Leonardo Schonardt",
        ru: 3073246,
        course: "Análise e Desenvolvimento de Sistemas",
        birthday: "28/12/1998"
      },
      {
        name: "Ana Silva",
        ru: 1022245,
        course: "Física",
        birthday: "19/08/1978"
      },
      {
        name: "Raquel Souza",
        ru: 7851236,
        course: "Comércio exterior",
        birthday: "17/11/1999"
      },
      {
        name: "Paulo Colombo",
        ru: 7533256,
        course: "Matemática",
        birthday: "30/05/2001"
      },
      {
        name: "Agnaldo Timóteo",
        ru: 20198232,
        course: "Admininstração",
        birthday: "20/06/1989"
      }
    ] 
  }

}
