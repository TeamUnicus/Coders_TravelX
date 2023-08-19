package com.coders.travelx.service;

import com.coders.travelx.model.Blog;
import com.coders.travelx.model.Image;
import com.coders.travelx.repository.BlogRepository;
import com.coders.travelx.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ImageServiceImpl implements  ImageService{

    @Autowired
    private BlogRepository blogRepository;

    @Autowired
    private ImageRepository imageRepository;

    @Override
    public void addImage(String filename, String title) {
        Image image = new Image();
        image.setFileName(filename);
        Optional<Blog> blogOptional = blogRepository.findById(title);
        Blog blog = blogOptional.orElseThrow(() -> new NoSuchElementException("blog not found"));
        image.setBlog(blog);
        imageRepository.save(image);
        blog.addImages(image);
        blogRepository.save(blog);




    }
}
