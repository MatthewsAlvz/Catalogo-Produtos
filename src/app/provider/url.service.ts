import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  // Server Web Online:
  url: string = "https://catalogomatheus.000webhostapp.com/php/";

  // Server Localhost:
//  url: String = "http://localhost/catalogo/Catalogo/php/";

  loading = false;
  
  constructor(public alert: AlertController,
              public loadingCrtl: LoadingController) {}

    getUrl(){
      return this.url;
    }
  
    async alertas(titulo, msg) {
      const alert = await this.alert.create({
        header: titulo,
        message: msg,
        buttons: ['OK']
      });
      await alert.present();
    }


    async showLoading(){
      this.loading = true
      return await this.loadingCrtl.create({
        message: 'Listando Dados...'
      }).then(a => {
        a.present().then(() => {
          if(!this.loading){
            a.dismiss().then(() => {});
          }
        });
      });
    }

    async closeLoading(){
      this.loading = false;
      return await this.loadingCrtl.dismiss().then(() => {}); 
    }


}
