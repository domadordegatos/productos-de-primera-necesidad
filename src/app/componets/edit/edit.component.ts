import { Component, OnInit} from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';
import { ProductI } from 'src/app/models/product.interface';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public idPost:string;
  public posts$: Observable<ProductI[]>;
  editarItem:any={}
  

  public myForm = new FormGroup({
    titlePost: new FormControl('', Validators.required),
  })
  constructor(private productSvc:ProductsService,
              private route:ActivatedRoute,
              private authSvc:LoginService) { }

  ngOnInit(): void {
    this.idPost =  this.route.snapshot.params.id;
    /* console.log('funciona',idPost); */
    this.posts$ = this.productSvc.getAllPosts();
  }
  onClickLogout(){
    this.authSvc.logAuth();
  }

  edit(post:ProductI){
    console.log('values: ',post);
    this.editarItem = post;
  }
  agregarProductoEditado(){
    console.log(this.editarItem); 
    this.productSvc.EditarProduct(this.editarItem);
    if(this.productSvc.EditarProduct){
      Swal.fire('Edicion exitosa');
    }else{
      Swal.fire('Edicion fallida');
    }
  }
  eliminar(post:ProductI){
    Swal.fire({
      title: 'Seguro de Eliminar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        console.log('eliminado...');
        this.productSvc.eliminarProduct(post);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
