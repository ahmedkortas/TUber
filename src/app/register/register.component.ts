import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class SignupComponent implements OnInit {
  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    console.log(f.value); // { first: '', last: '' }
    console.log(f.valid); // false
  }
}
//  register(){
//    const data = {
//     firstName : this.user.firstName,
//     lastName : this.user.lastName,
//     email : this.user.email,
//     password : this.user.password,
//     address : this.user.address,
//     phoneNumber : this.user.phoneNumber,
//     imgUrl : this.user.imgUrl,
//    }
//    this.UserService.createRegister(data)
//       .subscribe(
//         res => {
//           console.log(res);
//         },
//         error => {
//           console.log(error);
//         })
//    this.UserService.sendEmail(data)
//    .subscribe(
//     res => {
//       console.log(res);
//     },
//     error => {
//       console.log(error);
//     })
//  }
