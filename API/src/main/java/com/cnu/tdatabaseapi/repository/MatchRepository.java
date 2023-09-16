package com.cnu.tdatabaseapi.repository;

import com.cnu.tdatabaseapi.record.MatchEntry;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MatchRepository extends MongoRepository<MatchEntry, Integer> {
}
