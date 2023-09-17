import { useState } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import TournamentDetails from '../pages/TournamentDetails';


export default function TournamentListing(props){

    const location = useLocation();
    const navigate = useNavigate();


    console.log(props)
    return (

        <div className='w-30 m-2 '>
            <div></div>
            <div className="group relative rounded-lg overflow-hidden bg-gray-800  hover:shadow-2xl ">
                
            <div className="object-contain h-36 w-96">
            
            {/* {console.log(tournament.)} */}
            {
            

                    props.tournament.imageLink ? 
                        <img
                            
                            src={props.tournament.imageLink}
                            className="object-contain object-fill h-36 w-96 object-center "
                        />
                    :
                        <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Osu%21_Logo_2016.svg/800px-Osu%21_Logo_2016.svg.png'
                        alt='osu logo'
                        className="object-contain h-36 w-96 object-center "
                        />
                    }
            </div>
            <div className="h-1/2 p-2 object-contain h-36 w-96 text-white">
                <h1 className="font-bold text mt-2 h-8 truncate">
                <a href={'TournamentListings/'+props.tournament.id} class="hover:underline">
                    {props.tournament.name}
                </a>
                </h1>

                <div className='flex flex-row justify-between text mt-2 h-[66px]'> 
                    <p className=" line-clamp-4		">{props.tournament.description}</p>
                </div>
            </div>
    </div>

    </div>


    )
}