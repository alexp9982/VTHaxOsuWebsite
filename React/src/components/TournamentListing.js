import { useState } from 'react';

export default function TournamentListing(props){
    
/*

    return(
        

            <div class=" m-1 group  rounded-lg overflow-hidden bg-white  hover:shadow-2xl w-300">
                    
                <div class="h-40">
                    {
                    props.tournament.img ? 
                        <img
                            src={props.tournament.img}
                            class="h-40 w-full object-cover object-center "
                        />
                    :
                        <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Osu%21_Logo_2016.svg/800px-Osu%21_Logo_2016.svg.png'
                        alt='osu logo'
                        class="h-40 w-full object-cover object-center "
                        />
                    }
                    
                </div>
                    <div class="h-1/2 p-4 w-12">
                        <h3 class="font-bold flex text-xs mt-2">
                        <a href='' class="hover:underline">
                            {props.tournament.name}
                        </a>
                        </h3>
                    
                        <div class='flex justify-between text-xs mt-2'> 
                        <p>{props.tournament.description}</p>
                    </div>
                </div>
            </div>
            

       
    );
}



*/

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
                <a href='' class="hover:underline">
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