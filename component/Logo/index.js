import React,{useEffect} from "react";
import {motion,useTransform} from "framer-motion";
import Link from 'next/link'
import LogoSvg from "./../../public/svg/logo.svg";
import LogoPlatform from "./../../public/svg/logoPlatform.svg";
import LogoDesigner from "./../../public/svg/logoDesigner.svg";

const LogoDefault = ({opacity, y, scale, fill}) =>{
    return(
        <>
            {/* <motion.LogoSvg className="logoSvg" /> */}
            <motion.svg width="current" viewBox="0 0 433 140" xmlns="http://www.w3.org/2000/svg" style={(opacity || y || scale ) && {opacity, y, scale}} fill={fill}>
                <path d="M18.6 0.599991V140H0.400024V0.599991H18.6Z" fill="current" fill-rule="evenodd"/>
                <path d="M183.419 28.4C191.952 28.4 199.552 30.2 206.219 33.8C212.885 37.2667 218.152 42.5333 222.019 49.6C225.885 56.6667 227.819 65.2667 227.819 75.4V140H209.819V78C209.819 67.0667 207.085 58.7333 201.619 53C196.285 47.1333 189.019 44.2 179.819 44.2C170.352 44.2 162.819 47.2667 157.219 53.4C151.619 59.4 148.819 68.1333 148.819 79.6V140H130.819V78C130.819 67.0667 128.085 58.7333 122.619 53C117.285 47.1333 110.019 44.2 100.819 44.2C91.3521 44.2 83.8188 47.2667 78.2188 53.4C72.6188 59.4 69.8188 68.1333 69.8188 79.6V140H51.6188V30.4H69.8188V46.2C73.4188 40.4667 78.2188 36.0667 84.2188 33C90.3521 29.9333 97.0854 28.4 104.419 28.4C113.619 28.4 121.752 30.4667 128.819 34.6C135.885 38.7333 141.152 44.8 144.619 52.8C147.685 45.0667 152.752 39.0667 159.819 34.8C166.885 30.5333 174.752 28.4 183.419 28.4Z" fill="current" fill-rule="evenodd"/>
                <path d="M358.394 0.599991C373.594 0.599991 386.727 3.46666 397.794 9.19999C408.994 14.8 417.527 22.8667 423.394 33.4C429.394 43.9333 432.394 56.3333 432.394 70.6C432.394 84.8667 429.394 97.2667 423.394 107.8C417.527 118.2 408.994 126.2 397.794 131.8C386.727 137.267 373.594 140 358.394 140H314.994V0.599991H358.394ZM358.394 125C376.394 125 390.127 120.267 399.594 110.8C409.06 101.2 413.794 87.8 413.794 70.6C413.794 53.2667 408.994 39.7333 399.394 30C389.927 20.2667 376.26 15.4 358.394 15.4H333.194V125H358.394Z" fill="current" fill-rule="evenodd"/>
            </motion.svg>   
            {/* <motion.LogoSvg className="logoSvg" style={(opacity || y || scale) && {opacity, y, scale}}/> */}
            {/* <motion.div>
                <LogoPlatform/>
            </motion.div>
            <motion.div >
                <LogoDesigner/>
            </motion.div>     */}
        </>     
    )
}

const LogoAnimte = ({scrollYProgress}) => {
    const opacity = useTransform(scrollYProgress, [0, .1],[1, 0])
    const y = useTransform(scrollYProgress,[0, .1], [0, -100])
    const y2 = useTransform(scrollYProgress,[0, .1], [0, -50])
    const scale = useTransform(scrollYProgress,[0, .1], [1, 0])      
    return(
        <>
            <LogoDefault opacity={opacity} y={y} scale={scale}/>
        </>       
    )
}

export default function Logo ({scrollYProgress}) {
    return(
        <>
        <div className="d-flex flex-column logoNew">
            {scrollYProgress ?(
                <Link href={process.env.BACKEND_URL} as={process.env.BACKEND_URL}><LogoAnimte scrollYProgress={scrollYProgress}/></Link>
            ):(
                <>
                    <Link href={process.env.BACKEND_URL} as={process.env.BACKEND_URL}><LogoDefault fill={"#3368FF"}/></Link>
                </>
            ) }
        </div>
        </>
    )
}