package com.karatay.lightfeather.request;


import lombok.Data;

@Data
public class UserCreateRequest {

    Long id;

    String firstName;
    String lastName;
    String email;
    String phoneNumber;
    Boolean canEmail;
    Boolean canMessage;
    Long supervisorId;

}