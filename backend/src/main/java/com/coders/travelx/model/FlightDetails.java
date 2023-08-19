package com.coders.travelx.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private String price;

    @OneToMany(mappedBy = "flightDetails")
    private List<Seat> seats = new ArrayList<>();

    @ManyToOne()
    @JoinColumn(
            name = "travel_id",
            referencedColumnName = "id"
    )@JsonIgnore
    private Travel travel;

    public void addSeats(Seat seat){
        this.seats.add(seat);
    }




}
