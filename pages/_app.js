import Nav from '../component/Nav'
import '../styles/globals.css'
import '../styles/styles.css'
import { motion, AnimateSharedLayout } from "framer-motion";
function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
  </>
}

export default MyApp
