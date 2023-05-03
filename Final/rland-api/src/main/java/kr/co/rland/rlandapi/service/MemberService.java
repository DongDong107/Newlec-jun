package kr.co.rland.rlandapi.service;

import kr.co.rland.rlandapi.entity.Member;

public interface MemberService {

  boolean isVaild(String userName, String password);

  Member getByUsername(String userName);

}
