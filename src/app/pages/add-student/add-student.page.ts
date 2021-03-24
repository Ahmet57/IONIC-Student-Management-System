import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.page.html',
  styleUrls: ['./add-student.page.scss'],
})
export class AddStudentPage implements OnInit {

  student:any={};
  saveStudent(){
    console.log("student saved !");
    console.log(this.student);
    this.userService.saveStudent(this.student).subscribe(
      data => {console.log(data);},
      error => {console.log(error);}
      );
  }

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

}
