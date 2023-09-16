package com.cnu.tdatabaseapi.record;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "tournament-entry")

public class TournamentEntry {

    private @Id Integer id;

    private String name;
    private String description;
    private String userID;
    private String closingDate;
    private Integer minRank;
    private Integer maxRank;
    private String mode;

}
