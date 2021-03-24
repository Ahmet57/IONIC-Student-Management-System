import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-profile-teacher',
  templateUrl: './edit-profile-teacher.page.html',
  styleUrls: ['./edit-profile-teacher.page.scss'],
})
export class EditProfileTeacherPage implements OnInit {

  constructor(private userService:UserService) {
    this.loginedTeacher=this.userService.getLoginedTeacher();
    this.userService.getAllCourses().subscribe(data=>{
      this.courses=data;
    });
   }

   loginedTeacher:any;
   courses:any;

  ngOnInit() {
  }

  EditTeacher(){
    console.log("teacher saved !");
    console.log(this.loginedTeacher);
    this.userService.editTeacher(this.loginedTeacher).subscribe(
      data => {console.log(data);},
      error => {console.log(error);}
      );
  }
}
