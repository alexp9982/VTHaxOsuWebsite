package com.cnu.tdatabaseapi.record;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "user-entry")

public class UserEntry {

    private @Id Integer id;

    private String name;
    private Integer rank;

}
