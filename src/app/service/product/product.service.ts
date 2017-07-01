import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {

  constructor( private _http: Http) { }

 getProducts() {
    return this
      ._http
      .get('../../assets/products.json')
      .map(res => res.json());
  }

  showDetails() {
    return this
      ._http
      .get('../../assets/product-details.json')
      .map(res => res.json());
  }


}
