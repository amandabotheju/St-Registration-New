import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit{

  students: any[]| undefined
  url: string = "http://localhost:8080/";

  constructor(private studentService: StudentService,
    private router:Router){}

  ngOnInit(): void {
    this.studentService.getStudentList().subscribe(data=>{
      this.students= data;
    })
  }

  getStudents(){
    this.studentService.getStudentList().subscribe(data=>{
      this.students=data;
    })
  }

    updateStudentData(student_id:number){
        this.router.navigate(['studentupdate',student_id]);
    }
  

  
 

  deleteStudent(id:number){
    this.studentService.deleteStudent(id).subscribe(data=>{
      this.getStudents();
    })
  }
}  




