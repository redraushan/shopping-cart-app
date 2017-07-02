import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product/product.service'
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass'],
  providers: [ProductService]
})
export class ProductDetailsComponent implements OnInit {
  productId: string;

  public cart: FirebaseListObservable<any[]>;
  public product: {
    name: string,
    cover: string,
    price: number,
    unit: string,
    category: string,
    details: string

  };
  public quantity: number;
  constructor(private _productService: ProductService, db: AngularFireDatabase, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._activatedRoute.params.subscribe( params => {
      this.productId = params.id;
      this.quantity = 1;
      const queryObservable = db.list('/products', {
        query: {
          startAt: this.productId,
          orderByKey: true,
          limitToFirst: 1
        }
      });
      this.cart = db.list('/cart');
      queryObservable.subscribe(queriedItems => {
        this.product = queriedItems[0];
        console.log(this.product);

      });

    });
  }

  ngOnInit() {

  }

  addToCart(product, quantity: number) {
    product.quantity = quantity;
    product.productKey = this.productId;
    this.cart.push(product);
    this._router.navigateByUrl('/mycart')
  }

  increaseQuantity(): void {
    this.quantity += 1;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity -= 1;

    }
  }

}
