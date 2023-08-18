package com.coders.travelx.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Seats {
    @Id
    private String id;
    private boolean available = true;

    @ManyToOne()
    @JoinColumn(
            name = "flight_id",
            referencedColumnName = "id"
    )@JsonIgnore
    private FlightDetails flightDetails;


}
