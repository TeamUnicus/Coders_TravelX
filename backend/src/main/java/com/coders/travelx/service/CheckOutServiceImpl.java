package com.coders.travelx.service;

import com.amazonaws.services.kms.model.NotFoundException;
import com.coders.travelx.dto.BookingRequest;
import com.coders.travelx.model.Booking;
import com.coders.travelx.model.FlightDetail;
import com.coders.travelx.model.Seat;
import com.coders.travelx.model.User;
import com.coders.travelx.repository.BookingRepository;
import com.coders.travelx.repository.FlightDetailsRepository;
import com.coders.travelx.repository.SeatRepository;
import com.coders.travelx.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CheckOutServiceImpl implements CheckOutService{
    @Autowired
    private SeatRepository seatRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FlightDetailsRepository flightDetailsRepository;

    @Override
    public void placeBooking(BookingRequest bookingRequest) {
        for(String seatName: bookingRequest.getSeatList()){
            Seat seat = seatRepository.getSeat(seatName, Long.valueOf(bookingRequest.getFlightId()));
            seat.setAvailable(false);
            seatRepository.save(seat);
            Booking booking = new Booking();
            Optional<User> userOptional = userRepository.findByEmail(bookingRequest.getUserName());
            User user = userOptional.orElseThrow(()-> new NotFoundException("No user according to email"));

            Optional<FlightDetail> flightDetailsOptional = flightDetailsRepository.findById(Long.valueOf(bookingRequest.getFlightId()));
            FlightDetail flightDetails = flightDetailsOptional.orElseThrow(()-> new NotFoundException("no such flight"));
            booking.setFlightDetails(flightDetails);
            booking.setUser(user);
            booking.setSeatName(seatName);
            bookingRepository.save(booking);
            user.addBookings(booking);
            userRepository.save(user);

        }
    }
}
