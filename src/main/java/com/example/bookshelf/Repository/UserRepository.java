package com.example.bookshelf.Repository;

import com.example.bookshelf.Domain.UserDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserDTO, Integer> {
    @Query(value = "INSERT INTO Usertbl (nickname, id, password) " +
            "VALUES (:#{#user.nickname}, :#{#user.id}, :#{#user.password})", nativeQuery = true)
    @Transactional
    @Modifying
    int insertProfile(UserDTO user);

    @Query(value = "SELECT * FROM UserTbl", nativeQuery = true)
    List<UserDTO> getUserList();

    @Query(value = "SELECT * FROM UserTbl WHERE idx = :#{#idx}", nativeQuery = true)
    UserDTO getUser(long idx);

    @Repository
    public interface MemberRepository extends JpaRepository<UserDTO, Long> {
        Optional<UserDTO> findByEmail(String email);
        boolean existsByEmail(String email);
    }
}
