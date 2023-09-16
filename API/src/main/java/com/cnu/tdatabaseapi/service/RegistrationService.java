package com.cnu.tdatabaseapi.service;

import com.cnu.tdatabaseapi.record.RegistrationEntry;
import com.cnu.tdatabaseapi.repository.RegistrationRepository;

import java.util.List;

public interface RegistrationService {
    public List<RegistrationEntry> getRegistrations();

    public List<RegistrationEntry> getRegistration(int tournamentID);

    public RegistrationEntry addEntry(RegistrationEntry registrationEntry);

    public RegistrationEntry deleteEntry(int id);
}
