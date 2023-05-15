package kr.co.rland.rlandapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.co.rland.rlandapi.service.MemberService;

@Controller
@RequestMapping("member")
public class MemberController {

  @Autowired
  private MemberService service;

  // @GetMapping("login")

  @GetMapping("/index")
  public String index() {
    return "index";
  }

  // @PostMapping("login")
  // @ResponseBody
  // public ResponseEntity<Map<String, Object>> isVaild(String userName, String
  // password) {

  // System.out.println(userName);
  // System.out.println(password);

  // Map<String, Object> dto = new HashMap<>();
  // dto.put("result", null);

  // if (service.isVaild(userName, password)) {
  // Member member = service.getByUsername(userName);
  // dto.put("result", member);
  // dto.put("roles", new String[] { "ADMIN", "TEACHER" });
  // }

  // return new ResponseEntity<Map<String, Object>>(dto, HttpStatus.OK);
  // }
}
