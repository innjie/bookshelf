package com.example.bookshelf.service;

import com.example.bookshelf.Repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
public class ProfileService {
    @Autowired
    ProfileRepository profileRepository;

    @PersistenceContext
    private EntityManager em;


}
