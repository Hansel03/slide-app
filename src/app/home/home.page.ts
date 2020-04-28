import { Component } from '@angular/core';
import { AjustesService } from '../services/ajustes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private ajustesService: AjustesService) {}

  /**
   * limpiarStorange
   */
  public limpiarStorange() {
    this.ajustesService.limpiar();
  }
}
