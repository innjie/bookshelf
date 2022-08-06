package com.example.bookshelf.controllers;

import com.example.bookshelf.Domain.UserDTO;
import com.example.bookshelf.service.ProfileService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class ProfileController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    ProfileService profileService;

    //insert
    @PostMapping("/profile/insert")
    @ResponseBody
    public Map<String, Object> insertProfile(UserDTO user) {
        Map<String, Object> result = new HashMap<>();
        logger.info("user: " + user.toString());

        result.put("result", "end");
        return result;
    }
}
