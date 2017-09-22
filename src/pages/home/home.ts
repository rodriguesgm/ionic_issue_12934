import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { MyInjector } from '../../app/app.injector';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	network: Network;

  constructor(public navCtrl: NavController) {
		this.network = MyInjector.instance.get(Network);

  }

  getNetworkType() {
    return this.network.type;
  }
}
