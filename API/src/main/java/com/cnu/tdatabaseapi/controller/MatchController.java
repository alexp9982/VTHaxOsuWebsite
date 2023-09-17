package com.cnu.tdatabaseapi.controller;

import com.cnu.tdatabaseapi.record.MatchEntry;
import com.cnu.tdatabaseapi.service.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@RestController
@RequestMapping( value="/api", method={RequestMethod.GET, RequestMethod.POST})
public class MatchController {

    @Autowired
    private MatchService matchService;

    private Random random = new Random();
    @GetMapping("/getMatches")
    public List<MatchEntry> getMatches() {
        return matchService.getMatches();
    }

    @PostMapping("/createMatch")
    public MatchEntry createMatch(@RequestBody MatchEntry matchEntry) {
        matchEntry.setId(random.nextInt());
        return matchService.addEntry(matchEntry);
    }

    @DeleteMapping("/deleteMatch/{id}")
    public MatchEntry deleteMatch(@PathVariable int id) {
        return matchService.deleteEntry(id);
    }

    @GetMapping("/getMatchByID/{id}")
    public MatchEntry getMatchByID(@PathVariable int id) {
        return matchService.getMatch(id);
    }

    @PutMapping("/updateMatch/{id}")
    public MatchEntry updateMatch(@PathVariable int id, @RequestBody MatchEntry matchEntry) {
        return matchService.updateEntry(id, matchEntry);
    }

    @PutMapping("/findTournamentMatches/{tournamentID}")
    public List<MatchEntry> findByTID(@PathVariable int tournamentID) {
        return matchService.getTournamentMatches(tournamentID);
    }

    @PutMapping("/findUserMatches/{userID}")
    public List<MatchEntry> findByUID(@PathVariable int userID) {
        return matchService.getPlayerMatches(userID);
    }
}
