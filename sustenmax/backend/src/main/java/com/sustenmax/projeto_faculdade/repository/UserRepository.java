package com.sustenmax.projeto_faculdade.repository;

import com.sustenmax.projeto_faculdade.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}

