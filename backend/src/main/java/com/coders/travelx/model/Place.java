package com.coders.travelx.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class Place {
    @Id
    private String name;

    @Lob
    private String description;

    private String distance;
    private String nRestuarants;

    @OneToMany(mappedBy = "place")
    private List<Image> images = new ArrayList<>();




}
