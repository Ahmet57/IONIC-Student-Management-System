import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http:HttpClient) { }
  host = "https://testazure20210301214857.azurewebsites.net/";
  //host = "https://localhost:44336/";
  students:any=[];
  teachers:any=[];
  courses:any=[];
  status:any;
  postId:any;
  test1:string="a;"
  test2:string="b";
  private _loginedStudent: any;
  private _loginedTeacher: any;
  getAllTeachers(){
    return this.http.get(this.host + 'api/teachers/get/');
  }

  getAllStudents(){
    return this.http.get(this.host + 'api/students/get/');
  }

  getAllCourses(){
    return this.http.get(this.host + 'api/courses/get/');
  }

  deleteTeacher(teacherID){
    return this.http.delete(this.host + 'api/teachers/delete/',{params: {teacherID:teacherID}});
  }
  deleteStudent(studentID){
    return this.http.delete(this.host + 'api/students/delete/',{params: {studentID:studentID}});
  }
  deleteCourse(courseID){
    return this.http.delete(this.host + 'api/courses/delete/',{params: {courseID:courseID}});
  }

  saveTeacher(teacher){
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const httpOptions = {
      headers: headers
      };
    let postData = {
            "UserName": teacher.UserName,
            "Password": teacher.Password,
            "TeacherName" : teacher.TeacherName,
            "Email":teacher.Email,
            "Subject" : teacher.Subject
    }
    return this.http.post(this.host + "api/teachers/post/", postData);
  }

  saveStudent(student){
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const httpOptions = {
      headers: headers
      };
    let postData = {
            "UserName": student.UserName,
            "Password": student.Password,
            "StudentName" : student.StudentName,
            "StudentSurname" : student.StudentSurname,
            "Email":student.Email,
            "Address": student.Address,
            "ContactNo": student.ContactNo
    }
    console.log("service  "+postData)
    return this.http.post(this.host + "api/students/post/", postData);
  }
  saveCourse(course){
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const httpOptions = {
      headers: headers
      };
    let postData = {
            "CourseName": course.CourseName,
            "CourseFee": course.CourseFee,
            "Duration" : course.Duration,
            "NumberOfEnrollments": 0,
            "EnrolledStudents": " "
    }
    console.log("service  "+ postData)
    return this.http.post(this.host + "api/courses/post/", postData);
  }

  getAdmin(email, password){
    return this.http.get(this.host + 'api/admins/GetAdmin/',{params: {Email: email, Password: password}});
  }

  getStudent(email, password){
    return this.http.get(this.host + '/api/students/GetStudent/',{params: {Email: email, Password: password}});
  }

  getTeacher(email, password){
    return this.http.get(this.host + '/api/teachers/GetTeacher/',{params: {Email: email, Password: password}});
  }

  putEnrollment(loginedStudentID,courseID){
    return this.http.get(this.host + '/api/courses/GetEnrollment/',{params: {courseID: courseID, studentID: loginedStudentID}});
  }

  putDisEnrollment(loginedStudentID,courseID){
    return this.http.get(this.host + 'api/courses/GetDisEnrollment/',{params: {courseID: courseID, studentID: loginedStudentID}});
  }

  putCourseByID(courseID, startTime, endTime, context){
    return this.http.get(this.host + 'api/courses/GetEditCourseByID/',{params: {courseID: courseID, startTime: startTime, endTime:endTime, context:context}});
  }

  getLoginedStudent() {
    return this._loginedStudent.data;
  }

  setLoginedStudent(loginedStudent) {
    this._loginedStudent = loginedStudent;
  }

  getLoginedTeacher(){
    return this._loginedTeacher.data;
  }

  setLoginedTeacher(loginedTeacher){
    this._loginedTeacher = loginedTeacher;
  }

  registerTeacher(email,password){
    return this.http.get(this.host + '/api/teachers/RegTeacher/',{params: {email: email, password: password}});
  }

  registerStudent(email,password){
    return this.http.get(this.host + '/api/students/RegStudent/',{params: {email: email, password: password}});
  }

  editStudent(student){
    return this.http.get(this.host + '/api/students/GetEditProfileStudent/',{
      params: {
        ID: student.ID,
        Username: student.UserName,
        Password: student.Password,
        StudentName : student.StudentName,
        StudentSurname : student.StudentSurname,
        Email:student.Email,
        EnrolledCourses: student.EnrolledCourses,
        Address: student.Address,
        ContactNo: student.ContactNo
      }});
  }

  editTeacher(teacher){
    return this.http.get(this.host + '/api/teachers/GetEditProfileTeacher/',
    {
      params: {
        ID: teacher.ID,
        Username: teacher.UserName,
        Password: teacher.Password,
        TeacherName : teacher.TeacherName,
        Email : teacher.Email,
        Subject : teacher.Subject
      }});
  }


}
