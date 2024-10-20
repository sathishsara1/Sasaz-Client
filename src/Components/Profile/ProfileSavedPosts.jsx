import React, { useContext } from "react";
import { userContextProvider } from "../Contexts/UserContext";
import Feed from "../Feed/Feed";
import { Link } from "react-router-dom";
const ProfileSavedPosts = () => {
    const { user } = useContext(userContextProvider);
    return (
        <div id='profile-feed-main'>
            {user && user.savedPosts && user.savedPosts.map((post, ind) => (
                <div key={ind}>
                    <Feed data={post} dp={post ? post.userPosted.dp : "#"} name={post ? post.userPosted.name : "#"} />
                </div>
            ))}
            <nav id='profile-navigation'>
                <ul>
                    <li><Link className='navlinks' to='/profile'>Posts</Link></li>
                    <li><Link className='navlinks' to='/profile'>Liked Posts</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default ProfileSavedPosts;