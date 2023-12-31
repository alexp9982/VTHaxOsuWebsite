import { useState } from "react";

export default function AddTournament(){


    const[id,setId] = useState();
    const[name,setName] = useState();
    const[description,setDescription] = useState();
    const[hostID,setHostID] = useState();
    const[closingDate,setClosingDate] = useState();
    const[minRank,setMinRank] = useState();
    const[maxRank,setMaxRank] = useState();
    const[mode,setMode] = useState();
    const[img,setImg] = useState();



    function sendTournamentToDatabase(){
        let sendBody = {


            "id": 13377,
            "name": name,
            "description": description,
            "hostID": 12,
            "closingDate": closingDate,
            "minRank": Number(minRank),
            "maxRank": Number(maxRank),
            "mode": mode,
            "imageLink": img
        }


        fetch("/api/createTournament", {
            method: "POST",
            body: JSON.stringify(sendBody),
            headers: {
              "Content-Type": "application/json"
            },
            credentials: "include",
        })

        console.log("sdfjlsdk")


    }

    const [showModal, setShowModal] = useState(false);



    return(
        <>
        <div className="flex mt-4 mb-4 justify-center">
            <button
            className="bg-transparent w-[40%]  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="button"
            onClick={() => setShowModal(true)}
            >
            Add Tournament
            </button>
        </div>
        {showModal ? (
          <>

            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-3xl font=semibold">Add Tournament</h3>
                    <button
                      className="bg-transparent border-0 text-black float-right"
                      onClick={() => setShowModal(false)}
                    >
                      {/* <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full text-center leading-5">
                        x
                      </span> */}
                      <img src="/cancel.png" style={{height: "20px"}}></img>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form onSubmit={ (e) => {
                        // console.log("key "+props.id)
                        // e.preventDefault() // prevents a page refresh


                    }}
                     className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                      
                      <label className="block text-black text-sm font-bold mb-1 w-[2000px]">
                        Tournament Name
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                      onChange={ (e) => {
                        setName(e.target.value)
                     }}/>
                      
                      <label className="block text-black text-sm font-bold mb-1">
                        Closing Date
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                      onChange={ (e) => {
                        setClosingDate(e.target.value)
                     }}/>
                      
                      <label className="block text-black text-sm font-bold mb-1">
                        Description
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                      onChange={ (e) => {
                        setDescription(e.target.value)
                     }}/>
                      
                      <label className="block text-black text-sm font-bold mb-1">
                        Min-Rank
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      onChange={ (e) => {
                        setMinRank(e.target.value)
                     }} />

                      <label className="block text-black text-sm font-bold mb-1">
                        Max-Rank
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                      onChange={ (e) => {
                        setMaxRank(e.target.value)
                     }}/>
                    
                      <label className="block text-black text-sm font-bold mb-1">
                        Mode
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                      onChange={ (e) => {
                        setMode(e.target.value)
                     }}/>

                    <label className="block text-black text-sm font-bold mb-1">
                        Img Link
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                      onChange={ (e) => {
                        setImg(e.target.value)
                     }}/>
                     
                    </form>
                  </div>
                  
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                        className="text-white bg-sky-700 active:bg-sky-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => {
                            sendTournamentToDatabase()

                            setName("")
                            setId("")
                            setDescription("")
                            setHostID("")
                            setMinRank("")
                            setMaxRank("")
                            setMode("")
                            setClosingDate("")
                            setImg("")
                            setShowModal(false)
                        }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>

    );



}