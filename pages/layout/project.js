import React, { useState, useEffect } from 'react';

import Nav from "../../component/Nav";

export default function Project({children, scrollYProgress}){
    useEffect(()=>{
        document.getElementById('__next').classList.remove("mainStyle")
    })
    return(
        <>
            <Nav scrollYProgress={scrollYProgress}></Nav>
            {children}
        </>
    )
}