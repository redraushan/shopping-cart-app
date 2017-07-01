import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product/product.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass'],
  providers: [ProductService]
})
export class ProductDetailsComponent implements OnInit {

  constructor(private _productService: ProductService) {
  }

  ngOnInit() {

  }

}
