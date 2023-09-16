package com.cnu.tdatabaseapi.controller;

import com.cnu.tdatabaseapi.record.UserEntry;
import com.cnu.tdatabaseapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping( value="/api", method={RequestMethod.GET, RequestMethod.POST})
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/getUsers")
    public List<UserEntry> getUsers() {
        // Use the injected tournamentService to fetch tournaments
        return userService.getUsers();
    }

}
