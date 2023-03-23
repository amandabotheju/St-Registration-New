import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable, Observer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  private baseURL ="http://localhost:8080";
  
  constructor(private httpClient:HttpClient){}

  getStudentList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }

  addstudent(student:Student):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,student);
  }
  
  getStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
  }

  deleteStudent(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  updatestudentData(id:number, student: Student):Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`,student);
  }
}
