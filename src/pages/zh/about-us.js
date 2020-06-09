import React from "react"

import "../../css/about.css"
import HoverCard from "../../components/hovercard";

class Home extends React.Component {

    renderFeatures() {
        const features = [
            "跨境财务咨询",
            "财务尽调和税收优化",
            "兼职财务总监/运营总监",
            "业绩提升/债务重组/临时接管",            
        ];

        return features.map((item, index) => {
            return <HoverCard texts={{ title: item, desc: item }} key={index}></HoverCard>
        })
    }

    renderProm() {
        const features = [
            "各自都有超过20多年的企业管理和运营的经验",
            "在创立库寻之前，潘先生在美国和南非工作过8年，叶先生在德国和瑞士工作过7年",
            "我们认为每个客户的需求都是不一样的，我们会利用我们的专业知识帮助客户在这个急剧变化的环境中，寻找到最佳解决方案",
            "我们一直坚持结果导向，除了给客户提建议，我们经常带领团队为客户执行",
            "我们永远把客户的利益放在第一位",
            "以往客户和同事对我们的评价是：专业，务实，创新，真诚",
        ];

        return features.map((item, index) => {
            return <HoverCard texts={{ title: item, desc: item }} key={index}></HoverCard>
        })
    }

    render() {
        return <div>
            <div className="title-container">
                <div className="title">库 寻 咨 询</div>

                <div className="subtitle">上海库寻企业管理咨询合伙企业 </div>
            </div>
            <div className="feature-container">
                <div className="feature-title">我们主要为投资人，私募基金或者大型集团公司，提供如下服务：</div>
                <ul className="feature-items">
                    {this.renderFeatures()}
                </ul>
            </div>

            <div className="feature-container">
                <div className="feature-title">
                    潘文才先生和叶杰成先生于2020年在上海成立:
                </div>
                <ul className="feature-items">
                    {this.renderProm()}
                </ul>
            </div>

            <div className="team-container">
                <div className="team-item-container">
                    <div className="team-item-desc">
                    <p>潘先生具有中国和美国的注册会计师（CPA）资格，也是特许金融分析师（CFA），持有上海证券交易所颁发的独董资格。潘先生之前一直在跨国企业担任财务总监，在中国，美国，南非，越南，中东都有过工作经历。熟悉不同国家的财务，税法，和资本市场。涉及的行业有金融，现代物流，制造业和互联网等。</p>
                    <p>潘先生持有对外经济贸易大学会计学本科学位和美国犹他大学会计学硕士学位。</p>

                    </div>
                    <div className="team-item-image">
                        <img src={require("../../img/panwencai.jpg")} />
                    </div>
                </div>

                <div className="team-item-container">
                    <div className="team-item-desc">
                    <p>叶先生具有项目管理专业资格（PMP）。之前在华为工作了15年多，其中7年多时间被华为派驻德国和瑞士负责大型电信项目的实施和交付，对企业运营和项目管理有着丰富的实战经验。</p>
                    <p>叶先生持有大连理工大学物理学本科学位和电子工程硕士学位。</p>
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