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
    return new Promise((resolve, reject) => {
      if (this.platform.is('cordova')) {
        // Dispositivo
        this.nativeStorage.getItem('ajustes').then(
          (data) => {
            console.log('obteniendo data ' + data.mostrarTutorial);
            console.log(data);
            this.ajustes.mostrarTutorial = data.mostrarTutorial;

            resolve(this.ajustes.mostrarTutorial);
          },
          (error) => console.error(error)
        );
      } else {
        // escritorio
        if (localStorage.getItem('ajustes')) {
          this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
        }
        resolve(this.ajustes.mostrarTutorial);
      }
    });
  }

  public guardarStorage() {
    this.ajustes.mostrarTutorial = false;
    if (this.platform.is('cordova')) {
      // Dispositivo
      this.nativeStorage.setItem('ajustes', this.ajustes).then(
        () => console.log('Stored item!'),
        (error) => console.error('Error storing item', error)
      );
    } else {
      // escritorio
      localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    }
  }

  public limpiar() {
    if (this.platform.is('cordova')) {
      this.nativeStorage.clear();
    } else {
      localStorage.clear();
    }
  }

  canActivate() {
    // this.cargarStorage();
    this.cargarStorage().then((data) => {
      if (data) {
        // logged in so return true
        return true;
      }

      // not logged in so redirect to login page
      this.router.navigate(['/home']);
      return false;
    });

    return true;
  }
}
