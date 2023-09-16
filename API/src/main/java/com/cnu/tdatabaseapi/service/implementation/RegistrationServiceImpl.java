package com.cnu.tdatabaseapi.service.implementation;

import com.cnu.tdatabaseapi.record.RegistrationEntry;
import com.cnu.tdatabaseapi.repository.RegistrationRepository;
import com.cnu.tdatabaseapi.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service

public class RegistrationServiceImpl implements RegistrationService {
    @Autowired
    private RegistrationRepository registrationRepository;
    @Override
    public List<RegistrationEntry> getRegistrations() {
        return registrationRepository.findAll();
    }

    @Override
    public List<RegistrationEntry> getTRegistrations(int tournamentID) {
        List<RegistrationEntry> allRegs = getRegistrations();
        List<RegistrationEntry> filtered = new ArrayList<>();
        for (RegistrationEntry r : allRegs) {
            if (r.getTournamentID() == tournamentID) {
                filtered.add(r);
            }
        }
        return filtered;
    }

    @Override
    public RegistrationEntry addEntry(RegistrationEntry registrationEntry) {
        return registrationRepository.save(registrationEntry);
    }

    @Override
    public RegistrationEntry deleteEntry(int id) {
        RegistrationEntry registrationEntry = registrationRepository.findById(id).get();
        registrationRepository.delete(registrationEntry);
        return registrationEntry;
    }
}
