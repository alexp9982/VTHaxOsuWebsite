package com.cnu.tdatabaseapi.service.implementation;

import com.cnu.tdatabaseapi.record.UserEntry;
import com.cnu.tdatabaseapi.repository.UserRepository;
import com.cnu.tdatabaseapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public List<UserEntry> getUsers() {
        return userRepository.findAll();
    }

    public UserEntry getUser(int id) {
        return userRepository.findById(id).get();
    }
    @Override
    public UserEntry addEntry(UserEntry userEntry) {
        return userRepository.save(userEntry);
    }

    @Override
    public UserEntry deleteEntry(int id) {
        UserEntry userEntry = userRepository.findById(id).get();
        userRepository.delete(userEntry);
        return userEntry;
    }

    @Override
    public UserEntry updateEntry(int id, UserEntry userEntry) {
        UserEntry userEntryVar = userRepository.findById(id).get();
        userEntryVar.setName(userEntry.getName());
        userEntryVar.setRank(userEntry.getRank());
        userRepository.save(userEntryVar);
        return userEntryVar;
    }

    public Boolean isIdDuplicate(int id) {
        List<UserEntry> allUsers = getUsers();
        for (UserEntry u : allUsers) {
            if (u.getId() == id) {
                return true;
            }
        }
        return false;
    }
}
