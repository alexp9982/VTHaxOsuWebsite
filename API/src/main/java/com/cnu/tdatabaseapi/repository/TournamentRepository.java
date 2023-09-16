package com.cnu.tdatabaseapi.repository;

import com.cnu.tdatabaseapi.record.TournamentEntry;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TournamentRepository extends MongoRepository<TournamentEntry, Integer> {
}
