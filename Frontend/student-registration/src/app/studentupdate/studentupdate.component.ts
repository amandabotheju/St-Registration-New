import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentupdate',
  templateUrl: './studentupdate.component.html',
  styleUrls: ['./studentupdate.component.scss']
})
export class StudentupdateComponent implements OnInit{

  id !: number;
  student:Student= new Student();

  constructor(private studentService:StudentService,
    private route:ActivatedRoute,
    private router:Router){}

    ngOnInit(): void {
      this.id =this.route.snapshot.params['id'];

      this.studentService.getStudentById(this.id).subscribe(data=>{
        this.student=data;
      });
    }
  
    
    onSubmit(){
      this.studentService.updatestudentData(this.id, this.student).subscribe(data=>{
        alert("Updated Successfully");
        this.goToStudentList();
    },error=>alert("Unalbe to Update"));     
    }

    goToStudentList(){
      this.router.navigate(['/student']);
    }
}
