import { Card, Typography } from "@material-tailwind/react";

import { useState, useEffect } from "react";

export default function RegistedUserTable(props){



    const TABLE_HEAD = ["Username", "Rank", "Employed", ""];
 
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

    <Card className="h-full w-full overflow-scroll">
    <table className="w-full min-w-max table-auto text-left">
    {/* <thead>
        <tr>
        {registedUsers.map((head) => (
            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
            <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
            >
                {head}
            </Typography>
            </th>
        ))}
        </tr>
    </thead> */}
    <tbody>
        {registedUsers.map( (user) => (
        <tr key={user.id} className="even:bg-blue-gray-50/50">
            <td  className="p-4">
                {user.username}
            </td>
            <td className="p-4">
                {user.rank}
            </td>
 
            <td className="p-4">
                Edit
            </td>
        </tr>
        ))}
    </tbody>
    </table>
    </Card>
    );
}