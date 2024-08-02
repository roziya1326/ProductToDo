import { Component, EventEmitter, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { product } from '../interface/products';
import { ActivatedRoute } from '@angular/router';
import { CardsComponent } from '../ui/cards/cards.component';
import { HomeComponent } from '../homepage/homepage.component';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from "../button/button.component";
 
@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [CardsComponent, HomeComponent, NgIf, ButtonComponent,NgOptimizedImage],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
 
export class ViewProductComponent{
 
  // @Input() text: string = ''
  @Input() item: product = {} as product
  @Output() btnClick = new EventEmitter<product>();
  emitEvent(){
    this.btnClick.emit(this.item);
  }
  product: product | undefined;
 
  constructor(private route: ActivatedRoute) { }
 
  async ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        this.item = await response.json();
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }
  }
 
}