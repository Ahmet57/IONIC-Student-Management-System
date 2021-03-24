import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router:Router, private userService:UserService) { }
  registerType:any;
  student:any;
  teacher:any;
  inputEmail="";
  inputPassword="";
  inputPassword2="";
  Register(){
    if (this.registerType=="Student"){
      if(this.inputPassword==this.inputPassword2){
        this.userService.registerStudent(this.inputEmail, this.inputPassword).subscribe((response) => {
          if (response=="ok") {
            //this.userToSend = response;
            this.router.navigate(['login']);
          }
          else{
            alert("can not register user");
          }
        });
      }
      else{
        alert(" Retyped password do not match");
      }

    }
    else if (this.registerType=="Teacher"){
      if (this.inputPassword==this.inputPassword2){
        this.userService.registerTeacher(this.inputEmail,this.inputPassword).subscribe((response) => {
          if (response=="ok" ) {
            //this.userToSend = response;
            this.router.navigate(['login']);
          }
          else{
            alert("can not register user");
          }
        });
      }
      else{
        alert(" Retyped password do not match");
      }
    }
  }

  Login(){
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
