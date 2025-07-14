import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../shared/types/product';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.scss'],
})
export class ProductAlertComponent implements OnInit {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
