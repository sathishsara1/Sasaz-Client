import React from 'react';
import image from '../../assets/image.png';

const ProfileSideBar = (props) => {
    return (
        <div id='profile-sidebar'>
            <div id='profile-sidebar-main'>
                <img src={image} alt="Profile" />
                <h1>SasaAz</h1>
                <p>A Good Project Together....</p>
            </div>
            <ul>
                <button id='1' onClick={props.changeFunction}>Details</button>
                <button id='2' onClick={props.changeFunction}>Posts</button>
                <button id='3' onClick={props.changeFunction}>Upload Post</button>
                <button id='4' onClick={props.changeFunction}>Saved Posts</button>
            </ul>
        </div>
    )
}

export default ProfileSideBar