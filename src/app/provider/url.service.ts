import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  // Server Web Online:
  url: string = "https://catalogomatheus.000webhostapp.com/php/";

  // Server Localhost:
//  url: String = "http://localhost/catalogo/Catalogo/php/";

  constructor(public alert: AlertController) {}

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
}
