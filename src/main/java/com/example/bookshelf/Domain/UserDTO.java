package com.example.bookshelf.Domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    @NotNull
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
