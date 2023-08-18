package com.coders.travelx.repository;

import com.coders.travelx.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<Image, String> {
    @Query(
            value = "select * from image where blog_id = ?1  limit 1",
            nativeQuery = true
    )
    Image getHeaderImage(String string);
}
