import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/service/user.service';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-list-courses-teacher',
  templateUrl: './list-courses-teacher.page.html',
  styleUrls: ['./list-courses-teacher.page.scss'],
})
export class ListCoursesTeacherPage implements OnInit {

  constructor(private userService:UserService, private router:Router, private modalController:ModalController) {
    //this.courses=this.router.getCurrentNavigation().extras.state.data;
    this.courses=this.getAllCourses();

  }

  courses:any=[];
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

  editCourse(id:string){
    console.log("string id = ", id)
    this.router.navigate(['teacher/edit-course-by-id'], {
      state: {
          data:id
      }
    });
    console.log("edit course!"+ id);
  }

  async openModal(id:string){
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { data: id },
    });

    modal.onDidDismiss()
      .then((data) => {
        //const user = data['data']; // Here's your selected user!
        this.getAllCourses()
    });

    return await modal.present();
  }


  ngOnInit() {
  }

}
