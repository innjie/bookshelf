package com.example.bookshelf.Domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="Notice")
public class NoticeDTO {
    @NotNull
    @GeneratedValue
    @Id
    @Column(name = "idx")
    private long idx;

    @NotNull
    @Column(name = "title")
    private String title;

    @NotNull
    @Column(name = "contents")
    private String contents;

    @NotNull
    @Column(name = "updatedate")
    private Date updateDate;

    @Column(name = "isdelete")
    private Boolean isDelete;
}
