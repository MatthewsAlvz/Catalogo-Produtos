import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UrlService } from '../../provider/url.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.page.html',
  styleUrls: ['./list-produtos.page.scss'],
})
export class ListProdutosPage implements OnInit {

  id: any;
  detalhes: any;
  dados: Array <{ codigo: any,
                  nome: any,
                  valor: any }>;

  constructor( private http: Http,
               private urlService: UrlService,
               private ativeRouter: ActivatedRoute) { 

  this.ativeRouter.params.subscribe( paramsId => {
    this.id = paramsId.id;
  });

   

  }

  listDetalhes(){
    this.http.get(this.urlService.getUrl()+"detalhesProdutos.php?id_prod="+this.id).pipe(map( res => res.json()))
    .subscribe(
      data =>{
        this.detalhes = data;

        for(let i = 0; i < data.length; i++){
          this.dados.push({
            codigo: data[i]["codigo"],
            nome: data[i]["nome"],
            valor: data[i]["valor"]
          });
        
          console.log(this.dados);
          console.log(this.dados[0].nome);
        }
      }
    );
  }

  ngOnInit() {

    this.listDetalhes();
    this.dados = [];
  }

}
