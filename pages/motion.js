import { motion, useViewportScroll,useTransform } from "framer-motion";
import Project from "./layout/project";

export default function Motion(){
    const { scrollYProgress } = useViewportScroll();
    return(
        <>
        <Project scrollYProgress={scrollYProgress}>
            <div style={{height:"10000px"}}>
                {/* <div className="hv-100 d-flex align-items-center" style={{fontSize:"120px"}}>
                    CYBERMDX
                    OFFICE                    
                </div> */}
            </div>
        </Project>
        </>
    )
}