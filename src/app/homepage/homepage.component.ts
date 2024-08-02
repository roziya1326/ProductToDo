import { DatePipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
// import { HighlightDirective } from '../../apphighlight.directive';
// import { CardsComponent } from "../../ui/cards/cards.component";
import { product } from '../interface/products';
import { CardsComponent } from "../ui/cards/cards.component"; 
 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe, NgFor, CardsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomeComponent {
  text = Date.now();
  // @Input() item: Product = {} as Product;
 
  categorizedProducts: { [key: string]: product[]} = {};
 
  async ngOnInit() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      this.categorizeProducts(data.products);
      console.log(this.categorizedProducts);
    } catch (error) {
      console.log(error);
    }
  }
 
  categorizeProducts(products: product[]) {
    this.categorizedProducts = products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {} as { [key: string]: product[] });
  }
  getCategories(): string[] {
    return Object.keys(this.categorizedProducts);
  }
 
  getProductsByCategory(category: string): product[] {
    return this.categorizedProducts[category];
  }
 
  productSelected(product: product){
    alert(`Product ${product.title} selected`);
  }
}