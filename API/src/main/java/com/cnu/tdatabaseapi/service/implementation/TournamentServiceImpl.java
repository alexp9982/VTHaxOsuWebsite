package com.cnu.tdatabaseapi.service.implementation;

import com.cnu.tdatabaseapi.record.MatchEntry;
import com.cnu.tdatabaseapi.record.TournamentEntry;
import com.cnu.tdatabaseapi.repository.TournamentRepository;
import com.cnu.tdatabaseapi.service.TournamentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TournamentServiceImpl implements TournamentService {
    @Autowired
    private TournamentRepository tournamentRepository;
    @Override
    public List<TournamentEntry> getTournaments() {
        return tournamentRepository.findAll();
    }

    @Override
    public TournamentEntry getTournamentByID(int id) {
        return tournamentRepository.findById(id).get();
    }

    @Override
    public TournamentEntry addEntry(TournamentEntry tournamentEntry) {
        return tournamentRepository.save(tournamentEntry);
    }

    @Override
    public TournamentEntry deleteEntry(int id) {
        TournamentEntry tournamentEntry = tournamentRepository.findById(id).get();
        tournamentRepository.delete(tournamentEntry);
        return tournamentEntry;
    }

    @Override
    public TournamentEntry updateEntry(int id, TournamentEntry tournamentEntry) {
        TournamentEntry tournamentEntryVar = tournamentRepository.findById(id).get();
        tournamentEntryVar.setName(tournamentEntry.getName());
        tournamentEntryVar.setDescription(tournamentEntry.getDescription());
        tournamentEntryVar.setHostID(tournamentEntry.getHostID());
        tournamentEntryVar.setClosingDate(tournamentEntry.getClosingDate());
        tournamentEntryVar.setMinRank(tournamentEntry.getMinRank());
        tournamentEntryVar.setMaxRank(tournamentEntry.getMaxRank());
        tournamentEntryVar.setMode(tournamentEntry.getMode());
        tournamentEntryVar.setImageLink(tournamentEntry.getImageLink());
        tournamentRepository.save(tournamentEntryVar);
        return tournamentEntryVar;
    }

    public Boolean isIdDuplicate(int id) {
        List<TournamentEntry> allTournaments = getTournaments();
        for (TournamentEntry t : allTournaments) {
            if (t.getId() == id) {
                return true;
            }
        }
        return false;
    }
}
