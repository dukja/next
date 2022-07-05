import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Nav from './../../component/Nav'

export default function Main({children, pageWraperStyle}){
    useEffect(()=>{
        document.getElementById('__next').classList.add("mainStyle")
    })
    const pageWraperClass = classNames('pageWraper', pageWraperStyle)
    return(
        <>
        <div className='dark-ink-higher siteWrap mainStyle'>
            <Nav/>
            <div className={pageWraperClass}>
                {children}    
            </div>
            <div className='pagePading t-metadata-sm footer'>Dukyeon Ha</div>
        </div>
        <div className='bg'></div>
        </>
    )
}