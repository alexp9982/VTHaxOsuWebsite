package com.cnu.tdatabaseapi.controller;

import com.cnu.tdatabaseapi.record.UserEntry;
import com.cnu.tdatabaseapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@RestController
@RequestMapping( value="/api", method={RequestMethod.GET, RequestMethod.POST})
public class UserController {
    @Autowired
    private UserService userService;

    private final Random random = new Random();
    @GetMapping("/getUsers")
    public List<UserEntry> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/getUserByID/{id}")
    public UserEntry getUserByID(@PathVariable int id) {
        return userService.getUser(id);
    }

    @PostMapping("/createUser")
    public UserEntry insert(@RequestBody UserEntry userEntry) {
        int rando = random.nextInt();
        while (userService.isIdDuplicate(rando)) {
            rando = random.nextInt();
        }
        userEntry.setId(rando);
        return userService.addEntry(userEntry);
    }

    @DeleteMapping("/deleteUser/{id}")
    public UserEntry delete(@PathVariable int id) {
        return userService.deleteEntry(id);
    }

    @PutMapping("/updateUser/{id}")
    public UserEntry update(@PathVariable int id, @RequestBody UserEntry userEntry) {
        return userService.updateEntry(id, userEntry);
    }
}
