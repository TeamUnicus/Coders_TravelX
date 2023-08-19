package com.coders.travelx.repository;

import com.coders.travelx.model.SeatId;
import com.coders.travelx.model.Seats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeatRepository extends JpaRepository<Seats, SeatId> {
}
