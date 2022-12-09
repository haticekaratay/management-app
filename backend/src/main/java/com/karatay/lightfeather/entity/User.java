package com.karatay.lightfeather.entity;

import lombok.Data;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "user")
@Data
@CrossOrigin(origins = "http://localhost:3000")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @NotBlank(message = "First Name must be present.")
    @Size(min = 3, max = 64, message = "First Name must be between 1-64 characters.")
    String firstName;

    @NotBlank(message = "First Name must be present.")
    @Size(min = 3, max = 64, message = "First Name must be between 1-64 characters.")
    String lastName;
    String email;
    String phoneNumber;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "supervisor_id", nullable = false)
    Supervisor supervisor;

}
