package com.coders.travelx.Service;

import com.coders.travelx.model.Blog;
import com.coders.travelx.model.Image;
import com.coders.travelx.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ImageServiceImpl implements  ImageService{

    @Autowired
    private BlogRepository blogRepository;

    @Override
    public void addImage(String filename, String title) {
        Image image = new Image();
        image.setFileName(filename);
        Optional<Blog> blogOptional = blogRepository.findById(title);



    }
}
