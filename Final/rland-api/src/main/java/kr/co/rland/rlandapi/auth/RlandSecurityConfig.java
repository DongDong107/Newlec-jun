package kr.co.rland.rlandapi.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class RlandSecurityConfig {

  @Autowired
  private GoogleUserDeteilsService googleUserDeteilsService;

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

    http
        .csrf().disable()
        .authorizeHttpRequests(authorize -> authorize
            .requestMatchers("/admin/**").hasAnyRole("ADMIN")
            .requestMatchers("/member/**").hasAnyRole("ADMIN", "MEMBER")
            .anyRequest().permitAll())

        .formLogin()
        .loginPage("/user/login") // get
        .loginProcessingUrl("/user/login") // post
        .defaultSuccessUrl("/index")

        .and()
        .logout()
        .logoutUrl(("/user/logout"))
        .logoutSuccessUrl("/user/login")

        .and()
        .oauth2Login()
        .userInfoEndpoint()
        .userService(this.googleUserDeteilsService);

    return http.build();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Bean
  public UserDetailsService userDetailsService() {

    return new RlandUserDetailService();
  }
}
