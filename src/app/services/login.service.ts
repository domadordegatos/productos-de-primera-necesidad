import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public afAuth:AngularFireAuth) { }

  logAuth(){
    return this.afAuth.signOut();
  }
  getAuth(){
    return this.afAuth.authState.map(auth=>auth);
  }

  loginUser(email:string,pass:string){
    return new Promise((resolve, reject)=>{
      this.afAuth.signInWithEmailAndPassword(email,pass)
      .then( userData=> resolve(userData),
      err => reject (err));
    });
  }
}
