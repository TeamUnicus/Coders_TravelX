package com.coders.travelx.controller;

import com.coders.travelx.dto.ChangePasswordRequest;
import com.coders.travelx.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    private final UserService userService;


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
}

