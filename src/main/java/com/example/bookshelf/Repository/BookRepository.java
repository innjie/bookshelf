package com.example.bookshelf.Repository;

import com.example.bookshelf.Domain.BookDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookRepository extends JpaRepository<BookDTO, Integer> {
    @Query(value = "SELECT * FROM BookTbl", nativeQuery = true)
    List<BookDTO> getAllBookList();

    @Query(value = "SELECT * FROM Booktbl WHERE idx > :idx", nativeQuery = true)
    BookDTO getBookById(long idx);
}
