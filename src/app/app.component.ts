import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from "./ui/cards/cards.component";
import { product } from './interface/products';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./homepage/homepage.component";
import { NavbarComponent } from "./ui/navbar/navbar.component";
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsComponent, CommonModule, HomeComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project2';
  // constructor(public api:HeroService){}
//   categorizedProducts: { [key: string]: product[] } = {};

//   async ngOnInit() {
//     try {
//       const response = await fetch("https://dummyjson.com/products");
//       const data = await response.json();
//       this.categorizeProducts(data.products);
//       console.log(this.categorizedProducts);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   categorizeProducts(products: product[]) {
//     this.categorizedProducts = products.reduce((acc, product) => {
//       if (!acc[product.category]) {
//         acc[product.category] = [];
//       }
//       acc[product.category].push(product);
//       return acc;
//     }, {} as { [key: string]: product[] });
//   }
//   getCategories(): string[] {
//     return Object.keys(this.categorizedProducts);
//   }
 
//   getProductsByCategory(category: string): product[] {
//     return this.categorizedProducts[category];
//   }
//   HandleButton(product:product){
//     alert(product.title)
//   }
}