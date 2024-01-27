import React from 'react'
import SideBar from './SideBar'
import Schedule from './Schedule';
import Users from './Users';
import { Link } from "react-router-dom";

function AdminPage(){
    return(
        <div className="flex fixed w-screen h-screen">
            <SideBar />
            <div className="content w-screen h-screen p-3 overflow-y-scroll">
                <div className='text-primary font-primary font-medium text-3xl col-span-3'>
                        Admin Dashboard
                </div>
                <div className="w-full h-[95%] bg-primary shadow-lg rounded-lg gap-3 p-3 grid grid-cols-3 grid-rows-4 text-primary font-primary">
                    <div className="flex flex-col bg-white col-span-1 rounded-lg row-span-4 p-3">
                        <h3>Users</h3>
                        <div className='overflow-y-auto gap-3 px-3 h-full'>
                            <Users />
                        </div>
                        <div className='mt-auto'>
                            <Link to={'/users'} className='link'>
                                Add/Edit more users
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white col-span-2 rounded-lg p-3 row-span-4 flex flex-col">
                        <div>
                            Schedule (Current Day)
                        </div>
                        <div className='overflow-y-auto border border-gray-100 rounded-lg shadow-sm'>
                            <Schedule />
                        </div>
                        <div className='mt-auto'>
                            <Link to={'/schedules'} className='link'>
                                More info
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminPage;