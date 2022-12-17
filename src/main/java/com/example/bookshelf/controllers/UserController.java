package com.example.bookshelf.controllers;


import com.example.bookshelf.Domain.UserDTO;
import com.example.bookshelf.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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
    // get list
    @GetMapping("/profile/list")
    @ResponseBody
    public Map<String, Object> getProfileList() {
        Map<String, Object> result = new HashMap<>();

        List<UserDTO> users = new ArrayList<>();
        try {
            users = userService.getUserList();
        } catch (Exception e) {
            e.printStackTrace();
        }

        result.put("userList", users);
        return result;
    }

    @GetMapping("/profile/detail")
    @ResponseBody
    public Map<String, Object> getProfileDetail(@RequestParam long idx) {
        Map<String, Object> result = new HashMap<>();
        UserDTO user;

        try {
            user = userService.getUser(idx);
            result.put("user", user);
            logger.debug(user.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
}
