package com.example.bookshelf.Domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProfileInsertDTO {
    @NotNull
    private String nickname;

    @NotNull
    private String id;

    @NotNull
    private String password;

    private String confirmPassword;

    private MultipartFile profileImg;
}
