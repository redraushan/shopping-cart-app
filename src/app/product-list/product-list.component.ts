import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product/product.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  public productList: object;
  public items: FirebaseListObservable<any[]>;
  constructor( private _productService: ProductService, db: AngularFireDatabase) {
    this.items = db.list('/products');
    this.productList = {
      furniture: [],
      electronics: []
    };
  //  this.items.remove();
  //   this.items.push({
  //      name: 'Microwave oven',
  //      category: 'Electronics',
  //      cover: 'assets/product-images/microwave.jpg',
  //      price: '3000',
  //      unit: 'RS.'
  //   });
  //   this.items.push({
  //      name: 'Fridge',
  //      category: 'Electronics',
  //      cover: 'assets/product-images/microwave.jpg',
  //      price: '3000',
  //      unit: 'RS.'
  //   });
  //   this.items.push({
  //      name: 'AC',
  //      category: 'Electronics',
  //      cover: 'assets/product-images/microwave.jpg',
  //      price: '3000',
  //      unit: 'RS.'
  //   });
  //   this.items.push({
  //      name: 'Washing Machine',
  //      category: 'Electronics',
  //      cover: 'assets/product-images/microwave.jpg',
  //      price: '3000',
  //      unit: 'RS.'
  //   });

    this.items.subscribe( items => {
      console.log(items);

    })


  }

  ngOnInit() {
    this._productService
      .getProducts()
      .subscribe(res => {
        this.productList = res.products;
      })

  }
  shoDetails(){

  }

}
