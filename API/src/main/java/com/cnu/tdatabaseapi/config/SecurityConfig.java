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
        http.cors().and().csrf().disable()
//                .authorizeHttpRequests( auth -> {
//                    auth.requestMatchers("/api/createTournament").authenticated();
//                    auth.requestMatchers("/api/createMatch").authenticated();
//                    auth.requestMatchers("/api/createRegistration").authenticated();
//                    auth.requestMatchers("/api/test").authenticated();



//                    auth.requestMatchers("/**").permitAll();
//                })
//                .formLogin().loginProcessingUrl("/login").
//                defaultSuccessUrl("localhost:3000/TournamentListings")

                .oauth2Login().defaultSuccessUrl("http://localhost:3000/TournamentListings");
        http.logout().logoutSuccessUrl("http://localhost:3000/TournamentListings");

        return http.build();


    }
}
