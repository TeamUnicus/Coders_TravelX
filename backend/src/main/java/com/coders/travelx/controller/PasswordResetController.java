package com.coders.travelx.controller;

import com.coders.travelx.dto.ResetPasswordRequest;
//import com.coders.travelx.event.PasswordResetRequestEvent;
import com.coders.travelx.service.MailService;
import com.coders.travelx.service.PasswordResetService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/password-reset")
@RequiredArgsConstructor
public class PasswordResetController {

    private final PasswordResetService passwordResetService;
    private final ApplicationEventPublisher eventPublisher;
    private final MailService mailService;

    @PostMapping("/request-reset")
    public ResponseEntity<String> requestPasswordReset(@RequestParam("email") String email,
                                                       final HttpServletRequest webRequest) {
        try {
            passwordResetService.requestPasswordReset(email,applicationUrl(webRequest));
//            eventPublisher.publishEvent(new PasswordResetRequestEvent(email, applicationUrl(webRequest)));
            return ResponseEntity.ok("Password reset email sent");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Invalid email");
        }
    }

    @GetMapping("/verify-reset-code")
    public ResponseEntity<?> verifyResetCode(@RequestParam("code") String code) {
        String codeStatus = passwordResetService.validateVerificationCode(code);

        if (codeStatus.equalsIgnoreCase("valid")) {
            // Return success response or allow password reset form
            return ResponseEntity.ok("Code verified");
        } else {
            return ResponseEntity.badRequest().body("Invalid or expired code");
        }
    }

    @PostMapping("/resend-verification-email")
    public ResponseEntity<String> resendVerificationEmail(@RequestParam("code") String code,
                                                          HttpServletRequest request) {
        try {
            passwordResetService.resendVerificationEmail(code,applicationUrl(request));
            return ResponseEntity.ok("Verification email resent");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Invalid email");
        }
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody ResetPasswordRequest request,
                                                @RequestParam("code") String code) {
        try {
            passwordResetService.resetPassword(request.getNewPassword(),code);
            return ResponseEntity.ok("Password reset successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Invalid email");
        }
    }

    private String applicationUrl(HttpServletRequest request) {
        return "http://" +
                request.getServerName() +
                ":" +
                request.getServerPort() +
                request.getContextPath();
    }
}
