import { motion,AnimatePresence} from "framer-motion"
import Link from "next/link"
export default function Main () {
    return(
        <>

<Link href="/projects/1/Sub"><motion.div initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} exit={{x:1000}}  style={{backgroundColor:"red",width:"200px",height:"200px"}} key="modal">Main</motion.div></Link>

            
        </>
    )
}