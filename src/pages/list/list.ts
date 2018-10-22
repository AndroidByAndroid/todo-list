import { DataPage } from './../data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { scheduleMicroTask } from '@angular/core/src/util';
import  {Task } from'../data/mocks/person.mocks'
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  
value
tasklist= Task

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.value=this.navParams.get("variable");
   // this.tasklist.push({name:this.value})
    //this.id=this.navParams.get('id')
   // this.tasklist.push({name:this.id})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
  OnClickBack(){
    this.navCtrl.push('DataPage')
    
    }
    
    OnClickAdd(){
      this.navCtrl.push('DataPage')
    }
    }

