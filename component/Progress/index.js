import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
export default function Progress  ({scaleX})  {
    console.log("scaleX",scaleX)
    return(
        <>
            <div className="progressBar">
                <motion.div className="indicator"
                    style={{
                        scaleX: scaleX,                       
                        originX: 0,
                    }}
                >
                </motion.div>
            </div>
        </>
    )
}