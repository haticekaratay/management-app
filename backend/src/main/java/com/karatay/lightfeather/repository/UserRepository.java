package com.karatay.lightfeather.repository;

import com.karatay.lightfeather.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

