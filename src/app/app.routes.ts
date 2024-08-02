import { Routes } from '@angular/router';

import { HomeComponent } from './homepage/homepage.component';

import { ViewProductComponent } from './view-product/view-product.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
 
export const routes: Routes = [

    {
        path:'',loadComponent:()=>import('./homepage/homepage.component').then((m)=>m.HomeComponent)
    },
    {
        path:'contact',loadComponent:()=>import('./contact/contact.component').then((m)=>m.ContactComponent)
    },
    {
        path:'login',loadComponent:()=>import('./login/login.component').then((m)=>m.LoginComponent)
    },
    {
        path:'todo',loadComponent:()=>import('./pages/todo/todo.component').then((m)=>m.TodoComponent)
    },
   
    {
        path: 'product/:id', loadComponent:()=>import('./view-product/view-product.component').then((m)=>m.ViewProductComponent)
    }
];

