import React from 'react'
import '../Styles/Home.scss'
import { useUser } from '../Context/UserCredentials';
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const { user } = useUser();

    const HandleJoinMeet = () => {

    }

    return (
        <>
            <Header username={user} />
            <div className='main-meet'>
                <h1 className='heading'>Video calls and meetings for everyone</h1>
                <p className='subheading'>Connect, collaborate, and celebrate from anywhere with <span>MeetNexus</span></p>

                <div className='newmeet-joinmeet'>
                    <button>New Meeting</button>
                    <input placeholder='Enter a Code or Link' type="text" />
                    <button onClick={HandleJoinMeet} >Join Meet</button>
                </div>

                <hr />

                <h1 className='learnmore'><a href="">Learn more</a> about MeetNexus</h1>
                <h1 className='createdby'>Create by   <span>Gaurav</span>Lokhande</h1>
            </div>



        </>
    )
}





function Header({ username }) {
    const navigate = useNavigate();

    const HandleLogout = () => {
        navigate('/')
    }
    return (
        <div className='header'>
            <div className='logo'>
                <h1>Meet<span>Nexus</span></h1>
            </div>
            <div className='logout'>
                <h1> Hi {username.name}!</h1>
                <button onClick={HandleLogout}>Logout</button>
            </div>
        </div>
    )
}


