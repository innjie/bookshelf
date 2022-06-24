package com.example.bookshelf.service;

import com.example.bookshelf.Domain.BookDTO;
import com.example.bookshelf.Domain.NoticeDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Service
public class TestService {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @PersistenceContext
    private EntityManager em;

    String jpql = "select d from Booktbl d";
    public List<BookDTO> getBookList() {
        TypedQuery<BookDTO> query = em.createQuery(jpql, BookDTO.class);
        logger.info(String.valueOf(query));
        List<BookDTO> bookList = query.getResultList();
        return bookList;
    }
}
