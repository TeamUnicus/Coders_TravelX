package com.coders.travelx.dto;

import jakarta.persistence.Lob;
import lombok.Data;

import java.util.List;

@Data
public class BlogFullDetailDto {

    private String name;
    private String description;

    private String distance;
    private String nRestuarants;

    private String location;

    private List<byte[]> data;
}
