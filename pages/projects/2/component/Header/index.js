import { motion} from "framer-motion"
import classNames from 'classnames/bind';
import styles from "./../../Index.module.css";
const cx = classNames.bind(styles);
const headerVariants = {
    initial:{
        y:-100,
        opacity:0
    },    
    animate:{
        y:0,
        opacity:1
    }
}
export default function Header(){
    return(
        <>
        <motion.div 
            initial="initial" 
            animate="animate" 
            transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 0.6,
            }} 
            variants={headerVariants} 
            className={cx('header')}>
            <div className={cx('header-inner')}>
                <div className={cx('logo')}>Ollie</div>
                <nav className={cx('nav')}>
                    <li>
                        <a href='/design'>Design</a>
                    </li>
                    <li>
                        <a href='/strategy'>Strategy</a>
                    </li>
                    <li>
                        <a href='/cases'>Cases</a>
                    </li>
                    <li>
                        <a href='/about'>About</a>
                    </li>
                    <li>
                        <a href='/why'>Why work with us?</a>
                    </li>
                </nav>
                <div className={cx('contact')}><a href='/contact'>Let's work together</a></div>
                <div className={cx('hamburger-menu')}>
                    <span></span>
                    <span></span>
                </div>

            </div>
            
        </motion.div>
        </>
    )
}