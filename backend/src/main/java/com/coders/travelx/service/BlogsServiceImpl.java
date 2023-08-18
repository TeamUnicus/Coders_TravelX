package com.coders.travelx.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;
import com.amazonaws.util.IOUtils;
import com.coders.travelx.dto.BlogsShortDetaildto;
import com.coders.travelx.model.Image;
import com.coders.travelx.repository.BlogRepository;
import com.coders.travelx.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class BlogsServiceImpl implements BlogsService{

    @Autowired
    private BlogRepository blogRepository;

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private AmazonS3 s3Client;

    @Value("${application.bucket.name}")
    private String bucketName;

    @Override
    public List<BlogsShortDetaildto> getAll() throws IOException {
        List<Object[]> mapList= blogRepository.getAllBlogsHeader();
        List<BlogsShortDetaildto> blogsShortDetaildtoList = new ArrayList<>();
        for (Object[] map: mapList) {
            BlogsShortDetaildto blogsShortDetaildto = new BlogsShortDetaildto();
            blogsShortDetaildto.setTitle(map[0].toString());
            Image image = imageRepository.getHeaderImage(map[0].toString());
            String fileName = image.getFileName();

            //get byte array from s3
            S3Object s3Object = s3Client.getObject(bucketName, fileName);
            S3ObjectInputStream inputStream = s3Object.getObjectContent();



            try {
                byte[] content = IOUtils.toByteArray(inputStream);
                blogsShortDetaildto.setData(content);
            } catch (IOException e) {
                throw new IOException("Error when converting s3 object to byte array");
            }

           blogsShortDetaildtoList.add(blogsShortDetaildto);


        }
        return blogsShortDetaildtoList;


    }
}
