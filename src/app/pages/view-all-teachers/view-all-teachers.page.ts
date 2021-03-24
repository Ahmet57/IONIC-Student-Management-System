import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-view-all-teachers',
  templateUrl: './view-all-teachers.page.html',
  styleUrls: ['./view-all-teachers.page.scss'],
})
export class ViewAllTeachersPage implements OnInit {

  constructor(public userService:UserService) { this.getAllTeachers();}

  teachers:any=[];
  status="";
  // CRUD operations
  getAllTeachers(){
    console.log("get all teachers!");
    this.userService.getAllTeachers().subscribe(data=>{
      this.teachers=data;
      })
    console.log(this.teachers);
  }

  deleteTeacher(id:any){
    console.log("delete teacher!"+ id);
    this.userService.deleteTeacher(id).subscribe(data =>
      {this.status = 'Delete successful'; this.getAllTeachers();
    });
    console.log(this.teachers);
  }

  ngOnInit() {
  }

}
