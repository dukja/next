import React,{useEffect,useContext} from "react";
import { ContextLayout } from "../../utils/ContextLayout"
import useSize from "../../utils/useSize";


export default function Footer(){
    const {element, elemSize} = useSize();
    const { setBottom } = useContext(ContextLayout);
    useEffect(()=>{
        if(element.current){
            setBottom(elemSize)
        }
    },[elemSize])
    return(
        <>
        <div className='pagePading t-caption footer' ref={element}>Dukyeon Ha</div>
        </>
    )
}