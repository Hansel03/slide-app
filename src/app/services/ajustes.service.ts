import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AjustesService {
  public ajustes = {
    mostrarTutorial: true,
  };

  constructor(
    private nativeStorage: NativeStorage,
    private platform: Platform
  ) {}

  public cargarStorage() {
    if (this.platform.is('cordova')) {
      // Dispositivo
      this.nativeStorage.getItem('myitem').then(
        (data) => console.log(data),
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
      this.nativeStorage
        .setItem('myitem', {
          property: 'value',
          anotherProperty: 'anotherValue',
        })
        .then(
          () => console.log('Stored item!'),
          (error) => console.error('Error storing item', error)
        );
    } else {
      // escritorio
      localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    }
  }
}
