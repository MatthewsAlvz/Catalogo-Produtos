import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  userName = "";
  idUser = "";
  userNivel = "";
  userFoto = "";


  constructor() { }


  setuserName(valor){
    this.userName = valor;
  }

  getUserName(){
    return this.userName;
  }

  setUserID(valor){
    this.idUser = valor;
  }

  getUserID(){
    return this.idUser;
  }

  setUserNivel(valor){
    this.userNivel = valor;
  }

  getUserNivel(){
    return this.userNivel;
  }

  setUserFoto(valor){
    this.userFoto = valor;
  }
  
  getUserFoto(){
    return this.userFoto;
  }
  
}
