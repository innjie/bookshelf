package com.example.bookshelf.Domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    @NotNull
    @Id
    @GeneratedValue
    private long idx;
    @NotNull
    private String nickname;
    @NotNull
    private String id;
    @NotNull
    private String password;
    private Byte img;
    private Date updateDate;
    private int isDelete;
}
