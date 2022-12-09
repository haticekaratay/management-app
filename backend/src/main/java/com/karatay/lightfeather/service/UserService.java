package com.karatay.lightfeather.service;

import com.karatay.lightfeather.entity.Supervisor;
import com.karatay.lightfeather.entity.User;
import com.karatay.lightfeather.exception.MissingUserInfoException;
import com.karatay.lightfeather.exception.SupervisorNotFoundException;
import com.karatay.lightfeather.exception.UserNotFoundException;
import com.karatay.lightfeather.repository.UserRepository;
import com.karatay.lightfeather.request.UserCreateRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    UserRepository userRepository;
    SupervisorService supervisorService;

    public UserService(UserRepository userRepository,SupervisorService supervisorService){
        this.userRepository = userRepository;
        this.supervisorService = supervisorService;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User createOneUser(UserCreateRequest userCreateRequest) throws Exception {
        if (userCreateRequest.getFirstName() == "" || userCreateRequest.getFirstName() == "") {
            throw new MissingUserInfoException();
        }

        if(userCreateRequest.getSupervisorId() == null){
            throw new SupervisorNotFoundException("Supervisor is missing");
        }
        Supervisor supervisor = supervisorService.getASupervisorById(userCreateRequest.getSupervisorId());

        User userToSave = new User();
        userToSave.setFirstName(userCreateRequest.getFirstName());
        userToSave.setLastName(userCreateRequest.getLastName());
        userToSave.setEmail(userCreateRequest.getEmail());
        userToSave.setPhoneNumber(userCreateRequest.getPhoneNumber());
        userToSave.setSupervisor(supervisor);

        return userRepository.save(userToSave);
    }

    public void deleteOneUser(Long userId) {
        userRepository.deleteById(userId);
    }
}