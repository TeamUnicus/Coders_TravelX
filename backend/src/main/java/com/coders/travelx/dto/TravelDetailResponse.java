package com.coders.travelx.dto;

import lombok.Data;

@Data
public class TravelDetailResponse {
    private String departureDate;
    private String arrivalDate;
    private String departureHour;
    private String departureMinute;
    private String arrivalMinute;
    private String arrivalHour;
    private String flightName;
    private String price;


}
