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
public class Seat {

    @EmbeddedId
    private SeatId seatId;

    private boolean available = true;


    @ManyToOne()
    @JoinColumn(
            name = "flight_id",
            referencedColumnName = "id"
    )@JsonIgnore
    private FlightDetails flightDetails;


}
