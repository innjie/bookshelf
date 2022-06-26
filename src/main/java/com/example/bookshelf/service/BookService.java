package com.example.bookshelf.service;

import com.example.bookshelf.Domain.BookDTO;
import com.example.bookshelf.Repository.BookRepository;
import lombok.Lombok;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    BookRepository bookRepository;
    @PersistenceContext
    private EntityManager em;

    public List<BookDTO> getBookList() {
        List<BookDTO> bookList = bookRepository.getAllBookList();
        return bookList;
    }

    public BookDTO getBook(long idx) {
        BookDTO book = bookRepository.getBookById(idx);
        return book;
    }
}
