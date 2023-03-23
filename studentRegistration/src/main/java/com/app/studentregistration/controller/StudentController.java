package com.app.studentregistration.controller;

import com.app.studentregistration.model.Student;
import com.app.studentregistration.service.StudentService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String addStudent(@RequestBody Student student){
        studentService.addStudent(student);
        return "Student Added Successfully";
    }

    @GetMapping("/students")
    public List<Student> getStudentList(){
        System.out.println("Students...");
        return studentService.viewStudentData();

    }

   @GetMapping("/student/{id}")
    public Student getStudentById(@PathVariable("id") int id){
        return studentService.getStudentById(id);
    }

    @PutMapping("update/{id}")
    public String updatestudentData(@PathVariable("id") int id, @RequestBody Student student){
        studentService.updateStudent(id,student);
        return "Student Details Updated";

    }

    @DeleteMapping("/delete/{id}")
    public String deleteStudent(@PathVariable("id") int id){
       studentService.deleteStudent(id);
       return "Student Deleted";
    }
}
