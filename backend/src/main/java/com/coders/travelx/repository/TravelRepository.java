package com.coders.travelx.repository;

import com.coders.travelx.model.Travel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TravelRepository extends JpaRepository<Travel,Long> {

    @Query(
            value = "select *  from travel where start=?1 and destination=?2",
            nativeQuery = true
    )
    Optional<Travel> findByDestiAndStart(String start, String destination);
}
