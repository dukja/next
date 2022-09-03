import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import classNames from 'classnames/bind';

import styles from "./../../Index.module.css";
const cx = classNames.bind(styles);

const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };
  const letterAni = {
    initial: { y: 400 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };
export default function Banner(){
    const [playMarquee, setPlayMarquee] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setPlayMarquee(true);
      }, 2000);
    }, []);
    return(
        <>
        <motion.div className={cx('banner')}>            
            <BannerRowTop title={"brand"}/>
            <BannerRowCenter title={"experience"} playMarquee={playMarquee}/>
            <BannerRowBottom title={"studio"} />
        </motion.div>
        </>
    )
}
export function AnimatedLetters  ({ title, disabled })  {
    return(
        <>
        <motion.span
            className={cx('row-title')}
            variants={disabled ? null : banner}
            initial='initial'
            animate='animate'>
            {[...title].map((letter) => (
                <motion.span
                    className={cx('row-letter')}
                    variants={disabled ? null : letterAni}>
                {letter}
                </motion.span>
            ))}
        </motion.span>        
        </>
    )
}
//   영역 구분
export function BannerRowTop  ({title})  {
    return(
        <>
            <div className={cx("banner-row")}>
                <div className={cx('row-col')}>
                    <AnimatedLetters title={title} />
                </div>
                <motion.div
                initial={{opacity: 0, y:80}}
                animate={{opacity: 1, y:0}}
                transition={{
                    ease:"easeInOut",
                    delay:1,
                    duration:0.4
                }}
                className={cx('row-col')}>
                    <span className={cx('row-message')}>
                        We are specialised in setting up the foundation of your brand and setting you up for success.
                    </span>
                </motion.div>                
            </div>

        </>
    )
}
export function BannerRowCenter ({title, playMarquee}){
    return(
        <>
        <div className={cx('banner-row', 'marquee',`${playMarquee && "animate"}`)}>
            <div className={cx('marquee__inner')}>
            <AnimatedLetters title={title} disabled />
            <AnimatedLetters title={title} />
            <AnimatedLetters title={title} disabled />
            <AnimatedLetters title={title} disabled />
            </div>
        </div>
        </>
    )
}
export function BannerRowBottom ({ title }){
    return(
        <>
        <div className={cx('banner-row', 'center')}>
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
            className={cx('scroll')}>
                <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 1.8,
                }}>
                scroll
                </motion.span>
                <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 1.8,
                }}>
                down
                </motion.span>
        </motion.div>
            <AnimatedLetters title={title} />
        </div>
        </>
    )
}