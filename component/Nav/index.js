import { useRouter } from 'next/router'
import { motion, AnimateSharedLayout } from "framer-motion";
import Link from 'next/link'
import Logo from '../Logo';
export default function Nav({scrollYProgress}){
    return(
        <>
            <AnimateSharedLayout>
                <div className="nav pagePading">
                    <Logo scrollYProgress={scrollYProgress}></Logo>
                    {/* <div className='logo'>
                        <span >Platform</span><br/>
                        Designer<br/>
                        Portfolio
                    </div> */}
                    <div className='navItems'>
                        <NavItem text="about" pathname="/"/>
                        <NavItem  text="project" pathname="/project"/>
                        <NavItem  text="motion" pathname="/motion"/>
                    </div>
                </div>
            </AnimateSharedLayout>
        </>
    )
}
function NavItem ({text, pathname}) {
    const router = useRouter()
    return(
        <>
        <div className='navItem'>
            <Link href={{pathname: pathname}} as={process.env.BACKEND_URL + `${pathname}`}>
                {text}
            </Link>            
            {router.pathname === pathname && <motion.span className="indicator" layoutId="indicator" ></motion.span>}
        </div>
        </>
    )
}