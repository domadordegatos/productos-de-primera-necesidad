import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from "rxjs/operators";
import { AngularFireStorage } from '@angular/fire/storage';
import { ProductI } from '../models/product.interface';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FileI } from '../models/file.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private postsCollection: AngularFirestoreCollection<ProductI>;
  private filePath1: any;
  private filePath2: any;
  private filePath3: any;
  private downloadURL1: Observable<string>;
  private downloadURL2: Observable<string>;
  private downloadURL3: Observable<string>;
  private itemDoc: AngularFirestoreDocument<ProductI>;


  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage) {
      this.postsCollection = afs.collection<ProductI>('Producto');
 
  }
        eliminarProduct(post:ProductI){
          this.itemDoc = this.afs.doc<ProductI>(`Producto/${post.id}`);
          this.itemDoc.delete();
        }

        EditarProduct(post:ProductI){
          this.itemDoc = this.afs.doc<ProductI>(`Producto/${post.id}`);
          this.itemDoc.update(post);
        }

        public getAllPosts(): Observable<ProductI[]>{
          
          this.postsCollection = this.afs.collection<ProductI>('Producto',ref => 
          ref.orderBy('fecha','desc')  
             /* .limit(5) */);  //desc asc

          return this.postsCollection
            .snapshotChanges()
            .pipe(
              map(actions =>
                actions.map(a => {
                  const data = a.payload.doc.data() as ProductI;
                  const id = a.payload.doc.id;
                  return { id, ...data };
                })
              )
            );
        }


      public preAddAndUpdatePost(post:ProductI, image1: FileI, image2: FileI, image3: FileI):void{
        this.uploadImage(post,image1,image2,image3);
      }

      public savePost(post: ProductI){
          const postObj = {
            titlePost: post.titlePost,
            telPost: post.telPost,
            precioPost: post.precioPost,
            dirPost: post.dirPost,
            namePost: post.namePost,
            tagsPost: post.tagsPost,
            categoriPost: post.categoriPost,
            fileRef1: this.filePath1,
            fileRef3: this.filePath3,
            fileRef2: this.filePath2,
            permisosPost:  'negado',
            imagePost1: this.downloadURL1,
            imagePost2: this.downloadURL2,
            imagePost3: this.downloadURL3,
            fecha: new Date().getTime(),
          };
          return this.postsCollection.add(postObj);
    }

    private uploadImage(post: ProductI, image1: FileI, image2: FileI, image3: FileI){
      this.filePath1 = `images/${image1.name}`;
      const fileRef1 = this.storage.ref(this.filePath1);
      const task1 = this.storage.upload(this.filePath1, image1);
      /*  */
      this.filePath2 = `images/${image2.name}`;
      const fileRef2 = this.storage.ref(this.filePath2);
      const task2 = this.storage.upload(this.filePath2, image2);
      /*  */
      this.filePath3 = `images/${image3.name}`;
      const fileRef3 = this.storage.ref(this.filePath3);
      const task3 = this.storage.upload(this.filePath3, image3);
      /*  */
      task1.snapshotChanges()
      task2.snapshotChanges()
      task3.snapshotChanges()
      .pipe(
        finalize(()=>{
          fileRef1.getDownloadURL().subscribe(urlImage1=>{
            fileRef2.getDownloadURL().subscribe(urlImage2=>{
              fileRef3.getDownloadURL().subscribe(urlImage3=>{
                this.downloadURL1 = urlImage1;
                this.downloadURL2 = urlImage2;
                this.downloadURL3 = urlImage3;

                this.savePost(post);
              })
            })
          })
        })
      ).subscribe();
    }

    
}
