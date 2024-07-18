/*
  Developed By: Gaurav Lokhande
  Email: gaurravlokhande@gmail.com
  Linkedin: https://www.linkedin.com/in/gauravlokhande
  Github: https://github.com/gauravxlokhande
  Trailhead: https://www.salesforce.com/trailblazer/gauravlokhande
  Instagram: gauravxlokhande
   */

import React, { useEffect, useRef, useState } from 'react';
import '../Styles/Meet.scss';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function randomID(len) {
    let result = '';
    if (result) return result;
    const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP';
    const maxPos = chars.length;
    len = len || 5;
    for (let i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
}

function Meet() {
    const { MeetId } = useParams();
    const containerRef = useRef(null);

    console.log(containerRef.current);


    useEffect(() => {
        const myMeeting = async () => {
            const appID = 1828215307;
            const serverSecret = "adf03c2edb7f07f2b4305e443b103f7c";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, MeetId, randomID(5), 'Gaurav');

            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: containerRef.current,
                sharedLinks: [
                    {
                        name: 'Personal link',
                        url: `http://localhost:5173/Meet/${MeetId}`,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
                },
                whiteboardConfig: {
                    showAddImageButton: true, // It's set to false by default. To use this feature, activate the File Sharing feature, and then import the plugin. Otherwise, this prompt will occur: "Failed to add image, this feature is not supported."
                    showCreateAndCloseButton: true // Whether to display the button that is used to create/turn off the whiteboard. Displayed by default.
                },
                showRoomTimer: true
            });
        };

        myMeeting();
    }, [MeetId]);

    return (
        <div className='main-contsiner'>
            <div
                className="myCallContainer"
                ref={containerRef}
                style={{ width: '100%', height: '100vh', boxShadow: 'none' }}
            >
            </div>
        </div>
    );
}

export default Meet;
