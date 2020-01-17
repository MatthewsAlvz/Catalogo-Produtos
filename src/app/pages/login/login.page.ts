import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { UrlService } from 'src/app/provider/url.service';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  senha: string;

  constructor(public alert: AlertController, 
              public urlService: UrlService, 
              public http: Http, 
              public nav: NavController,
              public loading: LoadingController) { 

                // --------------- MOCADO ----------- //
                this.email = "admin@admin.com";
                this.senha = "123123";


              }            

  ngOnInit() {
  }

  async logar() {

    if (this.email == null || this.senha == null) {

      this.urlService.alertas('Atenção', 'Preencha todos os campos!')

    } else {

      const load = await this.loading.create({
        spinner: 'lines',
        message: 'Carregando...'
      });
      await load.present();

      this.http.get(this.urlService.getUrl() + "login.php?email=" + this.email + "&senha=" + this.senha)
        .pipe(map(res => res.json()))
        .subscribe(

          data => {

            if (data.msg.logado == "sim") {

              if (data.dados.status == "ativo") {

                load.dismiss();
                this.nav.navigateBack('home');
                
              } else {
                
                load.dismiss();
                this.urlService.alertas('Atenção', 'Usuário inativo');
              }
              
            } else {
              
              load.dismiss();
              this.urlService.alertas('atenção', 'Usuário ou senha incorretos ou inválidos.');
            }
          }

        );

    }
  }
}
