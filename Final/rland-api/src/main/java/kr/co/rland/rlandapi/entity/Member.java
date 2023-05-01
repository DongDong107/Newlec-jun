package kr.co.rland.rlandapi.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Member {

  @Id
  private int id;
  @Column(name = "username")
  private String userName;
  private String pwd;
  private String email;
}
