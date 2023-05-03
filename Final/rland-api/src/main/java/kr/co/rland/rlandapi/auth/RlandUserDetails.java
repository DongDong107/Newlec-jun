package kr.co.rland.rlandapi.auth;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class RlandUserDetails implements UserDetails {
  private int id;
  private String username;
  private String password;
  private String email;
  private List<GrantedAuthority> authorties;

  @Override
  public String toString() {
    return "RlandUserDetails [id=" + id + ", username=" + username + ", password=" + password + ", email=" + email
        + ", authorties=" + authorties + "]";
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {

    return authorties;
  }

  @Override
  public String getPassword() {

    return password;
  }

  @Override
  public String getUsername() {

    return username;
  }

  public String getEmail() {

    return email;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public void setAuthorties(List<GrantedAuthority> authorties) {
    this.authorties = authorties;
  }

  @Override
  public boolean isAccountNonExpired() {

    return true;

  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }

}
