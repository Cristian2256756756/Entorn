import React from 'react'
import './AppDownloader.scss'
import { assets } from '../../assets/assets'

const AppDownloader = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>You can download our app and get your <br /> food very fast</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownloader