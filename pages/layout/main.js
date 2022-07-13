import React, { useState, useEffect,useContext } from 'react';
import classNames from 'classnames';
import Nav from './../../component/Nav'
import Footer from '../../component/Footer';


export default function Main({children, pageWraperStyle,topSpacing, bottomSpacing}){

    useEffect(()=>{
        document.getElementById('__next').classList.add("mainStyle")
    })
    const pageWraperClass = classNames('pageWraper', pageWraperStyle)
    return(
        <>
        <div className='dark-ink-higher siteWrap mainStyle'>
            <Nav/>
            <div className={pageWraperClass} style={{paddingTop:`${topSpacing}px`, paddingBottom:`${bottomSpacing}px`}}>
                {children}   
            </div>
            <Footer/>
        </div>
        <div className='bg'></div>
        </>
    )
}