import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from '../../interface/products';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() item:product = {} as product;
 
  @Output() btnClick = new EventEmitter<product>();
myItem: any;
  emitEvent(){
    this.btnClick.emit(this.item);
  }
 
  constructor(private router: Router){}
  goNextPage(){
    console.log(`Clicked on ${this.item.title}`);
    // this.router.navigate(['/product/id']);
    this.router.navigate([`/product/${this.item.id}`]);
  }
}
