package com.cnu.tdatabaseapi.controller;

import com.cnu.tdatabaseapi.record.TournamentEntry;
import com.cnu.tdatabaseapi.service.TournamentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

@RestController
@RequestMapping( value="/api", method={RequestMethod.GET, RequestMethod.POST})
public class TournamentController {
    @Autowired
    private TournamentService tournamentService;

    private Random random = new Random();
    @GetMapping("/getTournaments")
    public List<TournamentEntry> getTournaments() {
        // Use the injected tournamentService to fetch tournaments
        return tournamentService.getTournaments();
    }
    @GetMapping("/getTournamentByID/{id}")
    public TournamentEntry findTournamentByID(@PathVariable int id) {
        return tournamentService.getTournamentByID(id);
    }

    @PostMapping("/createTournament")
    public TournamentEntry insert(@RequestBody TournamentEntry tournamentEntry) {

        System.out.println("Creating tournament...");
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(authentication.getPrincipal());
        if (authentication.getPrincipal() == "anonymousUser") {
            System.out.println("Not authenticated!!");
            return null;
        }

        DefaultOAuth2User myUser = (DefaultOAuth2User) authentication.getPrincipal();

        tournamentEntry.setHostID(myUser.getAttribute("id"));


        tournamentEntry.setId(random.nextInt());
        return tournamentService.addEntry(tournamentEntry);
    }

    @DeleteMapping("/deleteTournament/{id}")
    public TournamentEntry delete(@PathVariable int id) {
        // Use the injected tournamentService to delete a tournament by ID
        return tournamentService.deleteEntry(id);
    }

    @PutMapping("/updateTournament/{id}")
    public TournamentEntry update(@PathVariable int id, @RequestBody TournamentEntry tournamentEntry) {
        // Use the injected tournamentService to update a tournament by ID
        return tournamentService.updateEntry(id, tournamentEntry);
    }

    @GetMapping("/getSelf")
    @ResponseBody
    public Object test() {
        Map<String, Object> object = new HashMap<>();

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication.getPrincipal() == "anonymousUser") {
            return ResponseEntity.status(401).body("Please sign in to use this endpoint.");
        }

        DefaultOAuth2User myUser = (DefaultOAuth2User) authentication.getPrincipal();
        object.put("username", myUser.getAttribute("username"));
        object.put("id", myUser.getAttribute("id"));
        return object;

    }
}
