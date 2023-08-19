package com.coders.travelx.service;

import com.coders.travelx.dto.MyBookingResponse;

import java.util.List;

public interface UserService {

    void changePassword(String userEmail, String currentPassword, String newPassword);

    List<MyBookingResponse> getBookingsByEmail(String email);
}
