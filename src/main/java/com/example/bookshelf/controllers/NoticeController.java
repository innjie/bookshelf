package com.example.bookshelf.controllers;

import com.example.bookshelf.Domain.NoticeDTO;
import com.example.bookshelf.service.NoticeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class NoticeController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    NoticeService noticeService;

    @GetMapping("/notice/list")
    @ResponseBody
    //pageNo 처리 필요
    public Map<String, Object> getNoticeList() {
        Map<String, Object> result = new HashMap<>();

        List<NoticeDTO> noticeList = noticeService.getNoticeList();
        result.put("noticeList", noticeList);
        return result;
    }

    @GetMapping("/notice/detail")
    @ResponseBody
    public Map<String, Object> getNotice(@RequestParam long idx) {
        Map<String, Object> result = new HashMap<>();

        NoticeDTO notice = noticeService.getNotice(idx);
        result.put("notice", notice);
        return result;
    }

    @PostMapping("/notice/insert")
    @ResponseBody
    public Map<String, Object> insertNotice(NoticeDTO notice) {
        Map<String, Object> result = new HashMap<>();
        logger.info(notice.toString());
        try {
            noticeService.insertNotice(notice);
            result.put("result", "success");
        } catch (Exception e) {
            e.printStackTrace();
            result.put("result", "fail");
        }
        return result;
    }
    @ResponseBody
    @PutMapping("/notice/update")
    public Map<String, Object> updateNotice(NoticeDTO notice){
        Map<String, Object> resultMap = new HashMap<>();
        logger.info(notice.toString());
        try {
            noticeService.updateNotice(notice);
            logger.info(noticeService.getNotice(6).toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return resultMap;
    }
    @ResponseBody
    @DeleteMapping("/notice/delete")
    public Map<String, Object> deleteNotice(long idx) {
        Map<String, Object> resultMap = new HashMap<>();
        logger.info("idx : " + idx);
        try{
            //delete action
            noticeService.deleteNotice(idx);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return resultMap;
    }
}

