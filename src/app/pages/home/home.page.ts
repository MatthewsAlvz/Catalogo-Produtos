import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { UrlService } from '../../provider/url.service';
import { NavController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceUserService } from '../../provider/service-user.service';
import { MenuService } from 'src/app/provider/menu.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  produtos: any;
  nome: any;

  produtoItem: Array<{ codigo: any,
                       nome: any, 
                       valor: any, 
                       descricao: any, 
                       status: any, 
                       foto: any, 
                       data_registro: any}>

  produtoItemTodos: Array<{ codigo: any,
                            nome: any, 
                            valor: any, 
                            descricao: any, 
                            status: any, 
                            foto: any, 
                            data_registro: any}>

  constructor(public http: Http, 
              public serviceUrl: UrlService,
              public nav: NavController,
              private route: Router,
              public serviceUser: ServiceUserService,
              public menuService: MenuService
              ) {

    this.validarMenu();              
    this.listProdutos();
    

    console.log(this.serviceUser.userName);
  }

  validarMenu(){

    if (localStorage.getItem('user_logado') != null) {
      console.log("Usuário Logado");
    } else {
      this.nav.navigateBack('login');
    }

    if (this.serviceUser.userNivel == "2") {
      this.menuService.perfilMenu.push(this.menuService.menu[0]); //publicar produto
    }
    if (this.serviceUser.userNivel == "1") {
      this.menuService.perfilMenu.push(this.menuService.menu[0]); //publicar produto
      this.menuService.perfilMenu.push(this.menuService.menu[1]); //cadastrar produto
      this.menuService.perfilMenu.push(this.menuService.menu[2]); //cadastrar empresa
    }
  }

  listProdutos(){

    this.produtoItem = [];

    this.http.get(this.serviceUrl.getUrl()+"listDados.php").pipe(map(res => res.json()))
    .subscribe(
      listDados => {
        this.produtos = listDados;
      
        for(let i = 0; i < listDados.length; i++){
          
          this.produtoItem.push({

            codigo:listDados[i]["codigo"],
            nome:listDados[i]["nome"],
            valor:listDados[i]["valor"],
            foto:listDados[i]["foto"],
            descricao:listDados[i]["descricao"],
            status:listDados[i]["status"],
            data_registro:listDados[i]["criacao"]
          });
        }

        this.produtoItemTodos = this.produtoItem;

      });
  }


  toProdutos(){
    this.nav.navigateForward('/cadastro_produtos')
  }

  //go(id){
 //   console.log(id);
 //   this.navigateByUrl('/list_produtos/id');
  //}

  getItems(ev: any) {
    

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.produtoItem = this.produtoItem.filter((produto) => {
        return (produto.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.produtoItem = this.produtoItemTodos
    }
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.listProdutos();
    

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
