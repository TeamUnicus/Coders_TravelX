package com.coders.travelx.service;

import com.coders.travelx.dto.NewFlightDto;
import com.coders.travelx.dto.TravelDetailResponse;
import com.coders.travelx.model.FlightDetails;
import com.coders.travelx.model.Seat;
import com.coders.travelx.model.SeatId;
import com.coders.travelx.model.Travel;
import com.coders.travelx.repository.FlightDetailsRepository;
import com.coders.travelx.repository.SeatRepository;
import com.coders.travelx.repository.TravelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

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
        Optional<Travel> travelOptional = travelRepository
                .findByDestiAndStart(newFlightDto.getStart(), newFlightDto.getDestination());
        Travel travel = travelOptional.orElseGet(()->{
            Travel travelNew = new Travel();
            travelNew.setDestination(newFlightDto.getDestination().toLowerCase());
            travelNew.setStart(newFlightDto.getStart().toLowerCase());
            return travelNew;

        });
        travelRepository.save(travel);
        return travel;
    }

    @Override
    public FlightDetails saveFlightDetails(NewFlightDto newFlightDto, Travel travel) {
        FlightDetails flightDetails = new FlightDetails();

        String dateFormatPattern = "yyyy/MM/dd";
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
        flightDetails.setTravel(travel);
        flightDetails.setPrice(newFlightDto.getPrice());
        travel.addFlightDetails(flightDetails);
        travelRepository.save(travel);
        flightDetailsRepository.save(flightDetails);
        long flightId = flightDetails.getId();
        int row = Integer.parseInt(newFlightDto.getSeatRows());
        int col = Integer.parseInt(newFlightDto.getSeatCols());


        //generate seat IDs
        for (int i = 0; i<row;i++){
            char rowChar = (char) ('A' + i);
            for(int j = 0; j<col;j++){
                String seatName = rowChar+Integer.toString(j);
                SeatId seatId = new SeatId();
                seatId.setFlightDetailsId(flightId);
                seatId.setName(seatName);
                Seat seat = new Seat();
                seat.setSeatId(seatId);
                seat.setFlightDetails(flightDetails);
                seatRepository.save(seat);
                flightDetails.addSeats(seat);
                flightDetailsRepository.save(flightDetails);
            }

        }




        return flightDetails;


    }

    @Override
    public List<TravelDetailResponse> searchByStartAndDestination(String start, String destination) {
        Optional<Travel> travelOptional = travelRepository.findByDestiAndStart(start.toLowerCase(), destination.toLowerCase());
        Travel travel = travelOptional.orElseThrow(()->new NoSuchElementException("no flights available"));
        List<TravelDetailResponse> travelDetailResponsesList =new ArrayList<>();
        for (FlightDetails flight: travel.getFlightDetails()
             ) {
            TravelDetailResponse travelDetailResponse = new TravelDetailResponse();
            travelDetailResponse.setArrivalDate(String.valueOf(flight.getArrivalTime().getDate()));
            travelDetailResponse.setArrivalHour(String.valueOf(flight.getArrivalTime().getHours()));
            travelDetailResponse.setDepartureDate(String.valueOf(flight.getDepartureTime().getDate()));
            travelDetailResponse.setDepartureHour(String.valueOf(flight.getDepartureTime().getHours()));
            travelDetailResponse.setArrivalMinute(String.valueOf(flight.getArrivalTime().getMinutes()));
            travelDetailResponse.setDepartureMinute(String.valueOf(flight.getDepartureTime().getMinutes()));
            travelDetailResponse.setFlightName(flight.getFlightName());
            travelDetailResponse.setPrice(flight.getPrice());

            travelDetailResponsesList.add(travelDetailResponse);



        }return travelDetailResponsesList;


    }
}
