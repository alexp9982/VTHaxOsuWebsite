package com.cnu.tdatabaseapi.service;

import com.cnu.tdatabaseapi.record.MatchEntry;

import java.util.List;

public interface MatchService {

    public List<MatchEntry> getMatches();

    public MatchEntry getMatch(int id);

    public MatchEntry addEntry(MatchEntry matchEntry);

    public MatchEntry deleteEntry(int id);

    public MatchEntry updateEntry(int id, MatchEntry matchEntry);

    public List<MatchEntry> getPlayerMatches(int userID);

    public List<MatchEntry> getTournamentMatches(int tournamentID);

    public Boolean isIdDuplicate(int id);
}
