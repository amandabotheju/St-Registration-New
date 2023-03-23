import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit{
  
  student: Student = new Student();

  constructor(private studentService:StudentService, 
    private router: Router){}
  
ngOnInit():void{
}

saveStudent(){
  this.studentService.addstudent(this.student).subscribe(data=>{
    alert("Student add Successfully")
  this.goToStudentList();
}
,error=>alert("Sorry Unable to insert")
    )
}

goToStudentList(){
  this.router.navigate(['/student']);
}

onSubmit(){
  this.saveStudent();
}
}
