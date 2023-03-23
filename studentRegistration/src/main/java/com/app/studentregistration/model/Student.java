package com.app.studentregistration.model;

import jakarta.persistence.*;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data

@Entity
@Table(name = "student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "student_id", nullable = false)
    private int student_id;

    @Column(name = "student_name", nullable = false)
    private String student_name;

    @Column(name = "student_email", nullable = false)
    private String student_email;

    @Column(name = "student_num", nullable = false)
    private int student_num;


    public int getId() {
        return student_id;
    }

    public void setId(int id) {
        this.student_id = id;
    }

    public String getStudentName() {
        return student_name;
    }

    public void setStudentName(String studentName) {
        this.student_name = studentName;
    }

    public String getStudentEmail() {
        return student_email;
    }

    public void setStudentEmail(String studentEmail) {
        this.student_email = studentEmail;
    }

    public int getMobileNo() {
        return student_num;
    }

    public void setMobileNo(int studentNum) {
        this.student_num = studentNum;
    }

    public Student() {
    }

    public Student(int student_id, String student_name, String student_email, int student_num) {
        this.student_id = student_id;
        this.student_name = student_name;
        this.student_email = student_email;
        this.student_num = student_num;
    }
}