import React from "react"

import styles from "../css/home.css"

export default function Home() {
  return <div className="homeBackground">
    <div className="homeCenter">
      <div className="title">
        Cushing Consult
      </div>
      <div className="title">
        库 寻 咨 询
      </div>

      <div style={{
        display:"flex",
        flexDirection:"row",
        fontSize: "18px"
      }}>

        <div style={{padding:"20px"}}>
          <a href="/en/about-us">English Version</a>
        </div>

        <div style={{padding:"20px"}}>
          <a href="/zh/about-us">中文版</a>
        </div>

      </div>
    </div>
  </div>
}
