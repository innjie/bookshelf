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
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "Users")
public class UserDTO {
    @NotNull
    @Id
    @GeneratedValue
    @Column(name = "idx")
    private long idx;

    @NotNull
    @Column(name = "nickname")
    private String nickname;

    @NotNull
    @Column(name = "id")
    private String id;

    @NotNull
    @Column(name = "password")
    private String password;

    @Column(name = "profileimg")
    private Byte profileImg;

    @Column(name = "updatedate")
    private Date updateDate;

    @Column(name = "isdelete")
    private int isDelete;
}
