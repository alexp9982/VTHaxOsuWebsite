import { useEffect } from "react";
import { useParams, redirect } from "react-router-dom";

export default function AuthCallback(){

    const queryParameters = new URLSearchParams(window.location.search)
    console.log(queryParameters)

    useEffect(() => {
        console.log(queryParameters)
        const forwardTokens = async () => {
            await fetch('/login/oauth2/code/osu?' + queryParameters, {
                headers:{
                    "accepts":"application/json"
                }
            })

            redirect("/TournamentListings")
        }

        forwardTokens();

    }, [])

    return (
        <>
        </>
    )

}