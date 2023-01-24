import React from 'react'
import'./InfoCard.css'
import { useState } from 'react'
import{UilPen} from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModel.jsx/ProfileModel'
const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className='InfoCard'>
        <div className="InfoHead">
            <h4>Your Info</h4>
            <div>
            <UilPen width='2rem' height='1.2rem' 
             onClick={() => setModalOpened(true)}
             />
             <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
            </div>
        </div>
        <div className="info">
            <span>
                <b>Status</b>
            </span>
            <span> In Relationship</span>
        </div>
        <div className="info">
            <span>
                <b>Lives In</b>
            </span>
            <span> Lahore</span>
        </div>
        <div className="info">
            <span>
                <b>Works at</b>
            </span>
            <span> Systems Limited </span>
        </div>
        <button className='button logout-button'>Logout</button>
    </div>
  )
}

export default InfoCard
 