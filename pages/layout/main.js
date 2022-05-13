import React, { useState, useEffect } from 'react';

import Nav from './../../component/Nav'

export default function Main({children}){
    useEffect(()=>{
        document.getElementById('__next').classList.add("mainStyle")
    })
    return(
        <>
        <div className='dark-ink-higher siteWrap mainStyle'>
            <Nav/>
            <div className='pageWraper'>
                {children}    
            </div>
            <div className='pagePading t-metadata-sm footer'>Dukyeon Ha</div>
        </div>
        <div className='bg'></div>
        </>
    )
}