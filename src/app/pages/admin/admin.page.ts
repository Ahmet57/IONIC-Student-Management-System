import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  user:any;
  userNameToSayWelcome:any;
  pages=[
    {
      title:"Add Student",
      url:"/admin/add-student"
    },
    {
      title:"Add Teacher",
      url:"/admin/add-teacher"
    },
    {
      title:"Add Course",
      url:"/admin/add-course"
    },
    {
      title:"View All Courses",
      url:"/admin/view-all-courses"
    },
    {
      title:"View All Students",
      url:"/admin/view-all-students"
    },
    {
      title:"View All Teachers",
      url:"/admin/view-all-teachers"
    }
  ]

  selectedPath="";
  constructor(private router:Router, private userService:UserService) {
    this.router.events.subscribe((event:RouterEvent)=>{this.selectedPath=event.url});
      this.user=this.router.getCurrentNavigation().extras.state;
      this.userNameToSayWelcome=this.user.data.UserName;
      console.log("string ",this.userNameToSayWelcome);
   }

  ngOnInit() {
  }

}
