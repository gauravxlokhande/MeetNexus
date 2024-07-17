import '../Styles/Login.scss'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import anime from 'animejs/lib/anime.es.js';
import toast, { Toaster } from 'react-hot-toast';
import { useUser } from '../Context/UserCredentials';

function Login() {
    const navigate = useNavigate();

    const [name, setname] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useUser();


    const handleLogin = (e) => {
        e.preventDefault();
        setUser({ name, password });
        if (name === 'Gaurav Lokhande' && password === 'Pass@123') {
            navigate('/Home')
            // setname(' ');
            // setPassword(' ');
        } else if (email === '' || password === '') {
            toast.error('Cannot login! Empty Credentials.');
        } else {
            toast.error('Wrong Credentials, Please provide correct credentials to login!');
        }
    }


    return (
        <div className='main-login'>
            <h1>MeetNexus</h1>
            <input onChange={(e) => setname(e.target.value)} value={name} placeholder='gaurravlokhande@gmail.com' type="email" />
            <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Pass@123' type="password" />
            <button onClick={handleLogin}>Login</button>
            <Toaster />
            <AnimateCard />
        </div>
    )
}

export default Login





















function AnimateCard() {
    useEffect(() => {
        function randomValues() {
            anime({
                targets: '.square, .circle, .triangle',
                translateX: function () {
                    return anime.random(-500, 500);
                },
                translateY: function () {
                    return anime.random(-300, 300);
                },
                rotate: function () {
                    return anime.random(0, 360);
                },
                scale: function () {
                    return anime.random(0.2, 2);
                },
                duration: 1000,
                easing: 'easeInOutQuad',
                complete: randomValues,
            });
        }

        randomValues();

        // Cleanup function to avoid memory leaks
        return () => anime.remove('.square, .circle, .triangle');
    }, []);

    return (
        <>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>

            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>

            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
        </>
    );
}