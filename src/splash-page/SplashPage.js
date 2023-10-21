import React from 'react'
import BoldText from '../bold-text/BoldText'
import { CONSTANTS } from '../consts/global-consts'
import SmallText from '../small-text/SmallText'

export default function SplashPage() {
  return (
    <>
    <BoldText value={CONSTANTS.NAME}/>
    <SmallText value={CONSTANTS.JOB_TITLE}/>
    </>
  )

}
