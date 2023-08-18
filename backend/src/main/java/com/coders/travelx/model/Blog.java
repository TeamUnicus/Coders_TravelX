package com.coders.travelx.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Blog {
    @Id
    private String name;

    @Lob
    private String description;

    private String distance;
    private String nRestuarants;

    @OneToMany(mappedBy = "blog")
    private List<Image> images = new ArrayList<>();

    public void addImages(Image image) {
        this.images.add(image);
    }




}
