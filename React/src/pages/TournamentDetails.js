import { useParams } from "react-router-dom"
import { useEffect, useState} from "react";
export default function TournamentDetails(props){


    const [tournament, setTournament] = useState()
    const params = useParams();


// useEffect(() => {
    // // declare the data fetching function
    // const fetchData = async () => {
    //     const data = await fetch('http:/localhost:8080/api/getTournamentByID/'+params.id);

    //     setTournament(data)
    //     console.log(data)

    // }
    
    // // call the function
    // fetchData()
    //     // make sure to catch any error
    //     .catch(console.error);
    // }, [])


      
        useEffect(() => {
          async function fetchData() {
            var data = await fetch('http:/localhost:8080/api/getTournamentByID/22' ).then(res => {
                return res.text();
            });
      
            setTournament(data);
            console.log(data);
          }
          fetchData();
        }, []);


    return (
        
        <h1 >Detail</h1>
        
    );
}
