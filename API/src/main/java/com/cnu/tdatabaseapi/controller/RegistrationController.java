package com.cnu.tdatabaseapi.controller;

import com.cnu.tdatabaseapi.record.RegistrationEntry;
import com.cnu.tdatabaseapi.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping( value="/api", method={RequestMethod.GET, RequestMethod.POST})
public class RegistrationController {
    @Autowired
    private RegistrationService registrationService;

    @GetMapping("/getRegistrations")
    public List<RegistrationEntry> getRegistrations() {
        return registrationService.getRegistrations();
    }

    @PostMapping("/createRegistration")
    public RegistrationEntry insert(@RequestBody RegistrationEntry registrationEntry) {
        return registrationService.addEntry(registrationEntry);
    }

    @DeleteMapping("/deleteRegistration/{id}")
    public RegistrationEntry delete(@PathVariable int id) {
        return registrationService.deleteEntry(id);
    }

    @PutMapping("/findTournamentRegistrations/{tournamentID}")
    public List<RegistrationEntry> findByID(@PathVariable int tournamentID) {
        return registrationService.getTRegistrations(tournamentID);
    }
}
