import { useState, useEffect } from "react"



export default function UserPage(){

    const [userSearched, setUserSearched] = useState();
    const [userFound, setUserFound] = useState();





    useEffect(() => {
        async function fetchData() {
            var data = await fetch('http://localhost:8080/api/getUserByID/'+userSearched ).then(res => {
                return res.json();
            });
            console.log(data)
        }
        fetchData();
    }, [userSearched]);


    




    
    return (
        <form className="max-w-sm px-4">
        <div className="relative">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            <input
                type="text"
                placeholder="Search Username"
                className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                onChange = { (e) => {
                    setUserSearched(e.target.value)
                    console.log(userSearched)
                }}

            />
        </div>
    </form>
    )
}