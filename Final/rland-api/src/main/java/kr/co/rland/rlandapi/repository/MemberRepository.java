package kr.co.rland.rlandapi.repository;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rland.rlandapi.entity.Member;

public interface MemberRepository extends JpaRepository<Member, Integer> {

  // 앞부분은 DB 쿼리문이 아니라 entity와 관련되어있다.
  @Query("from Member where userName = :username")
  Member findByUserName(String username);

}
