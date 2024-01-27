import React, { useState } from "react";
import SideBar from "./SideBar";
import Users from "./Users";
import Axios from "axios";
import Modals from './Modals'

function UsersInterface(){
    const genders = [
        {value: "female", label: "Female"},
        {value: "male", label: "Male"},
        {value: "rns", label: "Rather not say"}
    ];
    const access = [
        {value: "full", label: "Full Access"},
        {value: "limited", label: "Limited Access"}
    ]
    const [genderVal, setGender] = useState('');
    const [accVal, setAccess] = useState('');
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [full, setFullName] = useState('');
    const [birth_date, setBirthDay] = useState('');
    const [position, setPosition] = useState('');
    const [license, setLicense] = useState('');
    const [emp_no, setSetEmpNo] = useState('');
    const [errors, setError] = useState([]);
    const info = {
        user: username,
        pass: password,
        full_name: full,
        gender: genderVal,
        birth_day: birth_date,
        pos: position,
        lic: license,
        emp_number: emp_no,
        access: accVal
    }
    const handleSubmit = (event) => {
        console.log("Submitted");
        event.preventDefault();
        setError()
        Axios.post("http://localhost:3001/user_register", info)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return(
        <div className="flex fixed w-screen h-screen">
            <SideBar />
            <div className="content w-screen h-screen p-3 overflow-y-auto text-primary font-primary">
                <div className='text-primary font-primary font-medium text-3xl col-span-3'>
                    Users Data
                </div>
                <div className="bg-primary text-primary w-full h-[95%] gap-3 grid grid-cols-2 p-3 rounded-lg shadow-lg">
                    <div className="bg-white w-full h-full rounded-lg shadow-lg p-3 overflow-y-auto">
                        <div className="font-medium">
                            <div className="text-lg">
                                User Data Form
                            </div>
                            <form className="text-md w-full p-3 border rounded-lg flex flex-col" action="" onSubmit={handleSubmit}>
                                <label className="font-bold" htmlFor="username">Username</label>
                                <input type="text" className="border rounded-lg px-3" placeholder="Enter username" onChange = {(e) => setUser(e.target.value) } name="username"/>
                                <label className="font-bold" htmlFor="password">Password</label>
                                <input type="password" className="border rounded-lg px-3" placeholder="Enter password" onChange = {(e) => setPassword(e.target.value)} name="password"/>
                                <label className="font-bold mt-5" htmlFor="full_name">Full Name</label>
                                <input type="text" className="border rounded-lg px-3" placeholder="Enter full name" onChange = {(e) => setFullName(e.target.value)} name="full_name"/>
                                <label className="font-bold" htmlFor="birth_date">Birthdate</label>
                                <input type="date" className="border rounded-lg px-3 uppercase w-40" placeholder="Enter birthdate" onChange = {(e) => setBirthDay(e.target.value)} name="birth_date"/>
                                <label className="font-bold" htmlFor="gender">Sex</label>
                                {genders.map(gender => (
                                    <div key={gender.value} className="text-sm flex items-center">
                                        <input type="radio" name="gender" value={gender.value} id={gender.value} checked = {genderVal === gender.value} onChange={e=> setGender(e.target.value)}/>
                                        <label htmlFor={gender.value}>{gender.label}</label>
                                    </div>
                                ))}
                                <label className="font-bold mt-5" htmlFor="position">Position</label>
                                <input type="text" className="border rounded-lg px-3" placeholder="Enter position" onChange = {(e) => setPosition(e.target.value)} name="position"/>
                                <label className="font-bold" htmlFor="license">License</label>
                                <input type="text" className="border rounded-lg px-3" placeholder="Enter license" onChange = {(e) => setLicense(e.target.value)} name="license"/>
                                <label className="font-bold" htmlFor="emp_number">Employee Number</label>
                                <input type="text" className="border rounded-lg px-3" placeholder="Enter employee number" onChange = {(e) => setSetEmpNo(e.target.value)} name="emp_number"/>
                                <label className="font-bold" htmlFor="access">Access Type</label>
                                {access.map(acc => (
                                    <div key={acc.value} className="text-sm flex items-center">
                                        <input type="radio" name="access" value={acc.value} id={acc.value} checked = {accVal === acc.value} onChange={e=> setAccess(e.target.value)}/>
                                        <label htmlFor={acc.value}>{acc.label}</label>
                                    </div>
                                ))}
                                <button type="submit" className="btn-form mt-1">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="bg-white w-full h-full rounded-lg shadow-lg p-3">
                        <div className="font-medium text-lg">
                            Users
                        </div>
                        <div className="overflow-y-auto p-2">
                            <Users />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UsersInterface;