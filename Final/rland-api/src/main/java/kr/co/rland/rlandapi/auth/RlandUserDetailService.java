package kr.co.rland.rlandapi.auth;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import kr.co.rland.rlandapi.entity.Member;
import kr.co.rland.rlandapi.repository.MemberRepository;

@Service
public class RlandUserDetailService implements UserDetailsService {

  @Autowired
  private MemberRepository repository;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

    RlandUserDetails user = new RlandUserDetails();
    Member member = repository.findByUserName(username);

    List<GrantedAuthority> authorities = new ArrayList<>();
    authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));

    user.setUsername(member.getUserName());
    user.setId(member.getId());
    user.setPassword(member.getPwd());
    user.setEmail(member.getEmail());
    user.setAuthorties(authorities);

    return user;
  }

}
