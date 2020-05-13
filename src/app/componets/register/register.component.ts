import { Component, OnInit } from '@angular/core';
import { ProductI } from 'src/app/models/product.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public image1:any;
  public image2:any;
  public image3:any;

  public newPostForm = new FormGroup({
    titlePost: new FormControl('', Validators.required),
    precioPost: new FormControl('', Validators.required),
    telPost: new FormControl('', Validators.required),
    tagsPost: new FormControl('', Validators.required),
    namePost: new FormControl('', Validators.required),
    dirPost: new FormControl('', Validators.required),
    categoriPost: new FormControl('', Validators.required),
    imagePost1: new FormControl('', Validators.required),
    imagePost2: new FormControl('', Validators.required),
    imagePost3: new FormControl('', Validators.required),
  })

  constructor(private postSvc:ProductsService,
              private route:Router) {}
  
  ngOnInit(): void {
  }
  addNewPost(data:ProductI){
    //console.log('new post',data);
    if(this.image1 == null){
      console.log('0');
      //console.log(this.image1);
      Swal.fire('No hay imagenes, No se pudo registrar');
    }
    if(this.image2 == null){
      console.log('1');
      Swal.fire('Necesitas al menos 2 imagenes');
      //console.log(this.image2);
    }
    if(this.image3 == null){
      console.log('2');
      this.image3 = this.image2;
      //console.log(this.image3);
    }
    this.postSvc.preAddAndUpdatePost(data, this.image1, this.image2, this.image3);
    if(this.postSvc.preAddAndUpdatePost){
      Swal.fire('Registro exitoso');
      this.newPostForm.reset();
    }else{
      Swal.fire('Registro Fallido revisa');
    }
  }

  handleImage1(event:any): void{
    this.image1 = event.target.files[0];
    console.log('image3: ',this.image1);
  } 
  handleImage2(event:any): void{
    this.image2 = event.target.files[0];
    console.log('image2: ',this.image2);
  } 
  handleImage3(event:any): void{
    this.image3 = event.target.files[0];
    console.log('image1: ',this.image3);
  } 
}
