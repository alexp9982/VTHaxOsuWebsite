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

        

        <div class='w-full gap-2 grid  grid-cols-3 '>
    <div></div>
    <div key={content} class="group relative rounded-lg overflow-hidden bg-white  hover:shadow-2xl ">
        
    <div class="h-40">
        <img
        src='https://lp-cms-production.imgix.net/2019-06/554369495_full.jpg'
        alt='City'
        class="h-40 w-full object-cover object-center "
        />
    </div>
    <div class="h-1/2 p-4 ">
        <h3 class="mb-2 text-base font-semibold text-blue-800">
        <a href='' class="hover:underline">
            Sed ut perspiciatis unde omnis iste
        </a>
        </h3>
        <p class="text-sm font-bold text-orange-500">perspiciatis</p>
        <div class='flex flex-row justify-between text-xs mt-2'> 
        <p>perspiciatis</p><p>Sed ut perspiciatis unde omnis iste</p>
        </div>
    </div>
    </div>

    <div></div>
    </div>


    )
}