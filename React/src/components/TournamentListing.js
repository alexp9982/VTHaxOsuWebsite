import { useState } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import TournamentDetails from '../pages/TournamentDetails';


export default function TournamentListing(props){

    const location = useLocation();
    const navigate = useNavigate();

    return (

        <div className='w-30 m-2 '>
            <div></div>
            <div className="group relative rounded-lg overflow-hidden bg-white  hover:shadow-2xl ">
                
            <div className="object-contain h-48 w-96">
            {
                    props.tournament.img ? 
                        <img
                            src={props.tournament.img}
                            className="object-contain h-48 w-96 object-center "
                        />
                    :
                        <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Osu%21_Logo_2016.svg/800px-Osu%21_Logo_2016.svg.png'
                        alt='osu logo'
                        className="object-contain h-48 w-96 object-center "
                        />
                    }
            </div>
            <div className="h-1/2 p-4 object-contain w-96">
                <h3 className="font-bold text-xs mt-2 h-12 truncate">
                <a href={'TournamentListings/'+props.tournament.id} class="hover:underline">
                    {props.tournament.name}
                </a>
                </h3>

                <div className='flex flex-row justify-between text-xs mt-2 h-[66px]'> 
                    <p className=" line-clamp-4		">{props.tournament.description}</p>
                </div>
            </div>
    </div>

    </div>


    )
}