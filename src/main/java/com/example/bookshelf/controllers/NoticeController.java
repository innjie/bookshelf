package com.example.bookshelf.controllers;

import com.example.bookshelf.Domain.NoticeDTO;
import com.example.bookshelf.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class NoticeController {
    @Autowired
    NoticeService noticeService;

    @GetMapping("/notice/list")
    @ResponseBody
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
}
