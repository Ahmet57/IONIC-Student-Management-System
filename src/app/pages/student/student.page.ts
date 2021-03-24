import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {
  user:any;
  userNameToSayWelcome:any;
  pages=[
    {
      title:"Edit Profile",
      url:"/student/edit-profile-student"
    },
    {
      title:"List Courses",
      url:"/student/list-courses-student"
    },
    {
      title:"Optional",
      url:"/student/list-courses-student-optional"
    }
  ]

  selectedPath="";
  constructor(private router:Router, private userService:UserService) {
    this.router.events.subscribe((event:RouterEvent)=>{ this.selectedPath=event.url});
    this.user=this.router.getCurrentNavigation().extras.state;
    this.userNameToSayWelcome=this.user.data.StudentName + " "+ this.user.data.StudentSurname;
    this.userService.setLoginedStudent(this.user);
    console.log(" login student was set !");
   }

  ngOnInit() {
  }
}
