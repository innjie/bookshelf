package com.example.bookshelf.controllers;


import com.example.bookshelf.Domain.UserDTO;
import com.example.bookshelf.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class UserController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    UserService userService;

    //insert
    @PostMapping("/profile/insert")
    @ResponseBody
    public Map<String, Object> insertProfile(UserDTO user) {
        Map<String, Object> result = new HashMap<>();
        logger.info("user: " + user.toString());
        try {
            userService.insertProfile(user);

        } catch (Exception e) {
            e.printStackTrace();
        }


        result.put("result", "end");
        return result;
    }
}
