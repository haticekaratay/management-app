package com.karatay.lightfeather.controller;

import com.karatay.lightfeather.entity.Supervisor;
import com.karatay.lightfeather.service.SupervisorService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/supervisors")
@CrossOrigin()
public class SupervisorController {

    private SupervisorService supervisorService;

    public SupervisorController(SupervisorService supervisorService){
        this.supervisorService = supervisorService;
    }

    @GetMapping
    public Iterable<String> list() {
        return supervisorService.list();
    }
}
