import React from "react";
import Schedule from "./Schedule";
import SideBar from "./SideBar";
import { useState, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import Axios from 'axios';
import { GoDotFill } from "react-icons/go";
import { TiDelete } from "react-icons/ti";
import { v4 as uuid } from 'uuid' 

function ScheduleInterface(){
    const [data,setData] = useState([]);
    const [description, setDescription] = useState('');
    const [procedure, setProcedure] = useState('');
    let [set_procedure, compileProcedure] = useState([]);
    const addProcedure = (value) => {
        const uid = uuid();
        compileProcedure(prev =>[...prev,{value: value,uid: uid}]);
    }
    const removeProcedure = (element) => {
        compileProcedure(set_procedure.filter(object => object.uid != element));
    }
    const getData = () => {
        Axios.get("http://localhost:3001/getUserProfile")
        .then((response)=>{
            setData(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    useEffect(()=>{
        getData();
    },[])
    const [ope, setModal] = useState(false);
    return(
        <div className="flex fixed w-screen h-screen">
            <SideBar />
            <div className="content w-screen h-screen p-3 overflow-y-auto font-primary">
                <div className='text-primary font-medium text-3xl'>
                    Schedules
                </div>
                <div className="font-primary bg-primary text-primary w-full h-[95%] p-3 rounded-lg shadow-lg">
                    <div className="bg-white w-full h-full overflow-y-auto p-3 rounded-lg flex flex-col">
                        <div className=''>
                            <button onClick={() => setModal(!ope)} className="link">Add Schedule</button>
                        </div>
                        <div className="w-full overflow-y-auto rounded-lg border border-gray-100">
                            <Schedule />
                        </div>
                    </div>
                </div>
            </div>
            {ope &&
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                    <div className="w-1/3 h-5/6 bg-white rounded-lg p-3 flex flex-col">
                        <div className="font-primary text-primary font-bold text-xl flex w-full items-center">
                            <p>Schedule Form</p>
                            <IoIosCloseCircle size={26}  className="ml-auto hover:text-secondary hover:duration-100 hover:cursor-pointer" onClick={() => {setModal(!ope); compileProcedure([])}}/>
                        </div>
                        <div className="overflow-y-auto p-3 rounded-lg border w-full">
                            <form action="" className="font-primary text-primary flex flex-col w-full">
                                <label className="font-medium" htmlFor="procedure_name">Procedure Name</label>
                                <input className="border rounded-lg px-3" type="text" placeholder="Please input procedure name" name="procedure_name"/>
                                <div className="flex w-full flex-col">
                                    <label className="font-medium w-full"htmlFor="date">Date and Time</label>
                                    <div className="w-full flex" name="date">
                                    <input type="date" className="uppercase border rounded-lg px-3 w-40"/>
                                    <input type="time" className="uppercase border rounded-lg w-24 ml-3" />
                                    </div>
                                </div>
                                <label className="font-medium" htmlFor="team">Health Care Team</label>
                                <div className="border w-full h-40 rounded-lg shadow-sm overflow-x-autol p-3 font-primary text-primary">
                                    {data.map(info => (
                                        <div className="flex items-center w-full">
                                            <input type="checkbox" className="w-4 h-4" name="name" value={info.username}/>
                                            <label htmlFor="name" className="ml-1">{info.username} - {info.position}</label>
                                        </div>
                                    ))}
                                </div>
                                <label className="font-medium" htmlFor="description">Procedure Description</label>
                                <textarea className="border rounded-lg p-3" name="description" id="" cols="30" rows="10" onChange={(event) => setDescription(event.target.value)}></textarea>
                                <label htmlFor="steps">Steps of the procedure</label>
                                <div className="w-full h-80 grid grid-cols-2 gap-3">
                                    <div className="w-full flex flex-col col-span-1">
                                        <textarea value={procedure} className="border rounded-lg p-3 w-full h-full" name="procedure" id="" cols="30" rows="10" onChange={(event) => setProcedure(event.target.value)}></textarea>
                                        <button type="button" className="rounded-3xl bg-primary text-white w-16 mt-2" onClick={() => {addProcedure(procedure); setProcedure('')}}>Add</button>
                                    </div>
                                    <div className="border h-80 rounded-lg p-1 col-span-1">
                                        Procedures
                                        <div className="overflow-auto h-72 rounded-lg">
                                            <table className="table-auto border w-full">
                                                <tbody className="divide-y">
                                                    {set_procedure.map(proced => (
                                                    <tr id={proced.uid}>
                                                        <td className="flex items-center text-center">
                                                            <TiDelete className=""size={26} onClick={() => removeProcedure(proced.uid)}></TiDelete>
                                                            <GoDotFill></GoDotFill>
                                                            {proced.value}
                                                        </td>
                                                    </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-3 h-64 w-full">
                                    <div className="h-auto flex w-full mb-2">
                                        <div className="flex flex-col">
                                            <label className="text-sm" htmlFor="instrument">Instrument</label>
                                            <input name="instrument" type="text" className="border rounded-3xl px-3 w-40" />
                                        </div>
                                        <div className="flex flex-col ml-3">
                                            <label className="text-sm" htmlFor="instrument_no">Amount</label>
                                            <input name="instrument" type="number" className="border rounded-lg w-12 pl-2" />
                                        </div>
                                        <div className="flex items-center h-full ml-3">
                                            <button type="button" className="bg-primary rounded-3xl w-16 h-8 text-white"> Add </button>
                                        </div>
                                    </div>
                                    <div className="h-full bg-primary">
                                        
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div> 
                </div>
            }
            
        </div>
    )
}
export default ScheduleInterface;