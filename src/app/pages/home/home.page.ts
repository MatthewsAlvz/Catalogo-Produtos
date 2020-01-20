import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { UrlService } from '../../provider/url.service';
import { NavController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  produtos: any;

  constructor(public http: Http, 
              public serviceUrl: UrlService,
              public nav: NavController,
              private route: Router) {

    this.listProdutos();
  }

  listProdutos(){
    this.http.get(this.serviceUrl.getUrl()+"listDados.php").pipe(map(res => res.json()))
    .subscribe(
      listDados => {
        this.produtos = listDados;
      }
    );
  }


  toProdutos(){
    this.nav.navigateForward('/cadastro_produtos')
  }

  //go(id){
 //   console.log(id);
 //   this.navigateByUrl('/list_produtos/id');
  //}
}
