package com.karatay.lightfeather.controller;

import com.karatay.lightfeather.entity.User;
//import com.karatay.lightfeather.exceptions.UserNotFoundException;
import com.karatay.lightfeather.request.UserCreateRequest;
import com.karatay.lightfeather.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin()
@RequestMapping("/api")
public class UserController {
    private UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @PostMapping("/submit")
    public ResponseEntity<User> createOneUser(@RequestBody @Valid UserCreateRequest userCreateRequest) {
        return new ResponseEntity<>(userService.createOneUser(userCreateRequest),HttpStatus.CREATED);
    }

    @DeleteMapping("/users/{userId}")
    public void deleteOneUser(@PathVariable Long userId){
        userService.deleteOneUser(userId);
    }
}
