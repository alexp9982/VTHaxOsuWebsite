import { useParams } from "react-router-dom"
import { useEffect, useState} from "react";
import { set } from "lodash";
import React from 'react';
import { TERipple } from 'tw-elements-react';
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

      
        useEffect(() => {
          async function fetchData() {
            var data = await fetch('http://localhost:8080/api/getTournamentByID/'+params.id ).then(res => {
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
            //setMode(data.img)

            
          }
          fetchData();
        }, []);
      
          return (
              <div className=" w-full min-h-screen rounded-lg m-10 mx-auto dark:bg-gray-800">
            
            <div className="  rounded-lg   dark:bg-gray-800 h-[90%] ">
                { img ? 
                <img className="w-[30%] mx-auto rounded-t-lg pt-6 " src={img} alt="" />
                :
                <img className="w-[30%] mx-auto rounded-t-lg pt-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Osu%21_Logo_2016.svg/800px-Osu%21_Logo_2016.svg.png" alt="" />

                }
                <div className="p-5 mx-auto w-[60%] mt-4">
                    
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <h7 className="mb-2 text-2l font-semi tracking-tight text-gray-900 dark:text-white">Ranks:  ({minRank} - {maxRank})</h7>
                    <h5 className="mb-2 text-2l font-semi tracking-tight text-gray-900 dark:text-white">Closes: {closingDate}</h5>
                    
                    <p className="mx-auto mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                    <div className="mx-auto mt-10 text-center">
                        <a href="#" className="inline-flex items-center px-8 py-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Register
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinecap="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        );
        
}
