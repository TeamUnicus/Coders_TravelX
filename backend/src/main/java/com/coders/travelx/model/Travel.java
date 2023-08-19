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
public class Travel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String destination;
    private String start;

    @OneToMany(mappedBy = "travel")
    private List<FlightDetail> flightDetails = new ArrayList<>();

    public void addFlightDetails(FlightDetail flightDetail){
        this.flightDetails.add(flightDetail);
    }


}
