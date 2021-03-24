import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-profile-student',
  templateUrl: './edit-profile-student.page.html',
  styleUrls: ['./edit-profile-student.page.scss'],
})
export class EditProfileStudentPage implements OnInit {
  constructor(private userService:UserService) {
    this.loginedStudent=this.userService.getLoginedStudent();
   }

   loginedStudent:any;

  ngOnInit() {
  }

  EditStudent(){
    console.log("student saved !");
    console.log(this.loginedStudent);
    this.userService.editStudent(this.loginedStudent).subscribe(
      data => {console.log(data);},
      error => {console.log(error);}
      );

  }

}
