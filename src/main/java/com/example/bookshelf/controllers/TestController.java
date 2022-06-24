package com.example.bookshelf.controllers;

import com.example.bookshelf.Domain.BookDTO;
import com.example.bookshelf.Domain.NoticeDTO;
import com.example.bookshelf.service.TestService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Controller
public class TestController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private TestService testService;

    @GetMapping("/home")
    @ResponseBody
    public String getHome(){
//        logger.trace("Trace test");
//        logger.info("INFO test");
//        logger.warn("WARN test");
//        logger.error("ERROR test");
//        logger.debug("DEBUG test");
        List<BookDTO> bookList = new ArrayList<>();
        bookList = testService.getBookList();
        logger.info(String.valueOf(bookList.size()));
        return "Hello World!";
    }
}
