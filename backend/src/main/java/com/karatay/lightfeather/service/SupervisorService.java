package com.karatay.lightfeather.service;

import com.karatay.lightfeather.entity.Supervisor;
import com.karatay.lightfeather.repository.SupervisorRepository;
import net.bytebuddy.implementation.bind.annotation.Super;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.PriorityQueue;

@Service
public class SupervisorService {
    private SupervisorRepository supervisorRepository;

    public SupervisorService(SupervisorRepository supervisorRepository) {
        this.supervisorRepository = supervisorRepository;
    }

/*
    public Supervisor save(Supervisor supervisor){
        return supervisorRepository.save(supervisor);
    }*/

    public List<Supervisor> saveAll(List<Supervisor> supervisors){
        return supervisorRepository.saveAll(supervisors);
    }

    public Iterable<String> list() {
        var supervisors = supervisorRepository.findAll();
        PriorityQueue<Supervisor> pq = new PriorityQueue<>(
                Comparator.comparing(Supervisor::getJurisdiction)
                        .thenComparing(Supervisor::getLastName)
                        .thenComparing(Supervisor::getFirstName)
        );

        for (Supervisor s: supervisors) {
            String jur = s.getJurisdiction();
            if (!jur.matches(".*[0-9].*")) {
                pq.add(s);
            }
        }

        List<String> test = new ArrayList<>();
        for (Supervisor item : pq) {
            String temp = item.getJurisdiction() + "-" + item.getLastName() + "," + item.getFirstName() + "#" + item.getId();
            test.add(temp);
        }
        return test;
    }

    public Supervisor getASupervisorById(Long supervisorId) {
        return supervisorRepository.findById(supervisorId).orElse(null);
    }

    /*public Iterable<Supervisor> save(List<Supervisor> users) {
        return supervisorRepository.save(users);
    }*/


}