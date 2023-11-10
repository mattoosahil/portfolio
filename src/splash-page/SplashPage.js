import React from 'react'
import BoldText from '../bold-text/BoldText'
import { CONSTANTS } from '../consts/global-consts'
import SmallText from '../small-text/SmallText'
import './SplashPage.css'

export default function SplashPage() {
  return (
    <>
        <div className="image-container">  
            <div className="text-container">
                <BoldText value={CONSTANTS.NAME}/>
                <SmallText value={CONSTANTS.JOB_TITLE}/>
            </div>
        </div>
   
    </>
  )

}
