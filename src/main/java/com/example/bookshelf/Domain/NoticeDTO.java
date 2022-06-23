package com.example.bookshelf.Domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NoticeDTO {
    @NotNull
    private long idx;
    @NotNull
    private long userIdx;
    @NotNull
    private String title;
    @NotNull
    private String contents;
    @NotNull
    private Date updateDate;
    private Boolean isDelete;
}
