package com.example.bookshelf.Domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@Entity (name="Booktbl")
@AllArgsConstructor
@NoArgsConstructor
public class BookDTO {
    @NotNull
    @Id
    @GeneratedValue
    @Column(name = "idx")
    private long idx;
    @NotNull
    @Column(name = "title")
    private String title;
    @NotNull
    @Column(name = "author")
    private String author;
    @NotNull
    @Column(name = "contents")
    private String contents;
    @Column(name = "score")
    @NotNull
    private int score;
    @Column(name = "updatedate")
    @NotNull
    private Date updateDate;
    @NotNull
    @Column(name = "isdelete")
    private boolean isDelete;
}
