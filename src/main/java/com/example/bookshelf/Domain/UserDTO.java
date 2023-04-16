package com.example.bookshelf.Domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Blob;
import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "Usertbl")
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

    @Column(name = "updatedate")
    private Date updateDate;

    @Column(name = "isdelete")
    private int isDelete;

    @Enumerated(EnumType.STRING)
    private Authority authority;
}
