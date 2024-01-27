import React from "react";
import { useState } from "react";
import { FaDatabase, FaHouse } from "react-icons/fa6";
import logo from './Main Logo.svg'
import { AiOutlineSchedule } from "react-icons/ai";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

function SideBar(){
    const menu_Admin = [
        { name: 'Dashboard', link: "/admin", icon: MdSpaceDashboard},
        { name: 'Schedules', link: "/schedules", icon: AiOutlineSchedule},
        { name: 'Data', link: "/data", icon: FaDatabase},
        { name: 'Accounts', link: "/users", icon: FaUser},
    ]
    const [open, setOpen] = useState(false);
    return(
        <section className="flex gap-6">
            <div className={`bg-white min-h-screen ${open ? 'w-72' : 'w-[4.25rem]'} text-primary shadow-md px-4 font-primary duration-300`}>
                <div className="py-3 mr-1 flex justify-end">
                    <CgMenuLeftAlt size={26} className={`cursor-pointer ${!open && 'rotate-180'}`} onClick={()=> setOpen(!open)}/>
                </div>
                <div className="flex flex-col mt-4 gap-4 relative">
                    {menu_Admin?.map((menu,i) => (
                        <Link to = {menu?.link} key = {i} className="flex items-center text-lg gap-3.5 font-medium p-2 hover:bg-primary hover:text-white rounded-md duration-200 ease-in-out">
                            <div>{React.createElement(menu?.icon, {size : '20'})}</div>
                            <h2 className={`whitespace-pre duration-200 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default SideBar;