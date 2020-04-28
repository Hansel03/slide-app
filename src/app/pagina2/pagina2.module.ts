import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina2PageRoutingModule } from './pagina2-routing.module';

import { Pagina2Page } from './pagina2.page';
import { AlertController } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, Pagina2PageRoutingModule],
  declarations: [Pagina2Page],
  providers: [AlertController],
})
export class Pagina2PageModule {}
