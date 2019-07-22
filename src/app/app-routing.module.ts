import { ImmoDetailsComponent } from './components/immo-details/immo-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ImmolistComponent } from './components/immolist/immolist.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: 'list', component: ImmolistComponent},
  {path: 'detail/:id', component: ImmoDetailsComponent },
  {path: 'cart', component: CartComponent},
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
