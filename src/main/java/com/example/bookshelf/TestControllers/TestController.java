package com.example.bookshelf.TestControllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @GetMapping("/home")
    public String getHome(){
        logger.trace("Trace test");
        logger.info("INFO test");
        logger.warn("WARN test");
        logger.error("ERROR test");
        logger.debug("DEBUG test");
        return "Hello World!";
    }
}
