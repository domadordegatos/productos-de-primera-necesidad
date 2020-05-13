import { Component, OnInit} from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';
import { ProductI } from 'src/app/models/product.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-one',
  templateUrl: './list-one.component.html',
  styleUrls: ['./list-one.component.scss']
})
export class ListOneComponent implements OnInit {
  public idPost:string;
  public posts$: Observable<ProductI[]>;
  constructor(private productSvc:ProductsService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idPost =  this.route.snapshot.params.id;
    /* console.log('funciona',idPost); */
    
    this.posts$ = this.productSvc.getAllPosts();
  }
}
