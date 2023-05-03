package kr.co.rland.rlandapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
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

    // new BcryptPasswordEncoder();.encode()

    Member member = repository.findByUserName("newlec");
    System.out.println(member.toString());
    if (member == null)
      return false;
    // member.getPwd는 암호화된 상태, password를 암호화해서 확인시켜줌.
    else if (!BCrypt.checkpw(password, member.getPwd()))
      return false;

    return true;
  }

  @Override
  public Member getByUsername(String userName) {

    return repository.findByUserName(userName);
  }

}
