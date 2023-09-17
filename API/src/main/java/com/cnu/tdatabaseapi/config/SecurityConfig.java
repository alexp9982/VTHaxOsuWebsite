package com.cnu.tdatabaseapi.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.cors().and().csrf().disable()
//                .authorizeHttpRequests( auth -> {
//                    auth.requestMatchers("/api/createTournament").authenticated();
//                    auth.requestMatchers("/api/createMatch").authenticated();
//                    auth.requestMatchers("/api/createRegistration").authenticated();
//                    auth.requestMatchers("/api/test").authenticated();



//                    auth.requestMatchers("/**").permitAll();
//                })
//                .formLogin(Customizer.withDefaults())
                .oauth2Login(Customizer.withDefaults())
                .build();


    }
}
