package com.coders.travelx.service;

import com.coders.travelx.dto.BlogsShortDetaildto;

import java.io.IOException;
import java.util.List;

public interface BlogsService {
    List<BlogsShortDetaildto> getAll() throws IOException;
}
