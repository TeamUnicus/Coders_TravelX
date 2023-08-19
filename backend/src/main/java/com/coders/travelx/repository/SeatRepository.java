package com.coders.travelx.repository;

import com.coders.travelx.model.SeatId;
import com.coders.travelx.model.Seat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SeatRepository extends JpaRepository<Seat, SeatId> {

    @Query(
            value = "select * from seat where name = ?1 and flight_id = ?2 ",
            nativeQuery = true
    )
    Seat getSeat(String seatName, Long flightId);
}
