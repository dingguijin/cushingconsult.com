import React from "react"

import "../../css/about.css"
import HoverCard from "../../components/hovercard";
import ItemHoverCard from "../../components/itemhovercard";

class Home extends React.Component {

    renderFeatures() {
        const features = [
            {
                title: "M&A financial advisory",
                desc: [
                    "Due to political reasons, the globalization faces many challenges. We firmly believe that cross-border trade and investment have its economic value, and cooperation reached under free will is mutually beneficial to both parties. We use our years of multinational work experience to help Chinese companies invest and do business overseas. ",
                    "After decades of reform and opening up, China has become one of the most important economies in the world. We help foreign companies to invest and do business in China. We prepare strategic China entry plan, search for the target companies or real estate assets in China for foreign investors. After completing the transactions, and we can continue to serve with the business integration and assets management."
                ]
            },
            {
                title: "Debt restructuring service",
                desc: ["In this difficult economic environment, some business may face financial difficult. We have many years of restructuring experience, we help the company formulate the restructuring plan, negotiate with the creditors, and find the optimal solution."]
            },
            {
                title: "Financing service",
                desc: ["We provide the financing solution for the growth companies or distressed companies, and we can optimize the capital structure for the companies."]
            },
            {
                title: "Financial due diligence service",
                desc: ["We provide the financial due diligence service for the investors."]
            },
            {
                title: "Interim Management/ Performance improvement",
                desc: ["We provide interim management/performance improvement service to distressed business on behalf of the investors or creditors."]
            },
            {
                title: "Tax advisory",
                desc: ["We provide tax advisory service, especially on the complex cross-border business issues."]
            },
            {
                title: "Part-time or Interim CFO/COO",
                desc: ["We provide Part-time or Interim CFO/COO service."]
            },
            {
                title: "Pre-IPO accounting and internal control service",
                desc: ["We help the company with its accounting books and internal control systems and get ready for public listing, either domestically in China or oversea listing."]
            },
            {
                title:"PMP training service",
                desc: ["We provide customized PMP (Project Management Professional) training service for the companies."]
            }
        ];
        
        return features.map((item, index) => {
            return <HoverCard texts={{ title: item.title, desc: item.desc }} key={index}></HoverCard>
        })
    }

    renderProm() {
        const features = [
            "We believe each client has its own unique needs, we provide customized service to find the optimum solution",
            "We are results oriented, other than providing advisory service, we often execute on behalf of the client",
            "The feedback from our previous clients and colleagues：Professional, Pragmatic, Creative and Honest"];

        return features.map((item, index) => {
            return <ItemHoverCard texts={{ title: item }} key={index}></ItemHoverCard>
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
                <ul className="feature-items">
                    {this.renderProm()}
                </ul>
            </div>

            <div className="team-container">
                <div className="team-item-container">
                    <div className="team-item-desc">

                        <p>Mr. Wencai Pan obtained the CPA qualifications in both China and the US. He is also an active CFA charter holder. He holds independent director certificate issued by Shanghai Stock Exchange and real estate sales associate license from Florida USA. He has over 20 years corporate finance experience in Mainland China, the US, and South Africa. He is familiar with accounting, taxation and capital markets in different countries. He has worked in banking, logistics, pharmaceutical, medical equipment and TMT industries.</p>
                        
                        <p>Mr. Pan has the Bachelor degree in accounting from University of International Business & Economics in Beijing and the Master degree in accounting from University of Utah in the USA.</p>
                    </div>
                    <div className="team-item-image">
                        <img src={require("../../img/panwencai.jpg")} />
                    </div>
                </div>

                <div className="team-item-container">
                    <div className="team-item-desc">
                        <p>
                            Mr. Ye has PMP certificate. He has worked for Huawei for 15 years, about 8 years in its Shanghai office, and then another 7 years in its Germany and Switzerland offices, leading large telecom projects.</p>
                        <p>
                            Mr. Ye has the Bachelor degree in Physics and the Master degree in Electronics Engineering, both from Dalian University of Technology.
                        </p>
                        
                    </div>
                    <div className="team-item-image">
                        <img src={require("../../img/yejiecheng.jpg")} />
                    </div>
                </div>

            </div>

            <div className="footer-container">
                <div className="footer-contactus">
                    <div className="footer-contactus-item">
                        Tel： +86 138 1842 4741
                    </div>

                    <div className="footer-contactus-item">
                        Email: Wilson.Pan@cushingconsult.com
                    </div>
                </div>

                <div className="footer-contactus">
                    <div className="footer-contactus-item">
                        Addr:  219 Gonghe Road, Suite 802, Jiangan District, Shanghai, China
                    </div>

                    <div className="footer-contactus-item">
                        Zip: 200070
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
