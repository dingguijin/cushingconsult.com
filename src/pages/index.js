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
    </div>
    <div>
      <div>
        <div>
          <a href="/en/about-us">
            English Version
        </a>
        </div>

        <div>
          <a href="/zh/about-us">
            中文版
            </a>
        </div>
      </div>
    </div>
  </div>
}
