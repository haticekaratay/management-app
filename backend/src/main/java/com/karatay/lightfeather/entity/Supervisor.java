package com.karatay.lightfeather.entity;

import lombok.Data;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;

@Entity
@Table(name = "supervisor")
@Data
@CrossOrigin(origins = "http://localhost:3000")
public class Supervisor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String phone;
    String jurisdiction;
    String identificationNumber;
    String firstName;
    String lastName;
}
