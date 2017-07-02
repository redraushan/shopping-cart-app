import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public items: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.items = db.list('/cart');
    this.items.subscribe(items => {
      console.log(items);
    })
  }
  ngOnInit() {
  }

  removeItem(key): void {
    this.items.remove(key)
  }

}
