import { useParams } from "react-router-dom"
import { useEffect, useState} from "react";
import React from 'react';
import RegistedUserTable from "../components/RegisteredUserTable";
export default function TournamentDetails(props){


    const[id,setId] = useState();
    const[name,setName] = useState();
    const[description,setDescription] = useState();
    const[hostID,setHostID] = useState();
    const[closingDate,setClosingDate] = useState();
    const[minRank,setMinRank] = useState();
    const[maxRank,setMaxRank] = useState();
    const[mode,setMode] = useState();
    const[img,setImg] = useState();



    const params = useParams();

        const [listOfAttendingUsers, SetListOfAttendingUsers] = useState([])
        const [registrationEnabled, setEnabledRegs] = useState(false)


        useEffect(() => {
          async function fetchData() {
            var data = await fetch('http://localhost:8080/api/getTournamentByID/'+params.id , {cache: 'no-store'}).then(res => {
                return res.json();
            });
      
            setId(data.id);
            setHostID(data.hostID);
            setName(data.name)
            setClosingDate(data.closingDate)
            setDescription(data.description)
            setMaxRank(data.maxRank)
            setMinRank(data.minRank)
            setMode(data.mode)
            setImg(data.imageLink)

            
          }
          fetchData();
        }, []);
      
          return (
              <div className=" w-full min-h-screen rounded-xl m-6 mx-auto bg-gray-800">
            
            <div className="  rounded-lg   bg-gray-800 h-[90%] ">
        
                <img className="w-[60%] mx-auto pt-6 " src={img} alt="" />
    
                <div className="p-5 mx-auto w-[60%] mt-4">
                    
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">{name}</h3>
                    <h6 className="mb-2 text-2l font-semi tracking-tight text-white">Ranks:  ({minRank} - {maxRank})</h6>
                    <h5 className="mb-2 text-2l font-semi tracking-tight text-white">Closes: {closingDate}</h5>
                    
                    <p className="mx-auto mb-3 font-normal text-gray-300">{description}</p>
                    <div className="mx-auto mt-10 text-center">
                        <button disabled={registrationEnabled} onClick={()=>{
                             let sendBody = {

                                "id": 1,
                                "userID": 1,
                                "tournamentID":Number(params.id),
                                "username": "usn",
                                "rank": 1

                            }
                            setEnabledRegs(true)
                            console.log(sendBody)
                            fetch("/api/createRegistration", {
                                
                                method: "POST",
                                body: JSON.stringify(sendBody),
                                headers: {
                                  "Content-Type": "application/json"
                                },
                                credentials: "include"
                            }).then((res) => {res.json().then((regsObj) => {SetListOfAttendingUsers([regsObj])})})
                        }} 
                        className={`inline-flex items-center px-8 py-3 text-sm font-medium text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ${registrationEnabled ? "bg-green-700" : "bg-blue-700 hover:bg-blue-800"}`}>
                            {registrationEnabled ? <>Registered!</>: <>
                            
                            Register
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg></>}
                        </button>
                    </div>
                    <div className="mt-8">
                    <h1
                        className="text-white cursor-pointer text-center mb-4"
                    >
                        Registered Users:
                    </h1>
                    <RegistedUserTable tourID={params.id} localRegister={listOfAttendingUsers} />
                    </div>
                </div>
            </div>
       

        </div>
        );
        
}
