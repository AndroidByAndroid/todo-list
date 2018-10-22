import { ListPage } from './../list/list';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class DataPage {
  todos:string
  todo:string;
     
       
     

  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataPage');
  }
  add() {
    this.navCtrl.push('ListPage',{id:this.todo});
  
}

}