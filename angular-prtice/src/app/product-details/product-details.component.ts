import { Component, OnInit } from '@angular/core';
import { Product, products } from '../shared/types/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute) {} //activedRoute chứa thông tin về route và param của route

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = routeParams.get('productId');
    this.product = products.find((product) => product.id === productId);
  }
}
