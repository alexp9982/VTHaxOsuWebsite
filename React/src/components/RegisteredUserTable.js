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

        <Card className="overflow-y-scroll max-h-96">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                key={head}
                className={`border-b border-blue-gray-100 bg-blue-gray-50 p-4 ${
                head === "Username" ? "text-center align-middle" : "text-center"
                }`}
            >
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
          </thead>
          <tbody>
            {registedUsers.map( (user)=> {

              return (
                <tr key={user.id}>
                <td className={`text-center align-middle ${user.id}`}>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                >
                    {user.username}
                </Typography>
                </td>

                <td className={`text-center align-middle ${user.rank}`}>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                >
                    {user.rank}
                </Typography>
                </td>
                </tr>
              
              );
            })}
          </tbody>
        </table>
      </Card>
    );
}