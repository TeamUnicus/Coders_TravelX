package com.coders.travelx.service;




import com.coders.travelx.model.User;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailServiceImpl implements MailService{

    private final JavaMailSender javaMailSender;


    public MailServiceImpl(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public String sendVerifyEmail(User user, String url) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom("bidcircleauction@gmail.com");
        message.setTo(user.getEmail());
        String text = "Hi "+ user.getFirstname() + " " +user.getLastname() +"\n\n"
                + "You’re almost ready to get Onboard with TravelX" +"\n"
                +"Verify your email address " + url+"\n\n"+
                "Thanks,"+"\n"
                +"TravelX Team";
        message.setSubject("Verify your Email");
        message.setText(text);
        System.out.println(message);

        javaMailSender.send(message);

        return "Mail sent successfully";
    }

    public String sendPasswordResetEmail(User user, String url) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom("bidcircleauction@gmail.com");
        message.setTo(user.getEmail());

        String text = "Hi " + user.getFirstname() + " " + user.getLastname() + ",\n\n"
                + "You have requested a password reset for your TravelX account." + "\n"
                + "Please click on the following link to reset your password:\n" + url + "\n\n"
                + "If you didn't initiate this request, you can safely ignore this email.\n\n"
                + "Thanks,\n"
                + "TravelX Team";

        message.setSubject("Password Reset Request");
        message.setText(text);
        System.out.println(message);

        javaMailSender.send(message);

        return "Password reset email sent successfully";
    }



}