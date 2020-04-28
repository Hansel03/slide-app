import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {
  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}

  public async openAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Desea pasar a la pagina 3?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'SI',
          handler: () => {
            console.log('Confirm Okay');
            this.router.navigate(['pagina3']);
          },
        },
      ],
    });

    await alert.present();
  }
}
