package com.coders.travelx.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class FlightDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private Date departureTime;
    private Date arrivalTime;

    private String flightName;

    @OneToMany(mappedBy = "flightDetails")
    private List<Seats> seats = new ArrayList<>();

    public void addSeats(Seats seat){
        this.seats.add(seat);
    }




}
