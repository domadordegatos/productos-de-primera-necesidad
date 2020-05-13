import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductI } from 'src/app/models/product.interface';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public posts$: Observable<ProductI[]>;
  constructor(private route:Router, private postSvc: ProductsService) { }
  ngOnInit(): void {
  }
  alc(){  setTimeout(()=>{  this.route.navigate(['/list','Alcohol'])  },500); }
  jab(){  setTimeout(()=>{  this.route.navigate(['/list','Jabón Antibacterial'])  },500); }
  gel(){  setTimeout(()=>{  this.route.navigate(['/list','Gel Antibacterial'])  },500); }
  tap(){  setTimeout(()=>{  this.route.navigate(['/list','Tapabocas'])  },500); }
}
