import React from "react";
import {motion,useTransform} from "framer-motion";
import LogoSvg from "./../../public/svg/logo.svg";
import LogoPlatform from "./../../public/svg/logoPlatform.svg";
import LogoDesigner from "./../../public/svg/logoDesigner.svg";
export default function Logo ({scrollYProgress}) {
    console.log("scrollYProgress",scrollYProgress)
    // const opacity = useTransform(scrollYProgress, [0, 1],[1, 0])
    // const y = useTransform(scrollYProgress,[0, .5], [0, -100])
    // const y2 = useTransform(scrollYProgress,[0, .1], [0, -50])
    // const scale = useTransform(scrollYProgress,[0, .1], [1, 1.5])
    return(
        <>
        <div className="d-flex flex-column logoNew">

            <motion.div >
                <LogoSvg/>
            </motion.div>
            {/* <motion.div style={{scale,y:y2}} transition={{ type: "spring", stiffness: 100 }}> */}
            <motion.div  transition={{ type: "spring", stiffness: 100 }}>
                <LogoPlatform/>
            </motion.div>
            <motion.div >
            {/* <motion.div style={{scale,y:y2}}> */}
                <LogoDesigner/>
            </motion.div>
        </div>
        </>
    )
}