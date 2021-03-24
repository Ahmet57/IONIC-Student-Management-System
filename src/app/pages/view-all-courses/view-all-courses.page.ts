import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-view-all-courses',
  templateUrl: './view-all-courses.page.html',
  styleUrls: ['./view-all-courses.page.scss'],
})
export class ViewAllCoursesPage implements OnInit {

  constructor(private userService:UserService) {
    this.courses=this.getAllCourses();}

  courses:any=[];
  status="";
  // CRUD operations
  getAllCourses(){
    console.log("get all courses!");
    this.userService.getAllCourses().subscribe(data=>{
      this.courses=data;
    });
  }

  deleteCourse(id:any){
    console.log("delete course!"+ id);
    this.userService.deleteCourse(id).subscribe(data =>
      {this.status = 'Delete successful'; this.getAllCourses();
    });
    console.log(this.courses);
  }

  ngOnInit() {
  }

}
