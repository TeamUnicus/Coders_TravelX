package com.coders.travelx.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    private int[] seats;

    private Date departureTime;
    private Date arrivalTime;

}
