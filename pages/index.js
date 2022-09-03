import React, { useState, useEffect,useContext } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from "./layout/main"
import { ContextLayout } from '../utils/ContextLayout';


export default function Home() {
  const {topSpacing, bottomSpacing} = useContext(ContextLayout)
  return (
      <>
      <Head>
        <title>Platform Designer Portfolio</title>
        <meta name="description" content="Platform Designer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <Main topSpacing={topSpacing} bottomSpacing={bottomSpacing}>
        <div className="pageMax pagePading overflow-scroll about">
          <div className='pageGrid'>
            <div className='cs1 ce-1 cs-lg1 ce-lg5 side'>
              <div>
                  <div className="t-caption-title">Working Tools</div>
                  <div>
                        Figma, Sketch, ProtoPie, Principle, Framer, Axure, Notion, HTML5, SCSS, jquery, react, Next js, Bootstrap, StoryBook, Eclipse, Git, Jira, Slack
                  </div>                            
              </div>
              <div>
                  <div className="t-caption-title p32-t">Experience</div>
                  <ul className="list-none p0 m0">
                    <li>Cafe24 · 디자인시스템</li>
                    <li>Fassto · 풀필먼트 서비스 UI, 디자인시스템</li>
                    <li>CoordiSpace · 비콘위치 추적 서비스 UI</li>
                    <li>Hanwith · 통합관제 클라우드 플랫폼 UI</li>
                    <li>Secuve · 보안솔루션 UI</li>
                    <li>Synapsoft · 네이버오피스 UI</li>
                  </ul>                            
              </div>
            </div>
            <div className='cs1 ce-1 cs-lg7 ce-lg13 main'>
              <div className='t-display-xs p32-b'>Now&Forward</div>
              <div className='t-caption-title'>About Me</div>
              <div className="m16-b">
                  "주로 소프트웨어 회사에서 인하우스 디자이너로서 Dashboard, App, Web의 UI/UX디자인 및 퍼블리싱 작업을 했습니다.
              </div>
              <div className="m16-b">
              현재는 디자인 시스템을 만들고 있습니다. 디자인을 코드로 구현하는 데 관심이 많고 자바스크립트를 좋아합니다.
              </div>
              <div>
                  앞으로도 웹을 더 이해하고 효율적인 작업을 위한 디자인시스템을 구축할 것입니다."
              </div> 
            </div>
          </div>
        </div>
      </Main>
      </>
  )
}
