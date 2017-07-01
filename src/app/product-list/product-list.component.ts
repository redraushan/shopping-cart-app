import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  public productList: object;
  constructor( private _productService: ProductService) {
    this.productList = {
      furniture: [],
      electronics: []
    }
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
