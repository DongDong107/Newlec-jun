package com.rland.web.controller;

import java.io.File;
import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpServletRequest;

// @CrossOrigin(origins = "http://127.0.0.1:5500")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/")
public class HomeController {

  // @ResponseBody
  @GetMapping
  public String index() {

    return "hello index";
  }

  @PostMapping("upload")
  public ResponseEntity<String> upload(MultipartFile file, HttpServletRequest request)
      throws IllegalStateException, IOException {

    // 파일을 안보냈으면? 처리해주기
    if (file.isEmpty())
      return new ResponseEntity<String>("파일을 전송하지 않았습니다.", HttpStatus.BAD_REQUEST);

    String urlPath = "/upload";
    // getServletContext() 임시주소??
    String realPath = request.getServletContext().getRealPath(urlPath);

    System.out.println(realPath);

    File filePath = new File(realPath);
    if (!filePath.exists())
      filePath.mkdirs();

    String fileName = file.getOriginalFilename();
    // 폴더구조가 c:\tools\home \ upload a.jpg 에서 upload와 jpg 사이에 \ 가있는지 없는지!
    // 그사이에 \ 를 그냥 더할수는 없고 File.separator를 이용한다!
    File saveFile = new File(filePath + File.separator + fileName);
    System.out.println(filePath + File.separator + fileName);

    file.transferTo(saveFile);

    // ResponseEntity 응답에 대한 내용에 대해서 알아보는 중.
    return new ResponseEntity<String>(fileName, HttpStatus.OK);
  }
}
