package com.coders.travelx.controller;

import com.coders.travelx.dto.BookingRequest;
import com.coders.travelx.dto.ChangePasswordRequest;
import com.coders.travelx.dto.MyBookingResponse;
import com.coders.travelx.service.CheckOutService;
import com.coders.travelx.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    private final UserService userService;

    @Autowired
    private CheckOutService checkOutService;


    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/change-password")
    public ResponseEntity<String> changePassword(@RequestBody ChangePasswordRequest request) {
        String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        String currentPassword = request.getCurrentPassword();
        String newPassword = request.getNewPassword();

        userService.changePassword(userEmail, currentPassword, newPassword);

        return ResponseEntity.ok("Password changed successfully");
    }

    @PostMapping("/book")
    public ResponseEntity<String> ReservedBooking(@RequestBody BookingRequest bookingRequest){
        checkOutService.placeBooking(bookingRequest);

        return ResponseEntity.ok("Reserved success");

    }

    @GetMapping("/myBookings")
    public List<MyBookingResponse> GetMyBookings(@RequestParam("user") String email){
        return userService.getBookingsByEmail(email);

    }
}

