import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router,private userService:UserService) { }
  loginType:any;
  found:boolean=false;
  student:any;
  teacher:any;
  admin:any;
  userToSend:any;
  inputEmail="";
  inputPassword="";
  Login(){

    if(this.loginType=="Admin"){                  //if seleced is andmin
      this.userService.getAdmin(this.inputEmail,this.inputPassword).subscribe((response) => {
        if ((response != null) && (response != "null")) {
          this.userToSend = response;
          this.router.navigate(['admin'], {
          state: {
              data: this.userToSend
          }
        });
        }
        else{
          alert("can not find user");
        }
      });
    }
    else if (this.loginType=="Student"){
      this.userService.getStudent(this.inputEmail, this.inputPassword).subscribe((response) => {
        if ((response != null) && (response != "null")) {
          this.userToSend = response;
          this.router.navigate(['student/list-courses-student'], {
          state: {
              data: this.userToSend
          }
        });
        }
        else{
          alert("can not find user");
        }
      });
    }
    else if (this.loginType=="Teacher"){
      this.userService.getTeacher(this.inputEmail,this.inputPassword).subscribe((response) => {
        if ((response != null) && (response != "null")) {
          this.userToSend = response;
          this.router.navigate(['teacher/list-courses-teacher'], {
          state: {
              data: this.userToSend
          }
        });
        }
        else{
          alert("can not find user");
        }
      });
    }
  }

  Register(){
    console.log("Register");
    this.router.navigate(['register']);
  }

  ngOnInit() {
  }

}
