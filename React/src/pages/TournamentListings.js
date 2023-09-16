import { useEffect, useState } from "react";
import TournamentListing from "../components/TournamentListing";
import {v4 as uuidv4} from 'uuid'
import AddTournament from "../components/AddTournament";


export default function TournamentListings(){
   
 

    const [tournaments, setTournaments] = useState(
        [
        { id: "id1", name:"USA States Cup", description:"States send their best players to compete in a 3v3 double elimination bracket, lorem ipsum awuiefha aewuifh aewf feuiohfa  fhuieohuifa feufiwoe", img:"https://gray-woio-prod.cdn.arcpublishing.com/resizer/7LTIJmffhz8U6XIFTa7g9WPwAuA=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/Q4C2SM42TJG7LGGJNLX5GF2NUE.png"},
        { id: "id2", name:"VIRGINIA Regional CupVIRGINIA Regional CupVIRGINIA Regional CupVIRGINIA Regional Cup", description:"States send their best player in a 3v3 double elimination bracket, lorem ipsum awuiefha aewuifh aewf feuiohfa  fhuieohuifa feufiwoe"},
        { id: "id3", name:"loomski", description:"States send their best players to compete in a 3v3 double elimination bracket, lorem ipsum fjsdfjs kjfkfsdjf ljsddf awuiefha aewuifh aewf feuiohfa  fhuieohuifa feufiwoe"},
        { id: "id11", name:"Osu-temo", description:"discription"},
        { id: "id22", name:"bonefi", description:"discription"},
        { id: "id33", name:"loomski", description:"discription"},
        { id: "id12", name:"Osu-temo", description:"discription"},
        { id: "id23", name:"bonefi", description:"discription"},
        { id: "id34", name:"loomski", description:"discription"}
        ]
    )
   

    function addToTournament(name, role, img){
        console.log("ADDING")
        var id =uuidv4()
       
        setTournaments([...tournaments, {id:id, name:name, role:role, img:img}])
        // setEmployees({...employees, {id:uuidv4(), name:name, role:role, img:img}})
      }


  
    useEffect(() => {
        
    }, [tournaments]);

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