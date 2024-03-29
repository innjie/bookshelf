package com.example.bookshelf.service;

import com.example.bookshelf.Domain.UserDTO;
import com.example.bookshelf.Repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
public class UserService {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    UserRepository userRepository;

    @PersistenceContext
    private EntityManager em;

    public int insertProfile (UserDTO profile) {
        int resultCode = userRepository.insertProfile(profile);
        return resultCode;
    }


    public List<UserDTO> getUserList() {
        List<UserDTO> users = userRepository.getUserList();
        return users;
    }

    public UserDTO getUser(long idx) {
        UserDTO user = userRepository.getUser(idx);
        return user;
    }
}
