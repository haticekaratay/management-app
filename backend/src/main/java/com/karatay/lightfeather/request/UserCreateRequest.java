package com.karatay.lightfeather.request;


import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor(staticName = "build")
public class UserCreateRequest {

    Long id;

    @NotBlank(message = "First Name must be present.")
    @Size(min = 3, max = 64, message = "First Name must be between 3-64 characters.")
    String firstName;

    @NotBlank(message = "Last Name must be present.")
    @Size(min = 3, max = 64, message = "Last Name must be between 3-64 characters.")
    String lastName;

    @NotBlank(message = "First Name must be present.")
    @Email(message = "Invalid email address")
    String email;

    @NotBlank(message = "Phone number must be present.")
    String phoneNumber;

    Boolean canEmail;
    Boolean canMessage;

    @NotNull(message = "Select a supervisor")
    Long supervisorId;

}