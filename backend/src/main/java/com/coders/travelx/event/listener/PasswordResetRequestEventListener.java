//package com.coders.travelx.event.listener;
//
//
//
//import com.coders.travelx.event.PasswordResetRequestEvent;
//import com.coders.travelx.model.User;
//import com.coders.travelx.service.MailService;
//import com.coders.travelx.service.PasswordResetService;
//import com.coders.travelx.service.UserService;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.context.ApplicationListener;
//import org.springframework.stereotype.Component;
//
//import java.util.UUID;
//
//@Component
//@Slf4j
//public class PasswordResetRequestEventListener implements
//        ApplicationListener<PasswordResetRequestEvent> {
//
//    private final PasswordResetService passwordResetService;
//
//    private final UserService userService;
//    private final MailService mailService;
//
//    public PasswordResetRequestEventListener(PasswordResetService passwordResetService, UserService userService, MailService mailService) {
//        this.passwordResetService = passwordResetService;
//        this.userService = userService;
//        this.mailService = mailService;
//    }
//
//    @Override
//    public void onApplicationEvent(PasswordResetRequestEvent event) {
//        // Generate a new verification code for password reset
//        User user = getUserFromEvent(event);
//        String code = generateVerificationCode();
//
//        // Save the verification code using your VerificationCodeRepository
//        passwordResetService.saveVerificationCodeForUser(code, user);
//
//        // Construct the reset link and send mail to user
//        String resetLink = event.getApplicationUrl()
//                + "/api/v1/password-reset/verify-reset-code?email="
//                + user.getEmail() + "&code=" + code;
//
//        mailService.sendResetPasswordEmail(user.getEmail(), resetLink);
//    }
//
//    private User getUserFromEvent(PasswordResetRequestEvent event) {
//        String email = event.getUserEmail();
//        userService.
//
//        return event.getUser();
//    }
//
//    private String generateVerificationCode() {
//        // Generate and return a new verification code
//        return UUID.randomUUID().toString();
//    }
//}
