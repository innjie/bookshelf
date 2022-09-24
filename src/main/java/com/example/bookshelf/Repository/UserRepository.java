package com.example.bookshelf.Repository;

import com.example.bookshelf.Domain.UserDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface UserRepository extends JpaRepository<UserDTO, Integer> {
    @Query(value = "INSERT INTO Usertbl (nickname, id, password) " +
            "VALUES (:#{#user.nickname}, :#{#user.id}, :#{#user.password})", nativeQuery = true)
    @Transactional
    @Modifying
    int insertProfile(UserDTO user);
}
