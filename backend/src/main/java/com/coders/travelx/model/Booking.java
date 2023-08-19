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
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne()
    @JoinColumn(
            name = "user_id",
            referencedColumnName = "id"
    )@JsonIgnore
    private User user;

    private String seatName;

    @ManyToOne()
    @JoinColumn(
            name = "flight_id",
            referencedColumnName = "id"
    )@JsonIgnore
    private FlightDetail flightDetails;



}
