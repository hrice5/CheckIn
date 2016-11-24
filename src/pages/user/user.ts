import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({

  
  selector: 'page-user',
  templateUrl: 'user.html',

})
export class UserPage {
  myDate: Date[] = [];
  
  constructor(public navCtrl: NavController) {
  }

setTime(index: number){
  this.myDate[index] = new Date();
}


}
