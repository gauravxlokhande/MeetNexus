/*
  Developed By: Gaurav Lokhande
  Email: gaurravlokhande@gmail.com
  Linkedin: https://www.linkedin.com/in/gauravlokhande
  Github: https://github.com/gauravxlokhande
  Trailhead: https://www.salesforce.com/trailblazer/gauravlokhande
  Instagram: gauravxlokhande
   */



import React, { useState } from 'react';
import '../Styles/Home.scss';
import { useUser } from '../Context/UserCredentials';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
    const { user } = useUser();

    const [MeetId, setMeetId] = useState('');


    let navigate = useNavigate();

    const HandleJoinMeet = (e) => {
        e.preventDefault();
        console.log(MeetId);
        if (MeetId !== '') {
            navigate(`/Meet/${MeetId}`);
        } else {
            toast.error('Please enter the meet Id.');
        }

    };

    const HandleNewMeet = (e) => {
        e.preventDefault();
        const uniqueId = uuidv4();
        setMeetId(uniqueId);
        navigate(`/Meet/${uniqueId}`);
    };


    return (
        <>
            <Header username={user} />
            <div className='main-meet'>
                <h1 className='heading'>Video calls and meetings for everyone</h1>
                <p className='subheading'>Connect, collaborate, and celebrate from anywhere with <span>MeetNexus</span></p>

                <div className='newmeet-joinmeet'>
                    <button onClick={HandleNewMeet}>New Meeting</button>
                    <input onChange={(e) => setMeetId(e.target.value)} placeholder='Enter a Code or Link' type="text" />
                    <button onClick={HandleJoinMeet}>Join Meet</button>
                </div>

                <hr />

                <h1 className='learnmore'><a href="">Learn more</a> about MeetNexus</h1>
                <h1 className='createdby'>Created by <span>Gaurav Lokhande</span></h1>
                <Toaster />
            </div>
        </>
    );
}

function Header({ username }) {
    const navigate = useNavigate();

    const HandleLogout = () => {
        navigate('/');
    };

    return (
        <div className='header'>
            <div className='logo'>
                <h1>Meet<span>Nexus</span></h1>
            </div>
            <div className='logout'>
                <h1>Hi {username.name}!</h1>
                <button onClick={HandleLogout}>Logout</button>
            </div>
        </div>
    );
}
