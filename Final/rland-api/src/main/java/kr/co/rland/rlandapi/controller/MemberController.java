package kr.co.rland.rlandapi.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.rland.rlandapi.service.MemberService;

@RestController
@RequestMapping("members")
public class MemberController {

  @Autowired
  private MemberService service;

  @GetMapping("isvalid")
  public ResponseEntity<Map<String, Object>> isVaild(String userName, String password) {
    Map<String, Object> dto = new HashMap<>();
    dto.put("result", false);

    if (service.isVaild(userName, password))
      dto.put("result", true);

    return new ResponseEntity<Map<String, Object>>(dto, HttpStatus.OK);
  }
}
