import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cartItemCount: number;
  public cart: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    const cartObservable = db.list('/cart');
    cartObservable.subscribe(items => {
      console.log(items);
      this.cartItemCount = items.length;
    })

  }
}
