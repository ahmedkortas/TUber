import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = {
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    address : '',
    phoneNumber : '',
    imgUrl : '',
  };

  constructor( private UserService: UserService ) { }
  ngOnInit(): void {
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
