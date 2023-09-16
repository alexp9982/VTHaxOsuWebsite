package com.cnu.tdatabaseapi.repository;

import com.cnu.tdatabaseapi.record.UserEntry;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<UserEntry, Integer> {
}
