package com.cnu.tdatabaseapi.repository;

import com.cnu.tdatabaseapi.record.RegistrationEntry;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RegistrationRepository extends MongoRepository<RegistrationEntry, Integer> {
}
