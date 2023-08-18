package com.coders.travelx.repository;

import com.coders.travelx.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogRepository extends JpaRepository<Blog, String> {

    @Query(
            value = "select name,location from blog",
            nativeQuery = true
    )
    List<Object[]> getAllBlogsHeader();
}
