package com.coders.travelx.service;

import com.coders.travelx.dto.NewFlightDto;
import com.coders.travelx.model.FlightDetails;
import com.coders.travelx.model.Travel;
import com.coders.travelx.repository.FlightDetailsRepository;
import com.coders.travelx.repository.SeatRepository;
import com.coders.travelx.repository.TravelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class TravelServiceImpl implements TravelService{

    @Autowired
    private TravelRepository travelRepository;

    @Autowired
    private SeatRepository seatRepository;

    @Autowired
    private FlightDetailsRepository flightDetailsRepository;

    @Override
    public Travel save(NewFlightDto newFlightDto) {
        Travel travel = new Travel();
        travel.setDestination(newFlightDto.getDestination());
        travel.setStart(newFlightDto.getStart());
        travelRepository.save(travel);
        return travel;
    }

    @Override
    public FlightDetails saveFlightDetails(NewFlightDto newFlightDto) {
        FlightDetails flightDetails = new FlightDetails();

        String dateFormatPattern = "yyyy-MM-dd";
        SimpleDateFormat dateFormat = new SimpleDateFormat(dateFormatPattern);

        try {
            // Parse the date string into a Date object
            Date dateArrival = dateFormat.parse(newFlightDto.getArrivalDate());
            Date dateDeparture = dateFormat.parse(newFlightDto.getDepartureDate());

            // Set the new hour and minute values
            dateArrival.setHours(Integer.parseInt(newFlightDto.getArrivalHour()));
            dateArrival.setMinutes(Integer.parseInt(newFlightDto.getArrivalMinute()));

            dateDeparture.setHours(Integer.parseInt(newFlightDto.getDepartureHour()));
            dateDeparture.setMinutes(Integer.parseInt(newFlightDto.getDepartureMinute()));
            flightDetails.setArrivalTime(dateArrival);
            flightDetails.setDepartureTime(dateDeparture);


        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
        flightDetails.setFlightName(newFlightDto.getFlightName());
        flightDetailsRepository.save(flightDetails);
        return flightDetails;


    }
}
