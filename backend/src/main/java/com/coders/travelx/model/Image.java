package com.coders.travelx.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Image {
    @Id
    private String fileName;

    @ManyToOne()
    @JoinColumn(
            name = "blog_id",
            referencedColumnName = "name"
    )@JsonIgnore
    private Blog blog;



}
