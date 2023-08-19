package com.coders.travelx.service;

import com.coders.travelx.dto.NewFlightDto;
import com.coders.travelx.model.FlightDetails;
import com.coders.travelx.model.Travel;

public interface TravelService {
    Travel save(NewFlightDto newFlightDto);

    FlightDetails saveFlightDetails(NewFlightDto newFlightDto, Travel travel);
}
