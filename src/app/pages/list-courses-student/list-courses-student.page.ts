import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-courses-student',
  templateUrl: './list-courses-student.page.html',
  styleUrls: ['./list-courses-student.page.scss'],
})
export class ListCoursesStudentPage implements OnInit {
  constructor(private router:Router, private userService:UserService) {
    this.courses=this.getAllCourses();
    //this.loginedStudent=this.router.getCurrentNavigation().extras.state;
    //this.loginedStudentName=this.loginedStudent.data.StudentName;
    //this.loginedStudentSurname=this.loginedStudent.data.StudentSurname;
    console.log(" login student is getting !");
    this.loginedStudent=this.userService.getLoginedStudent();
    this.loginedStudentName=this.loginedStudent.StudentName;
    this.loginedStudentSurname=this.loginedStudent.StudentSurname;
  }

  courses:any=[];
  enrolledStudents;
  found;
  loginedStudent:any;
  loginedStudentName;
  loginedStudentSurname;
  loginedStudentID:number;
  courseID:number;

  // CRUD operations
  getAllCourses(){
    let courses:any=[];
    console.log("get all courses!");
    this.userService.getAllCourses().subscribe(data=>{
      this.courses=data;
      });
    console.log(this.courses);
    return courses;
  }

  checkIfEnrolled(course){
    //console.log("checkIfEnrolled");
    //console.log(course);
    this.enrolledStudents = course.EnrolledStudents.split(',');
    this.found = false;
    for (var i = 0; i < this.enrolledStudents.length; i++) {
      if (this.enrolledStudents[i] == (this.loginedStudentName + " " + this.loginedStudentSurname)) {
          this.found = true;
      }
  }
  return this.found;
  }

  enrollCourse(course){
    this.loginedStudentID=this.loginedStudent.ID;
    this.courseID=course.ID;
    if(this.checkIfEnrolled(course)==false)
    {
      console.log("this.loginedStudentID ", this.loginedStudentID);
      console.log("this.courseID ", this.courseID)
      this.userService.putEnrollment(this.loginedStudentID,this.courseID).subscribe(data => { this.getAllCourses(); });
    }
    else
    {
      console.log("this.loginedStudentID ", this.loginedStudentID);
      console.log("this.courseID ", this.courseID)
      this.userService.putDisEnrollment(this.loginedStudentID,this.courseID).subscribe(data => { this.getAllCourses(); });
    }
  }
  ngOnInit() {
  }

}
