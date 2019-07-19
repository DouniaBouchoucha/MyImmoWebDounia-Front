import { Immo } from './../../domain/immo';
import { Component, OnInit } from '@angular/core';
import { ImmoService } from 'src/app/services/immo.service';

@Component({
  selector: 'app-immolist',
  templateUrl: './immolist.component.html',
  styleUrls: ['./immolist.component.scss']
})
export class ImmolistComponent implements OnInit {

  data: Immo[];
  width: number = 100;
  height: number = 100;



  constructor(private service: ImmoService) { }

  ngOnInit() {
    this.service.getAllImmo().subscribe(
      reponse => this.data = reponse,
      erreur => console.log('Attention, il y a une erreur: ' + erreur)
    );
  }

}
