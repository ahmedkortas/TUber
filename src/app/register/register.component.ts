import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class SignupComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;

  constructor(
    private fileStorage: AngularFireStorage,
    private UserService: UserService
  ) {}

  ngOnInit(): void {}

  selectedFile(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.fileStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.task
      .snapshotChanges()
      .pipe(finalize(() => (this.downloadURL = this.ref.getDownloadURL())))
      .subscribe();
  }

  onSubmit(f: NgForm) {
    var img = document.getElementsByTagName('a');
    f.value.imgUrl = img[img.length - 1].innerHTML;

    if (f.value.imgUrl === '') {
      alert('must upload a picture');
      location.reload();
    }
    console.log('here');
    this.UserService.createRegister(f.value).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );

  }
 register(){
   const data = {
    firstName : this.user.firstName,
    lastName : this.user.lastName,
    email : this.user.email,
    password : this.user.password,
    address : this.user.address,
    phoneNumber : this.user.phoneNumber,
    imgUrl : this.user.imgUrl,
   }
   this.UserService.createRegister(data)
      .subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        })
        console.log(data)
   this.UserService.sendEmail(data)
   .subscribe(
    res => {
      console.log(res);
    },
    error => {
      console.log(error);
    })
 }
}
