import { motion,AnimatePresence} from "framer-motion"
import Link from "next/link"
import Main from "./Main"

export default function ETC () {
    return(
        <>
            <AnimatePresence onExitComplete={() => console.log("exit completed")}>
                <div data-is="test">

                    <Main/>
                </div>
            </AnimatePresence>

        </>
    )
}