import React from 'react'
import Slider from '../../inc/Slider'
import FooterPage from './includes/FooterPage'
import MainPage from './includes/MainPage'
import Mv from './includes/Mv'

export default function Home() {
    return (
        <div>
            <Slider/>
            <MainPage/>
            <Mv/>
            <FooterPage/>

        </div>
    )
}
