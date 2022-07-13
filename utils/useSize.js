import {useEffect,useRef,useState} from "react";
export default function useSize (){
    const element = useRef();
    const [elemSize, setSize] = useState()

    const onResize = () =>{
        if (!element.current) return;
        setSize(element.current.clientHeight)
    }
    useEffect(()=>{ 
        onResize()
        window.addEventListener("resize", onResize);

    })
    return {element, elemSize};
}
