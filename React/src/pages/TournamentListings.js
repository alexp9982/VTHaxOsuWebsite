import { useEffect, useState } from "react";
import TournamentListing from "../components/TournamentListing";
import {v4 as uuidv4} from 'uuid'
import AddTournament from "../components/AddTournament";


export default function TournamentListings(){
   

    

    const [tournaments, setTournaments] = useState()
   

    function addToTournament(name, role, img){
        console.log("ADDING")
        var id =uuidv4()
       
        setTournaments([...tournaments, {id:id, name:name, role:role, img:img}])
        // setEmployees({...employees, {id:uuidv4(), name:name, role:role, img:img}})
      }




  
    useEffect(() => {
            async function fetchData() {
              var data = await fetch('http://localhost:8080/api/getTournaments' ).then(res => {
                  return res.json();
              });
              setTournaments(data)
            //   console.log([data])
            }
            fetchData();
        }, []);

    return(
        <div className="">
            <div className="">
                <AddTournament />
            </div>

            {tournaments ?
            (<>
                <div className="flex flex-wrap justify-center">
                { 
                    tournaments.map( (tournament) => {
                        console.log(tournament)
                        // const editEmployee = <EditEmployee id={employee.id} name={employee.name} role={employee.role} updateEmployee={updateEmployee}/>
                    return(
                        //   <Employee id={employee.id} key={employee.id} name={employee.name}
                        //   role={employee.role} img={employee.img} 
                        //   editEmployee={editEmployee}/>
                        
                        <TournamentListing key={tournament.id} tournament={tournament} />
                    );
                    })
                }
                </div>
                
            
            </>)
            :
                <p>No Upcomming Tournaments </p>
            }
        </div>

        

        
        
        )

        
        
}