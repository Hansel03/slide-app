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
      image: 'assets/img/dinero.svg',
    },
    {
      title: '¿Qué es ionic?',
      image: 'assets/img/mujer.svg',
    },
    {
      title: '¿Que hace esta app?',
      image: 'assets/img/pastel.svg',
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
