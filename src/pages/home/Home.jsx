import React from 'react'
import './Home.css'
import PostSide from '../../components/PostSide/PostSide';
import ProfileSide from './../../components/ProfileSide/ProfileSide';
import RightSide from '../../components/RightSide/RightSide';
const Home = () => {
  return (
    <div className='Home'>
      <ProfileSide/>
      <PostSide/>
      <RightSide/>
        <div className='Rightside'>Rightside</div>
    </div>
  )
}

export default Home