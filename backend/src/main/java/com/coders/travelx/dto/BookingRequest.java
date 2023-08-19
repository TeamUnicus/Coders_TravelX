package com.coders.travelx.dto;

import lombok.Data;

@Data
public class BookingRequest {
    private String flightId;
    private String [] seatList;
    private String userName;

}
