package com.app.studentregistration.service;

import com.app.studentregistration.model.Student;
import com.app.studentregistration.repo.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService{
    private StudentRepository studentrepo;

    @Override
    public List<Student> viewStudentData() {
        return (List<Student>) studentrepo.findAll();
    }

    @Override
    public Student addStudent(Student student) {
        return studentrepo.save(student);
    }

    @Override
    public Student updateStudent(int id, Student student) {
        Student student1 = studentrepo.findById(id).get();
        student1.setStudent_name(student.getStudent_name());
        student1.setStudent_email(student.getStudent_email());
        student1.setStudent_num(student.getStudent_num());
        return studentrepo.save(student1);
    }

    @Override
    public Student getStudentById(int id) {
        return studentrepo.findById(id).get();
    }

    @Override
    public void deleteStudent(int id) {
        studentrepo.deleteById(id);
    }
}
