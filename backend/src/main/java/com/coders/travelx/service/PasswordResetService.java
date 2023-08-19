package com.coders.travelx.service;



public interface PasswordResetService {

    String requestPasswordReset(String email, String applicationUrl);

    String validateVerificationCode(String code);

    String resendVerificationEmail(String code, String applicationUrl);

    void resetPassword(String newPassword, String code);

}
