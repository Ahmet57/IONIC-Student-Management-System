import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-course-by-id',
  templateUrl: './edit-course-by-id.page.html',
  styleUrls: ['./edit-course-by-id.page.scss'],
})
export class EditCourseByIDPage implements OnInit {

  constructor(private router:Router, private userService:UserService) {
    this.id=this.router.getCurrentNavigation().extras.state;
  }
  startTime="";
  endTime="";
  context="";
  id:any;
  courses:any=[];
  // CRUD operations
  getAllCourses(){
    let courses:any=[];
    console.log("get all courses! edit course");
    this.userService.getAllCourses().subscribe(data=>{
      this.courses=data;
      });
    console.log(this.courses);
    return courses;
  }

  saveCourse(){
    this.userService.putCourseByID(this.id.data,this.startTime,this.endTime,this.context).subscribe(data =>{console.log("saveCourse")});
      this.getAllCourses();
      this.router.navigate(['teacher/list-courses-teacher'], {state: {data:this.courses}});
    }

  ngOnInit() {
  }

}
