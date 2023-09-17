package com.cnu.tdatabaseapi.service;

import com.cnu.tdatabaseapi.record.UserEntry;

import java.util.List;

public interface UserService {

    public List<UserEntry> getUsers();

    public UserEntry getUser(int id);

    public UserEntry addEntry(UserEntry userEntry);

    public UserEntry deleteEntry(int id);

    public UserEntry updateEntry(int id, UserEntry userEntry);

    public Boolean isIdDuplicate(int id);
}
