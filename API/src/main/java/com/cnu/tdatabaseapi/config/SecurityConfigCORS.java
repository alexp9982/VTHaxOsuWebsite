package com.cnu.tdatabaseapi.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfigCORS {

    @Bean
    public SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers("/login").permitAll() // Allow unauthenticated access to the login route
                                .anyRequest().authenticated()
                )
                .csrf().disable() // Disable CSRF protection
                .cors(); // Enable CORS

        // You can add more security configurations here

        return http.build();
    }
}