package com.example.bookshelf.service;

import com.example.bookshelf.Domain.NoticeDTO;
import com.example.bookshelf.Repository.NoticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
public class NoticeService {
    @Autowired
    NoticeRepository noticeRepository;
    @PersistenceContext
    private EntityManager em;

    public List<NoticeDTO> getNoticeList() {
        List<NoticeDTO> noticeList = noticeRepository.getNoticeList();
        return noticeList;
    }
    public NoticeDTO getNotice(long idx) {
        NoticeDTO notice = noticeRepository.getNotice(idx);
        return notice;
    }
    public void insertNotice(NoticeDTO notice) {
        noticeRepository.insertNotice(notice);
    }
    public void updateNotice(NoticeDTO notice) {
        noticeRepository.updateNotice(notice);
    }
    public void deleteNotice(long idx) {
        noticeRepository.deleteNotice(idx);
    }
}
