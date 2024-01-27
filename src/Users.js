import React from "react";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import Axios from 'axios';
import { IoMdRefreshCircle } from "react-icons/io";

function Users(){
    const [data, setData] = useState([]);
    const getData = () => {
        Axios.get("http://localhost:3001/getUserProfile")
        .then((response) => {
            console.log(response.data);
            setData(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <section className="flex flex-col gap-3">
            <div className="flex items-center justify-center">
                <div onClick={getData} className="flex hover:text-secondary hover:duration-100 hover:cursor-pointer">
                    <IoMdRefreshCircle size={26}/>
                    <button>Refresh</button>   
                </div>
            </div>
            {data.map(info => (
                <div key={info.username} className='w-full shadow-md rounded-full h-16 bg-gray-100 flex items-center p-2'>
                    <div className="flex-grow p-3">
                        <div id="username" className="font-primary font-medium text-primary">
                            {info.username}
                        </div>
                        <div id="position" className="font-primary text-sm text-primary">
                            {info.position}
                        </div>
                    </div>
                    <FaRegEdit size={20} className='transform -translate-x-4 btn-action' value={info.username}></FaRegEdit>
                    <TiDelete size={20} className="transform -translate-x-4 btn-action" value={info.username}></TiDelete>
                 </div>
            ))}
        </section>
    )
}
export default Users;