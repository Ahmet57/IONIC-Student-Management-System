import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private userService:UserService,private navParams:NavParams,private modalController:ModalController) {
    this.id=this.navParams.get("data");
    console.log("this.id= ",this.id)
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
    this.userService.putCourseByID(this.id,this.startTime,this.endTime,this.context).subscribe(data =>{console.log("saveCourse")});
    this.getAllCourses();
    this.modalController.dismiss();
    }

  ngOnInit() {
  }

}
