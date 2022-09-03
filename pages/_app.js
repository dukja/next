import {useEffect,useRef,useState} from "react";
import Nav from '../component/Nav'
import '../styles/globals.css'
import '../styles/styles.css'
import { ContextLayout } from '../utils/ContextLayout'
import { motion,AnimatePresence} from "framer-motion"
function MyApp({ Component, pageProps }) {
  const [topSpacing, setTop] = useState();
  const [bottomSpacing, setBottom] = useState();
  return <>
  
    <ContextLayout.Provider
          value={{
            topSpacing,
            setTop,
            bottomSpacing,
            setBottom
          }}
    >

      <Component {...pageProps} />

    </ContextLayout.Provider>
    
  </>
}

export default MyApp
