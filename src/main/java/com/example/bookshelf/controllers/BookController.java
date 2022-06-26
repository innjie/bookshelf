package com.example.bookshelf.controllers;

import com.example.bookshelf.Domain.BookDTO;
import com.example.bookshelf.service.BookService;
import com.example.bookshelf.service.TestService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class BookController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private BookService bookService;

    @GetMapping("/book/list")
    @ResponseBody
    public Map<String, Object> getBookList(){
        Map<String, Object> result = new HashMap<>();

        List<BookDTO> bookList = bookService.getBookList();
        result.put("bookList", bookList);

        return result;
    }

    @GetMapping("/book/detail")
    @ResponseBody
    public Map<String, Object> getBook(@RequestParam long idx) {
        Map<String, Object> result = new HashMap<>();

        BookDTO book = bookService.getBook(idx);
        result.put("book", book);

        return result;
    }
}
