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

import java.awt.print.Book;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class TestController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private TestService testService;

    @GetMapping("/profile")
    @ResponseBody
    public  Map<String, Object> getHome(){
//        logger.trace("Trace test");
//        logger.info("INFO test");
//        logger.warn("WARN test");
//        logger.error("ERROR test");
//        logger.debug("DEBUG test");
//
        List<BookDTO> bookList = new ArrayList<>();
        bookList = testService.getBookList();
        logger.info(String.valueOf(bookList.size()));
        logger.info(bookList.get(0).getContents());
        Map<String, Object> result = new HashMap<>();
        result.put("bookList", bookList);
        return result;
    }
}
