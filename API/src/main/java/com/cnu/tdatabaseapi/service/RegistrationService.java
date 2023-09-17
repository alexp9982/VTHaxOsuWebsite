package com.cnu.tdatabaseapi.service;

import com.cnu.tdatabaseapi.record.RegistrationEntry;

import java.util.List;

public interface RegistrationService {
    public List<RegistrationEntry> getRegistrations();

    public List<RegistrationEntry> getTRegistrations(int tournamentID);

    public List<RegistrationEntry> getURegistrations(int userID);

    public RegistrationEntry addEntry(RegistrationEntry registrationEntry);

    public RegistrationEntry deleteEntry(int id);

    public Boolean isIdDuplicate(int id);
}
