package com.coders.travelx.service;



import com.coders.travelx.model.User;
import com.coders.travelx.model.VerificationCode;
import com.coders.travelx.repository.UserRepository;
import com.coders.travelx.repository.VerificationCodeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.Calendar;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PasswordResetServiceImpl implements PasswordResetService{

    private final VerificationCodeRepository verificationCodeRepository;

    private final UserRepository userRepository;

    private final MailService mailService;

    private final PasswordEncoder passwordEncoder;


    public String requestPasswordReset(String email,String applicationUrl) {
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isEmpty()){
            return "Invalid Email";
        }
        VerificationCode verificationCode = new VerificationCode(user.get(),UUID.randomUUID().toString());
        String url = applicationUrl + "/api/v1/password-reset/verify-reset-code?code=" + verificationCode.getCode();

        verificationCodeRepository.save(verificationCode);

        mailService.sendPasswordResetEmail(user.get(),url);

        return "Reset Email Sent";

    }


    public String validateVerificationCode(String code) {
        VerificationCode verificationCode = verificationCodeRepository.findByCode(code);

        if(verificationCode == null ){
            return "invalid";

        }
        User user = verificationCode.getUser();
        Calendar cal = Calendar.getInstance();

        if ((verificationCode.getExpirationTime().getTime()
                - cal.getTime().getTime()) <= 0) {
            verificationCodeRepository.delete(verificationCode);
            return "expired";
        }

        return "valid";


    }


    public String resendVerificationEmail(String code,String applicationUrl) {

        VerificationCode verificationCode = verificationCodeRepository.findByCode(code);
        String Newcode = UUID.randomUUID().toString();
        verificationCode.setCode(Newcode);
        verificationCodeRepository.save(verificationCode);

        String url = applicationUrl + "/api/v1/password-reset/verify-reset-code?code=" + Newcode;


        mailService.sendPasswordResetEmail(verificationCode.getUser(),url);
        return "Reset Email Send";
    }


    public void resetPassword(String newPassword,String code) {
        VerificationCode verificationCode = verificationCodeRepository.findByCode(code);
        User user = verificationCode.getUser();

        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
        // Logic to reset the user's password
        // Update the user's password based on the provided new password
    }


}

