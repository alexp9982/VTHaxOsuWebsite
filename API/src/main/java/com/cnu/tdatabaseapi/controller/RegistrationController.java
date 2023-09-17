package com.cnu.tdatabaseapi.controller;

import com.cnu.tdatabaseapi.record.RegistrationEntry;
import com.cnu.tdatabaseapi.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@RestController
@RequestMapping( value="/api", method={RequestMethod.GET, RequestMethod.POST})
public class RegistrationController {
    @Autowired
    private RegistrationService registrationService;

    private Random random = new Random();
    @GetMapping("/getRegistrations")
    public List<RegistrationEntry> getRegistrations() {
        return registrationService.getRegistrations();
    }

    @PostMapping("/createRegistration")
    public RegistrationEntry insert(@RequestBody RegistrationEntry registrationEntry) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        DefaultOAuth2User myUser = (DefaultOAuth2User) authentication.getPrincipal();
        if (authentication.getPrincipal() == "anonymousUser") {
            return null;
        }
        
        registrationEntry.setUserID(myUser.getAttribute("id"));
        registrationEntry.setId(random.nextInt());
        return registrationService.addEntry(registrationEntry);
    }

    @DeleteMapping("/deleteRegistration/{id}")
    public RegistrationEntry delete(@PathVariable int id) {
        return registrationService.deleteEntry(id);
    }

    @PutMapping("/findTournamentRegistrations/{tournamentID}")
    public List<RegistrationEntry> findByTID(@PathVariable int tournamentID) {
        return registrationService.getTRegistrations(tournamentID);
    }

    @PutMapping("/findUserRegistrations/{userID}")
    public List<RegistrationEntry> findByUID(@PathVariable int userID) {
        return registrationService.getURegistrations(userID);
    }
}
