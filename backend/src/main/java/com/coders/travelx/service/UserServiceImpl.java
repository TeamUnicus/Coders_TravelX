package com.coders.travelx.service;

import com.amazonaws.services.kms.model.NotFoundException;
import com.coders.travelx.dto.MyBookingResponse;
import com.coders.travelx.model.Booking;
import com.coders.travelx.model.User;
import com.coders.travelx.repository.UserRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }


    public void changePassword(String userEmail, String currentPassword, String newPassword) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        if (!passwordEncoder.matches(currentPassword, user.getPassword())) {
            throw new IllegalArgumentException("Current password is incorrect");
        }

        String encodedPassword = passwordEncoder.encode(newPassword);
        user.setPassword(encodedPassword);

        userRepository.save(user);
    }

    @Override
    public List<MyBookingResponse> getBookingsByEmail(String email) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        User user = userOptional.orElseThrow(()->new NotFoundException("no such user"));
        List<MyBookingResponse>  myBookingResponseList = new ArrayList<>();

        for (Booking booking:user.getBookings()){
            MyBookingResponse myBookingResponse = new MyBookingResponse();
            myBookingResponse.setBookingId(String.valueOf(booking.getId()));
            myBookingResponse.setSeatName(booking.getSeatName());
            myBookingResponse.setArrivalDate(String.valueOf(booking.getFlightDetails().getArrivalTime().getDate()));
            myBookingResponse.setArrivalHour(String.valueOf(booking.getFlightDetails().getArrivalTime().getHours()));
            myBookingResponse.setArrivalMinute(String.valueOf(booking.getFlightDetails().getArrivalTime().getMinutes()));
            myBookingResponse.setDepartureDate(String.valueOf(booking.getFlightDetails().getDepartureTime().getDate()));
            myBookingResponse.setDepartureHour(String.valueOf(booking.getFlightDetails().getDepartureTime().getHours()));
            myBookingResponse.setDepartureMinute(String.valueOf(booking.getFlightDetails().getDepartureTime().getMinutes()));

        }

        return null;
    }
}
