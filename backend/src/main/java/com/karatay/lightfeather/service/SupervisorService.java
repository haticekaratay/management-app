package com.karatay.lightfeather.service;

import com.karatay.lightfeather.entity.Supervisor;
import com.karatay.lightfeather.repository.SupervisorRepository;
import net.bytebuddy.implementation.bind.annotation.Super;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class SupervisorService {
    private SupervisorRepository supervisorRepository;

    public SupervisorService(SupervisorRepository supervisorRepository) {
        this.supervisorRepository = supervisorRepository;
    }

    public List<Supervisor> saveAll(List<Supervisor> supervisors){
        return supervisorRepository.saveAll(supervisors);
    }

    public List<String> getAllSupervisors() {
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

}