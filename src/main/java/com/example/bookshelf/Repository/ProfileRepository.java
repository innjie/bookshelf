package com.example.bookshelf.Repository;

import com.example.bookshelf.Domain.UserDTO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<UserDTO, Integer> {
}
