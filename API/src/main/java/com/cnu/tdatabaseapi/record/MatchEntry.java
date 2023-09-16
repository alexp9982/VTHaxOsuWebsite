package com.cnu.tdatabaseapi.record;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "match-entry")
public class MatchEntry {

    private @Id Integer id;

    private Integer tournamentID;
    private Integer user1ID;
    private Integer user2ID;
    private String matchTime;
    private Integer user1Score;
    private Integer user2Score;

}
