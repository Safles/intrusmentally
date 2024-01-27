import React from "react";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import Modals from './Modals'
import { IoMdRefreshCircle } from "react-icons/io";

function Schedule({ vis, ope, mod }){
    const [visible, setModal] = useState(false);
    const [operation, setOperation] = useState('');
    return (
        <div className="rounded-lg">
            <div className="flex items-center justify-center pt-3">
                <div className="flex hover:text-secondary hover:duration-100 hover:cursor-pointer">
                    <IoMdRefreshCircle size={26}/>
                    <button>Refresh</button>   
                </div>
            </div>
            <div className="mt-3">
                <table className='bg-white table w-full rounded-lg'>
                    <thead className="bg-primary text-white border-b-2 border-secondary">
                        <tr>
                            <th className="w-56">Schedule</th>
                            <th>Operation</th>
                            <th className="w-32">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        <tr className="uppercase">
                            <td className="text-lg text-center">9:00 AM - 12:00 PM</td>
                            <td className="p-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo placeat nihil, aliquid qui, excepturi culpa error doloremque nemo dignissimos natus eum fuga! Debitis laudantium odit consectetur in, quod veniam? </td>
                            <td>
                                <div className="flex justify-center items-center h-full w-full">
                                    <FaRegEdit size={22} className="btn-action" onClick={() => {setModal(!visible); setOperation('edit')}}/>
                                    <TiDelete  size={22} className="btn-action ml-3" onClick={() => {setModal(!visible); setOperation('delete')}}/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Schedule;