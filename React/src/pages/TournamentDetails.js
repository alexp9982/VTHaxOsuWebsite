import { useParams } from "react-router-dom"
import { useEffect, useState} from "react";
export default function TournamentDetails(props){


    const [tournament, setTournament] = useState()
    const params = useParams();


useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
        const data = await fetch('http://localhost:8080/api/getTournament/'+params.id);

        setTournament(data)

    }

    
    // call the function
    fetchData()
        // make sure to catch any error
        .catch(console.error);
    }, [])



    return (
        <h1>Details for {tournament}</h1>
    );
}
