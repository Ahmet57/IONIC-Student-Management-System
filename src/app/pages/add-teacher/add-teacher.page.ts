import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.page.html',
  styleUrls: ['./add-teacher.page.scss'],
})
export class AddTeacherPage implements OnInit {

  teacher:any={};
  courses:any;
  constructor(private userService:UserService) {
    this.userService.getAllCourses().subscribe(data=>{
      this.courses=data;
    });
   }
  saveTeacher(){
    console.log("teacher saved !");
    this.userService.saveTeacher(this.teacher).subscribe(
      data => {console.log(data);},
      error => {console.log(error);}
      );
  }

  ngOnInit() {
  }

}
