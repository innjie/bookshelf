package com.example.bookshelf.service;

import com.example.bookshelf.Repository.ProfileRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.sql.rowset.serial.SerialBlob;
import javax.sql.rowset.serial.SerialException;
import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;

@Service
public class ProfileService {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    ProfileRepository profileRepository;

    @PersistenceContext
    private EntityManager em;

    public Blob fileToBlob (MultipartFile file) {
        String fileName = file.getOriginalFilename();
        Blob blob = null;
        byte[] bytes;

        try {
            bytes = file.getBytes();
            try {
                blob = new SerialBlob(bytes);
                logger.info("blob : " + blob);
            } catch (SerialException e) {
                e.printStackTrace();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return blob;
    }


}
