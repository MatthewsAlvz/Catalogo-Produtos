import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ServiceUserService } from '../app/provider/service-user.service';
import{ UrlService } from '../app/provider/url.service';
import { MenuService } from '../app/provider/menu.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public serviceUser: ServiceUserService,
    public urlService: UrlService,
    public navController: NavController,
    public menuService: MenuService
  ) {

    this.serviceUser.getUserName();
    this.serviceUser.getUserFoto();
    this.urlService.getUrl();

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  actionMenu(menu){
    switch(menu){
      case "publicar":
        this.publicar();
      break;

      case "cadastro_usuario":
        this.cadastrarUsuario();
      break;

      case "cadastro_empresa":
        this.cadastroEmpresa();
      break;

      default:
        break;
    }
  }

  publicar(){
    this.navController.navigateForward('cadastro_produtos');
  }

  cadastrarUsuario(){
    this.navController.navigateForward('cadastro-usuario');
  }

  cadastroEmpresa(){
    this.navController.navigateForward('cadastro-usuario');
  }


  logout() {
    localStorage.removeItem('user_logado');
    location.reload();
  }

}
