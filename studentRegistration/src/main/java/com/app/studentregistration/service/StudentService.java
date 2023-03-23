package com.app.studentregistration.service;

import com.app.studentregistration.model.Student;

import java.util.List;

public interface StudentService {
    public List<Student> viewStudentData();

    public Student addStudent(Student student);

    public Student updateStudent(int id, Student student);

    public Student getStudentById(int id);

    public void deleteStudent(int id);
}
