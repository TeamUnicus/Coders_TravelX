package com.coders.travelx.controller;

import com.coders.travelx.S3.StorageService;
import com.coders.travelx.dto.NewFlightDto;
import com.coders.travelx.model.FlightDetails;
import com.coders.travelx.model.Travel;
import com.coders.travelx.service.ImageService;
import com.coders.travelx.model.Blog;
import com.coders.travelx.repository.BlogRepository;
import com.coders.travelx.service.TravelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("api/v1/admintest")
public class AdminController {

    @Autowired
    private BlogRepository blogRepository;

    @Autowired
    private StorageService storageService;

    @Autowired
    private ImageService imageService;

    @Autowired
    private TravelService travelService;

    @PostMapping("/addBlog")
    public String addBlog(@RequestParam("file") MultipartFile[] files,
                          @RequestParam("title") String title,
                          @RequestParam("description") String description,
                          @RequestParam("distance") String distance,
                          @RequestParam("nrestuarants") String nresturants){

        Blog blog = new Blog();
        blog.setDescription(description);
        blog.setName(title);
        blog.setDistance(distance);
        blog.setNRestuarants(nresturants);
        blog.setDistance(distance);
        blogRepository.save(blog);

        for (MultipartFile file : files) {
            String filename = storageService.uploadFile(file);
            imageService.addImage(filename, title);



        }
        return "upload successfully";



    }

    @PostMapping("/addFlightDetails")
    public String addFlightDetails(@RequestBody NewFlightDto newFlightDto){
        Travel travel = travelService.save(newFlightDto);
        FlightDetails flightDetails = travelService.saveFlightDetails(newFlightDto,travel);
        return "added successfully";

    }



}
