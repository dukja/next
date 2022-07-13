import React,{useEffect,useContext} from "react";
import { useRouter } from 'next/router'
import { motion, LayoutGroup } from "framer-motion";
import Link from 'next/link'
import Logo from '../Logo';
import useSize from "../../utils/useSize";
import { ContextLayout } from "../../utils/ContextLayout";

export default function Nav({scrollYProgress}){
    const {element, elemSize} = useSize();
    const { setTop } = useContext(ContextLayout);
    useEffect(()=>{
        if(element.current){
            setTop(elemSize)
        }
    },[elemSize])
    return(
        <>
            <div className="nav pagePading" ref={element}>
                {scrollYProgress ? <Logo scrollYProgress={scrollYProgress}></Logo>:<Logo></Logo>}
                <div className='navItems'>
                    <NavItem text="about" pathname="/"/>
                    <NavItem  text="works" pathname="/works"/>
                    <NavItem  text="projects" pathname="/projects"/>
                </div>
            </div>
        </>
    )
}
function NavItem ({text, pathname}) {
    const router = useRouter()
    return(
        <>
        <div className='navItem'>
            <Link href={{pathname: pathname}} as={process.env.BACKEND_URL+`${pathname}`}>
                {text}
            </Link>            
            {router.pathname === pathname && <motion.span className="indicator" layoutId="indicator" ></motion.span>}
        </div>
        </>
    )
}