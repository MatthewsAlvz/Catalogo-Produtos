import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  public menu = [
    {
      "label": "Publicar Produto",
      "icone": "person-add",
      "acao": "publicar",
      "menu": "0",
      "exibirMenu": true
    },
    {
      "label": "Cadastro de Usuarios",
      "icone": "contacts",
      "acao": "cadastro_usuario",
      "menu": "1",
      "exibirMenu": true
    },
    {
      "label": "Cadastrar Empresa",
      "icone": "briefcase",
      "acao": "cadastro_empresa",
      "menu": "2",
      "exibirMenu": true
    }

  ];

  public perfilMenu =[];

  constructor() { }
}
