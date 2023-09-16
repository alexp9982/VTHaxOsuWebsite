package com.cnu.tdatabaseapi.record;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "tournament-entry")

public class TournamentEntry {

    @Id
    private Integer id;

    private String name;
    private String description;
    private String userID;
    private String closingDate;
    private Integer minRank;
    private Integer maxRank;
    private String mode;

//    public TournamentEntry(String id, String name, String description, String userID, String closingDate, int minRank, int maxRank, String mode) {
//        super();
//        this.id = id;
//        this.name = name;
//        this.description = description;
//        this.userID = userID;
//        this.closingDate = closingDate;
//        this.minRank = minRank;
//        this.maxRank = maxRank;
//        this.mode = mode;
//    }
}
