package com.coders.travelx.controller;

import com.coders.travelx.dto.TravelDetailResponse;
import com.coders.travelx.service.TravelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/travel")
public class TravelController {

    @Autowired
    private TravelService travelService;

    @GetMapping("/search")
    public List<TravelDetailResponse> GetSearchStartDestinationResults(@RequestParam("start") String start ,
                                                                       @RequestParam("destination") String destination) {
        return travelService.searchByStartAndDestination(start, destination);
    }


}
