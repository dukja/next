import { motion,AnimatePresence} from "framer-motion"
import classNames from 'classnames/bind';

import Image from "../../../../../component/Image"
import styles from "./../../Index.module.css";
const cx = classNames.bind(styles);
const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  const itemMain = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  };  

  const item = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };
export default function Loader  ({setLoading}) {
    return(
        <>
        <motion.div className={styles.loader}>
            <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={container}
            onAnimationComplete={() => setLoading(false)}
            className={styles.loaderInner}>
                <ImageBlock variants={item} id="image-1"/>
                <motion.div variants={itemMain} className={cx('transition-image')}>
                    <motion.img
                        layoutId="main-image-1"
                        src={process.env.BACKEND_URL+`/projects/2/src/projects/images/2/image-2.webp`}
                    />
                </motion.div>
                <ImageBlock variants={item} id="image-3"/>
                <ImageBlock variants={item} id="image-4"/>
                <ImageBlock variants={item} id="image-5"/>
            </motion.div>
        </motion.div>
        </>
    )
}

export function ImageBlock  ({id, variants}) {
    return(
        <>
        <motion.div variants={variants} className={cx('imageBlock', `${id}`)} >
            <Image
                src={process.env.BACKEND_URL+`/projects/2/src/projects/images/2/${id}.webp`}
                fallback={process.env.BACKEND_URL+`/projects/2/src/projects/images/2/${id}.jpg`}
                alt={id}
            />
        </motion.div>
        </>
    )
}