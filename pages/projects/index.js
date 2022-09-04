
import React, { useState, useRef, useEffect,useContext } from "react"
import { gsap } from "gsap";
import classNames from "classnames"
import styled, { css } from "styled-components"
import { motion, useMotionValue, useTransform,useElementScroll} from "framer-motion"
import Progress from "../../component/progress"
import Main from "../layout/main";
import { ContextLayout } from '../../utils/ContextLayout';

const ease = "cubic-bezier(0, 0.55, 0.45, 1)"
const projects=[
  {co:"카페24",project:"Cafe24",text:`Design System`,link:"/etc/1.js",hover:"#006EB8"},  
  {co:"파스토",project:"FASSTO",text:`Homepage UI`,link:"https://www.fassto.ai/",hover:"#00855B"},  
  {co:"파스토",project:"FASSTO Self",text:`Fulfillment Service UI`,link:"https://www.fasstoself.com/",hover:"#00B480"},  
  {co:"파스토",project:"FASSTO App",text:`Fulfillment App UI`,link:"https://play.google.com/store/apps/details?id=ai.fassto.fms.app.com.android&hl=ko&gl=US",hover:"#00855B"},  
  {co:"한위드정보기술",project:"hdaas",text:`Server Virtualization  Dashboard UI`,link:"https://sellec.kr/theme/basic/hdaas/www/php/dashboard-v1.php",hover:"#E8820D"},  
  {co:"네이버",project:"NAVER Office",text:"Cloud Office UI",link:"https://office.naver.com/",hover:"#03C75A"},
  {co:"코디스페이스",project:"Incheon Airport",text:"Cloud Office App UI",link:"/images/Incheon-Airport.pdf",hover:"#00AAB4"},
  {co:"코디스페이스",project:"Incheon Airport",text:"Airbeacon Admin UI",link:"https://sellec.kr/theme/basic/airbeacon/dashBoardList.html#",hover:"#00AAB4"},
  {co:"코디스페이스",project:"Incheon Airport",text:"Node Admin UI",link:"/images/node.png",hover:"#EC641F"}
]

export default function About (){
  const {topSpacing, bottomSpacing} = useContext(ContextLayout)
    return(
      <>
      <Main topSpacing={topSpacing} bottomSpacing={bottomSpacing}>
      <div className="pagePading overflow-scroll projects">
          <div className="t-body-sm-strong p32-t position-sticky" style={{top:0}}>Projects</div>
          {/* <h1>
            <a href="/projects/1" className="t-weight-thin" target="_blank">01 Page Transitions with React Router and Framer Motion</a>
          </h1> */}
          <h1>
            <a href={process.env.BACKEND_URL+`${projects/2}`} className="t-weight-thin" target="_blank">01 Smooth Loading Transitions with Framer Motion</a>
          </h1>
        </div>
      </Main>
      </>
    )
}