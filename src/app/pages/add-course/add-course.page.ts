import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {
  course:any={};

  saveCourse(){
    console.log("course saved !");
    console.log(this.course);
    this.userService.saveCourse(this.course).subscribe(
      data => {console.log(data);},
      error => {console.log(error);}
      );
  }
  constructor(private userService:UserService) { }

  ngOnInit() {
  }

}
