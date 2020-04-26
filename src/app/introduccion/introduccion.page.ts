import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.page.html',
  styleUrls: ['./introduccion.page.scss'],
})
export class IntroduccionPage implements OnInit {
  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  slides: any[] = [
    {
      title: 'Bienvenido!!!',
      description:
        'Esta <b>aplicación</b> nos ayudará a comprender muchos temas interesantes en ionic!',
      image: 'assets/img/ica-slidebox-img-1.png',
    },
    {
      title: '¿Qué es ionic?',
      description:
        '<b>Ionic Framework</b> es un SDK abierto que le permite a los desarrolladores crear aplicaciones móviles de alta calidad con el conocimiento de JavaScript, CSS y HTML.',
      image: 'assets/img/ica-slidebox-img-2.png',
    },
    {
      title: '¿Que hace esta app?',
      description:
        'Esta aplicación nos ayudará a conocer más sobre el ciclo de vida de un componente y el storage!',
      image: 'assets/img/ica-slidebox-img-3.png',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  public saltarTutorial() {
    this.router.navigate(['home']);
    this.router.resetConfig([
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'pagina2',
        loadChildren: () =>
          import('../pagina2/pagina2.module').then((m) => m.Pagina2PageModule),
      },
      {
        path: 'pagina3',
        loadChildren: () =>
          import('../pagina3/pagina3.module').then((m) => m.Pagina3PageModule),
      },
      {
        path: 'introduccion',
        loadChildren: () =>
          import('../introduccion/introduccion.module').then(
            (m) => m.IntroduccionPageModule
          ),
      },
    ]);
  }
}
