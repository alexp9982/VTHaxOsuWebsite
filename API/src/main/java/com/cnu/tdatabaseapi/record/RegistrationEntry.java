package com.cnu.tdatabaseapi.record;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "registration-entry")

public class RegistrationEntry {

    private @Id Integer id;

    private Integer tournamentID;
    private Integer userID;

}
