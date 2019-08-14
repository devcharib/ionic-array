import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  paises = [
  {nome : 'Brasil', capital : 'Brasilia'},
  {nome : 'Argentina', capital : 'Buenos Aires'},
  {nome : 'Peru', capital : 'Lima'}
]

  constructor(public navCtrl: NavController) { }


}

