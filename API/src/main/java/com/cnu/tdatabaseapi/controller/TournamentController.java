package com.cnu.tdatabaseapi.controller;

import com.cnu.tdatabaseapi.record.TournamentEntry;
import com.cnu.tdatabaseapi.service.TournamentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping( value="/api", method={RequestMethod.GET, RequestMethod.POST})
public class TournamentController {
    @Autowired
    private TournamentService tournamentService;

    @GetMapping("/getTournaments")
    public List<TournamentEntry> getTournaments() {
        // Use the injected tournamentService to fetch tournaments
        return tournamentService.getTournaments();
    }

    @PostMapping("/createTournament")
    public TournamentEntry insert(@RequestBody TournamentEntry tournamentEntry) {
        // Use the injected tournamentService to add a tournament
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
}
