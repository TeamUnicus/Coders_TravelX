package com.coders.travelx.service;



import com.coders.travelx.model.User;

public interface MailService {

    String sendVerifyEmail(User user, String url);

    String sendPasswordResetEmail(User user, String url);

}
