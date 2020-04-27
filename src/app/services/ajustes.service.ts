import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Platform } from '@ionic/angular';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AjustesService implements CanActivate {
  public ajustes = {
    mostrarTutorial: true,
  };

  constructor(
    private nativeStorage: NativeStorage,
    private platform: Platform,
    private router: Router
  ) {}

  private cargarStorage() {
    if (this.platform.is('cordova')) {
      // Dispositivo
      this.nativeStorage.getItem('ajustes').then(
        (data) => {
          console.log(data);
          this.ajustes = JSON.parse(data);
        },
        (error) => console.error(error)
      );
    } else {
      // escritorio
      if (localStorage.getItem('ajustes')) {
        this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      }
    }
  }

  public guardarStorage() {
    if (this.platform.is('cordova')) {
      // Dispositivo
      this.nativeStorage.setItem('ajustes', JSON.stringify(this.ajustes)).then(
        () => console.log('Stored item!'),
        (error) => console.error('Error storing item', error)
      );
    } else {
      // escritorio
      localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    }
  }

  canActivate() {
    this.cargarStorage();
    if (this.ajustes.mostrarTutorial) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/home']);
    return false;
  }
}
