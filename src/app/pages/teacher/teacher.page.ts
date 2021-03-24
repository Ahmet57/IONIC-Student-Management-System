import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {
  user:any;
  userNameToSayWelcome:any;
  pages=[
    {
      title:"Edit Profile",
      url:"/teacher/edit-profile-teacher"
    },
    {
      title:"List Courses",
      url:"/teacher/list-courses-teacher"
    },
    {
      title:"Optional",
      url:"/teacher/list-courses-teacher-optional"
    }
  ]

  selectedPath="";

  constructor(private router:Router, private userService:UserService) {
    this.router.events.subscribe((event:RouterEvent)=>{this.selectedPath=event.url});
    this.user=this.router.getCurrentNavigation().extras.state;
    this.userNameToSayWelcome=this.user.data.TeacherName;
    this.userService.setLoginedTeacher(this.user);
    console.log("string ",this.userNameToSayWelcome);
   }

  ngOnInit() {
  }

}
