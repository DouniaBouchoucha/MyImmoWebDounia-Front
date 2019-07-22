import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImmoService } from 'src/app/services/immo.service';
import { Immo } from 'src/app/domain/immo';

@Component({
  selector: 'app-immo-details',
  templateUrl: './immo-details.component.html',
  styleUrls: ['./immo-details.component.scss']
})
export class ImmoDetailsComponent implements OnInit {

  pageTitle: string = 'Immo Detail';
  immo?: Immo;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private immoService: ImmoService,
              private cartServices: CartService) {
  }

  ngOnInit(): void {
     this.route.params.subscribe(
          params => {
              let id = +params['id'];
              console.log('Recuparation du Id suivant:' + id);

              // The following call will run synchonously
              // ...

              this.getImmo(id);
      });
  }
  getImmo(id: number) {
    this.immoService.getImmoById(id)
    .subscribe(
     arg => {this.immo = arg;
            // console.log('>>>>>>> Recuperer le Immo' + this.immo.adress);
     },
     err => console.log('Attention,il y a eu l\'erreur:' + err)
     );


  }
  onBack(): void {
      this.router.navigate(['/list']);
  }
  addToCart() {
    console.log('>>>>>>>> dans addtoCart()');
    this.cartServices.addToCart(this.immo);
    console.log('>>>> taille de la carte' + this.cartServices.getCartLength());
    this.router.navigate(['/list']);   // Programmatic navigation
  }
}
