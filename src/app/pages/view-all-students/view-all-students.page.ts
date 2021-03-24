import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-view-all-students',
  templateUrl: './view-all-students.page.html',
  styleUrls: ['./view-all-students.page.scss'],
})
export class ViewAllStudentsPage implements OnInit {

  constructor(private userService:UserService) { this.getAllStudents();}

  students:any=[];
  status="";
  // CRUD operations
  getAllStudents(){
    console.log("get all students!");
    this.userService.getAllStudents().subscribe(data=>{
      this.students=data;
      })
    console.log(this.students);
  }

  deleteStudent(id:any){
    console.log("delete student!"+ id);
    this.userService.deleteStudent(id).subscribe(data =>
      {this.status = 'Delete successful'; this.getAllStudents();
    });
    console.log(this.students);
  }

  ngOnInit() {
  }

}
