# osu! Tournament Website

---
A React website that uses a SpringBoot API layer for database connections to MongoDB Atlas to allow players to 
discover, post, and play in osu! tournaments.

---

On the backend, we used a MongoDB Atlas database hosted in the cloud. This allowed us to all use the database without having
to transfer the database from computer to computer. To interact with this database, we built a REST API using SpringBoot.
There are five primary elements of this API.

1. Records - Java representation of a collection's intended schema.
2. Services - Reusable methods for interacting with and performing operations on a collection.
3. Controllers - Mapping of API endpoints to their relevant methods.
4. Authentication - Configures interaction with Oauth provider and defines permissions on routes.

---

On the front end, we used React, along with Tailwind for CSS to form the website. 

---

## Additional Files

There is a file that we are unable to upload here due to it containing several
"secrets" within. This file is for the API and is located in:

*API -> src -> main -> resources*


You will need to create a file called ***application.yml*** with the following inside of it:

```yaml
osu:
  base-url: https://osu.ppy.sh/

spring:
  data:
    mongodb:
      uri: [INSERT MONGODB SERVER HERE]
      database: tournament-db
  security:
    oauth2:
      client:
        registration:
          osu-login:
            provider: osu
            client-id: [INSERT OSU CLIENT ID HERE]
            client-secret: [INSERT OSU CLIENT SECRET HERE]
            scope:
              - identify
              - public
            authorization-grant-type: authorization_code
            redirect-uri: http://localhost:8080/login/oauth2/code/osu

        provider:
          osu:
            authorization-uri: ${osu.base-url}/oauth/authorize
            token-uri: ${osu.base-url}/oauth/token
            user-info-uri: ${osu.base-url}api/v2/me/osu
            #            jwk-set-uri: ${osu.base-url}/oauth2/v1/keys
            user-name-attribute: username
```

---
## API Spec

*/api/getTournaments*
- Returns a list of all tournaments

*/api/getTournamentByID/{id}*
- Returns tournament {id}

*/api/createTournament*
- Requires Tournament Entry body

*/api/deleteTournament/{id}*
- Deletes tournament {id}

*/api/updateTournament/{id}*
- Requires Tournament Entry body
- Updates tournament {id} with tournament body

*/api/getRegistrations*
- Returns a list of all registrations

*/api/createRegistration*
- Requires registration entry body

*/api/deleteRegistration/{id}*
- Deletes registration {id}

*/api/findTournamentRegistrations/{id}*
- Returns a list of all registrations for tournament {id}

*/api/findUserRegistrations/{id}*
- Returns a list of all registrations for user {id}

*/api/getUsers*
- Returns a list of all users

*/api/getUserByID/{id}*
- Returns user {id}

*/api/createUser*
- Requires user entry body

*/api/deleteUser/{id}*
- Deletes user {id}

*/api/updateUser/{id}*
- Requires user entry body
- Updates user {id} with user body

*/api/getMatches*
- Returns a list of all matches

*/api/createMatch*
- Requires match entry body

*/api/deleteMatch/{id}*
- Deletes match {id}

*/api/getMatchByID/{id}*
- Returns match {id}

*/api/updateMatch/{id}*
- Requires match entry body
- Updates match {id} with match body

*/api/findTournamentMatches/{id}*
- Returns a list of all matches for tournament {id}

*/api/findUserMatches/{id}*
- Returns a list of all matches for user {id}




