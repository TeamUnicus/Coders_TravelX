package com.coders.travelx.service;

import com.coders.travelx.dto.BlogFullDetailDto;
import com.coders.travelx.dto.BlogsShortDetaildto;
import com.coders.travelx.model.Blog;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface BlogsService {
    List<BlogsShortDetaildto> getAll() throws IOException;


    BlogFullDetailDto getBlogByName(String name) throws Exception;
}
