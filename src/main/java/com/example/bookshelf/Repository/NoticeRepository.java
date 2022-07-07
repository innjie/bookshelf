package com.example.bookshelf.Repository;

import com.example.bookshelf.Domain.NoticeDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NoticeRepository extends JpaRepository<NoticeDTO, Integer> {
    @Query(value = "SELECT * FROM NoticeTbl", nativeQuery = true)
    List<NoticeDTO> getNoticeList();
    @Query(value = "SELECT * FROM NoticeTbl WHERE idx = :idx", nativeQuery = true)
    NoticeDTO getNotice(long idx);
    @Query(value = "INSERT INTO NoticeTbl (title, contents) VALUES(#{#notice.title}, #{#notice.contents})", nativeQuery = true)
    void insertNotice(NoticeDTO notice);
}
