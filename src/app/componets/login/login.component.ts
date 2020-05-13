import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email:string;
  public password:string;

  constructor(public authService:LoginService,
              public router:Router) { }

  ngOnInit(): void {
  }
  onSubmitLogin(){
    this.authService.loginUser(this.email,this.password)
    .then((res)=>{
      this.router.navigate(['/edit-loged']);
      
    }).catch((err)=>{
      console.log(err);
      if(err.code === 'auth/user-not-found'){
        Swal.fire({
          icon: 'error',
          title: 'Usuario Inexistente',
          showConfirmButton: false,
          timer: 1000
        });
        this.router.navigate(['/login-ciy']);
      }
    })
  }

}
