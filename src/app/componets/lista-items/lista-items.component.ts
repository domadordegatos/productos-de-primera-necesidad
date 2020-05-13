import { Component, OnInit } from '@angular/core';
import { ProductI } from 'src/app/models/product.interface';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.css']
})
export class ListaItemsComponent implements OnInit {

  //public post$: Observable<ProductI>;
  public filter= this.route.snapshot.paramMap.get('id');
  
  constructor(private route:ActivatedRoute,
              private postSvc:ProductsService) {

                //console.log(this.route.snapshot.paramMap.get('id'));
                
               }

  ngOnInit(){
    //console.log(this.filter);
  }

}
