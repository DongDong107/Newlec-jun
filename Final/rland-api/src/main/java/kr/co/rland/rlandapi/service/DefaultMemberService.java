package kr.co.rland.rlandapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.rland.rlandapi.entity.Member;
import kr.co.rland.rlandapi.repository.MemberRepository;

@Service
public class DefaultMemberService implements MemberService {

  @Autowired
  private MemberRepository repository;

  @Override
  public boolean isVaild(String userName, String password) {
    // Optional<Member> member = repository.findById(1);
    Member member = repository.findByUserName("newlec");
    System.out.println(member.toString());

    return false;
  }

}
