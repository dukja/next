import React, { useState, useEffect } from 'react';
import { motion,AnimatePresence,AnimateSharedLayout} from "framer-motion"
import classNames from 'classnames/bind';

import Loader from "./component/Loader";
import Header from './component/Header';

import styles from "./Index.module.css";
import Banner from './component/Banner';
const cx = classNames.bind(styles);
// https://github.com/wrongakram/pageloader
// https://pageloader-3cf2b.web.app/
// https://www.youtube.com/watch?v=BtsVMvds3P0&t=193s
export default function Index  ()  {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      loading
        ? document.querySelector("body").classList.add(cx("loading"), "projects02")
        : document.querySelector("body").classList.remove(cx("loading"));
    }, [loading]);
  
    return(
        <>
        <AnimatePresence>
           {loading ? (
            <motion.div key='loader'>
                <Loader setLoading={setLoading} />
            </motion.div>
            ) : (
                <>
                <Header/>
                <Banner/>
                {!loading && (
                    <div className={cx('transition-image', 'final')}>
                        <motion.img
                        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                        src={process.env.BACKEND_URL+`/src/projects/images/2/image-2.webp`}
                        layoutId='main-image-1'
                        />
                    </div>
                )}
            </>
            )}
        </AnimatePresence>
        </>
    )
}