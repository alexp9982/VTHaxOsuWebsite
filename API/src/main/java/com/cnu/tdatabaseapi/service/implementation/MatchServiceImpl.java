package com.cnu.tdatabaseapi.service.implementation;

import com.cnu.tdatabaseapi.record.MatchEntry;
import com.cnu.tdatabaseapi.repository.MatchRepository;
import com.cnu.tdatabaseapi.service.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MatchServiceImpl implements MatchService {

    @Autowired
    private MatchRepository matchRepository;
    @Override
    public List<MatchEntry> getMatches() {
        return matchRepository.findAll();
    }

    @Override
    public MatchEntry getMatch(int id) {
        return matchRepository.findById(id).get();
    }

    @Override
    public MatchEntry addEntry(MatchEntry matchEntry) {
        return matchRepository.save(matchEntry);
    }

    @Override
    public MatchEntry deleteEntry(int id) {
        MatchEntry matchEntry = matchRepository.findById(id).get();
        matchRepository.delete(matchEntry);
        return matchEntry;
    }

    @Override
    public MatchEntry updateEntry(int id, MatchEntry matchEntry) {
        MatchEntry matchEntryVar = matchRepository.findById(id).get();
        matchEntryVar.setTournamentID(matchEntry.getTournamentID());
        matchEntryVar.setUser1ID(matchEntry.getUser1ID());
        matchEntryVar.setUser2ID(matchEntry.getUser2ID());
        matchEntryVar.setMatchTime(matchEntry.getMatchTime());
        matchEntryVar.setUser1Score(matchEntry.getUser1Score());
        matchEntryVar.setUser2Score(matchEntry.getUser2Score());
        matchRepository.save(matchEntryVar);
        return matchEntryVar;
    }

    @Override
    public List<MatchEntry> getPlayerMatches(int userID) {
        List<MatchEntry> allMatches = getMatches();
        List<MatchEntry> filtered = new ArrayList<>();
        for (MatchEntry m : allMatches) {
            if ((m.getUser1ID() == userID) || (m.getUser2ID() == userID)) {
                filtered.add(m);
            }
        }
        return filtered;
    }

    @Override
    public List<MatchEntry> getTournamentMatches(int tournamentID) {
        List<MatchEntry> allMatches = getMatches();
        List<MatchEntry> filtered = new ArrayList<>();
        for (MatchEntry m : allMatches) {
            if (m.getTournamentID() == tournamentID) {
                filtered.add(m);
            }
        }
        return filtered;
    }
}
