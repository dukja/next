import { motion,AnimatePresence} from "framer-motion"
import Link from "next/link"

export default function Sub () {
    return(
        <>
        <Link href="/projects/1/">
                <motion.div initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} style={{backgroundColor:"green",width:"300px",height:"300px"}}>Sub</motion.div>
        </Link>
        </>
    )
}