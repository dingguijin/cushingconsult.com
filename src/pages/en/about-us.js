import React from "react"

import "../../css/about.css"
import HoverCard from "../../components/hovercard";

class Home extends React.Component {

    renderFeatures() {
        const features = [
            "Cross-border financial advisory",
            "Financial due diligence and tax advisory",
            "Part-time CFO/COO",
            "Performance improvement, debt restructuring, and interim management"
        ];

        return features.map((item, index) => {
            return <HoverCard texts={{ title: item, desc: item }} key={index}></HoverCard>
        })
    }

    renderProm() {
        const features = [
            "Each founder has over 20 years corporate management experience",
            "Before founding Cushing, Mr. Pan has worked in the US and South Africa for 8 years, and Mr. Ye in Germany and Switzerland for 7 years",
            "We believe each client has its own unique needs, we provide customized service to find the optimum solution",
            "We are results oriented, other than providing advisory service, we often execute on behalf of the client",
            "We always put client’s interest first",
            "The feedback from our previous clients and colleagues：Professional, Down to earth, Creative, Honest"
        ];

        return features.map((item, index) => {
            return <HoverCard texts={{ title: item, desc: item }} key={index}></HoverCard>
        })
    }

    render() {
        return <div>
            <div className="title-container">
                <div className="title">Cushing Consult</div>

                <div className="subtitle">Shanghai Cushing Management Consult LLP </div>
            </div>
            <div className="feature-container">
                <div className="feature-title">We provide following services for investors, PE funds, or large companies：</div>
                <ul className="feature-items">
                    {this.renderFeatures()}
                </ul>
            </div>

            <div className="feature-container">
                <div className="feature-title">
                    The firm was founded by Mr. Pan and Mr. Ye in shanghai in 2020:
                </div>
                <ul className="feature-items">
                    {this.renderProm()}
                </ul>
            </div>

            <div className="team-container">
                <div className="team-item-container">
                    <div className="team-item-desc">
                        Mr. Pan obtained the CPA qualifications in both China and the US. He is also an active CFA charter holder. He has over 20 years CFO experience in Mainland China, the US, South Africa, Vietnam and middle east. He is familiar with accounting and taxation in different countries. He has worked in banking, logistics, manufacturing and TMT industries.
                        Mr. Pan has the Bachelor degree in accounting from University of International Business & Economics in Beijing and the Master degree in accounting from University of Utah in the USA.
                </div>
                    <div className="team-item-image">
                        <img src={require("../../img/panwencai.jpg")} />
                    </div>
                </div>

                <div className="team-item-container">
                    <div className="team-item-desc">
                        Mr. Ye has PMP certificate. He has worked for Huawei for 15 years, about 8 years in its Shanghai office, and then another 7 years in its Germany and Switzerland offices, leading large telecom projects.
                        Mr. Ye has the Bachelor degree in Physics and the Master degree in Electronics Engineering, both from Dalian University of Technology.
                </div>
                    <div className="team-item-image">
                        <img src={require("../../img/yejiecheng.jpg")} />
                    </div>
                </div>

            </div>

            <div className="footer-container">
                <div className="footer-contactus">
                    <div className="footer-contactus-item">
                        Tel：	+ 86 138 1842 4741
                    </div>

                    <div className="footer-contactus-item">
                        Email: Wilson.Pan@cushingconsult.com
                    </div>
                </div>

                <div className="footer-language">
                    <div className="footer-language-item">
                        <a href="/en/about-us">
                            English Version
                        </a>
                    </div>

                    <div class="footer-language-item">
                        <a href="/zh/about-us">
                            中文版
                        </a>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Home;