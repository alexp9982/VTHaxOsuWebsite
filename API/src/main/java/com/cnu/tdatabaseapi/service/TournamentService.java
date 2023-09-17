package com.cnu.tdatabaseapi.service;

import com.cnu.tdatabaseapi.record.TournamentEntry;

import java.util.List;

public interface TournamentService {

    public List<TournamentEntry> getTournaments();

    public TournamentEntry getTournamentByID(int id);

    public TournamentEntry addEntry(TournamentEntry tournamentEntry);

    public TournamentEntry deleteEntry(int id);

    public TournamentEntry updateEntry(int id, TournamentEntry tournamentEntry);

    public Boolean isIdDuplicate(int id);
}
