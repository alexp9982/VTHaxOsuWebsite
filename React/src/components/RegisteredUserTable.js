import { Card, Typography } from "@material-tailwind/react";

import { useState, useEffect } from "react";

export default function RegistedUserTable(props){



    const TABLE_HEAD = ["Username", "Rank"];
 
    const [registedUsers, setRegisteredUsers] = useState([])

    

    useEffect(() => {
            async function fetchData() {
              var data = await fetch('http://localhost:3000/api/findTournamentRegistrations/'+props.tourID ).then(res => {
                  return res.json();
              });
              setRegisteredUsers(data)
              console.log(data)
            }
            fetchData();
        }, []);

        console.log(registedUsers)

    return(

    <Card className="">
    <table className="  ">
    <thead>
        <tr>
        {TABLE_HEAD.map((head) => (
            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                
                {head}
            </th>
        ))}
        </tr>
    </thead>
    <div class="overflow-y-auto">
    <tbody class="">
        {registedUsers.map( (user) => (
        <tr key={user.id} className="even:bg-blue-gray-50/50">
            <td  className="p-4">
                {user.username}
            </td>
            <td className="p-4">
                {user.rank}
            </td>
        </tr>
        ))}
    </tbody>
    </div>
    </table>
    </Card>
    );
}