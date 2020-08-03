import React from "react"

import "../../css/about.css"
import HoverCard from "../../components/hovercard";
import ItemHoverCard from "../../components/itemhovercard";

class Home extends React.Component {

    renderFeatures() {
        var features = [
            {
                title: "投资并购的财务顾问",
                desc: [
                    "尽管由于政治的原因，国际形势有逆全球化的趋势，我们还是坚信跨国界的贸易和投融资是有经济价值的，在公平自由的环境中达成的合作，对双方都是互利的。",
                    "我们利用我们多年跨国工作的经验，帮助中国企业去海外投资和收购，我们可以为中国企业制定海外并购的战略方案，寻找并购标的，完成交易，以及并购之后的业务整合。",
                    "中国经过几十年的改革开放，已经成为世界上最重要的经济体。我们也帮助外国企业到中国来投资和收购。"
                ]
            },
            {
                title: "债务重组的财务顾问",
                desc: [
                    "在经济下行的周期中，企业难免会遇到困难，我们有着丰富的重组经验。",
                    "可以代表企业制定重组方案，跟债权人沟通协调，达成最优解决方案。"
                ]
            },
            {
                title: "融资服务",
                desc: ["我们可以为成长过程中的企业或者临时资金有困难的企业提供资金解决方案，优化债务结构。"]
            },
            {
                title:"财务尽调服务",
                desc: ["我们有着多年企业财务运营管理的经验，可以为投资人在投资之前提供财务尽调服务。"]
            },
            {
                title: "临时接管，监管和业绩提升服务",
                desc: ["我们可以代表股权投资人或者债权人对被投资企业进行临时接管，监督，和业绩提升的服务。"]
            },
            {
            	title: "税收筹划",
                desc: ["我们可以为企业提供税收筹划服务，尤其在复杂的跨国投资和国际业务领域。"]
            },
            {
                title: "兼职财务总监/运营总监",
                desc: ["我们可以为企业提供兼职或者临时的财务总监或者运营总监的服务。"]
            },
            {
                title: "企业上市前的财务梳理和内控制度的建立",
                desc: ["企业准备上市之前，如果财务不是很规范，我们可以帮助企业做财务梳理，建立完善的内控制度，以达到上市公司财务规范的要求。"]
            },
            {
                title: "PMP项目管理的培训",
                desc: ["我们可以为企业定制PMP项目管理的培训。"]
            }
        ];
        return features.map((item, index) => {
            return <HoverCard texts={{ title: item.title, desc: item.desc }} key={index}></HoverCard>
        })
    }

    renderProm() {
        const features = [
            "我们认为每个客户的需求都是不一样的，我们会利用我们的专业知识帮助客户在这个急剧变化的环境中，寻找到最佳解决方案",
            "我们一直坚持结果导向，除了给客户提建议，我们经常带领团队为客户执行",
            "以往客户和同事对我们的评价是：专业，务实，创新，真诚。"
        ];
        return features.map((item, index) => {
            return <ItemHoverCard texts={{ title: item }} key={index}></ItemHoverCard>
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
                    潘文才先生和叶杰成先生于2020年在上海成立库寻咨询:
                </div>
                <ul className="feature-items">
                    {this.renderProm()}
                </ul>
            </div>

            <div className="team-container">
                <div className="team-item-container">
                    <div className="team-item-desc">
                        <p>潘先生具有中国和美国的注册会计师（CPA）资格，特许金融分析师（CFA），上海证券交易所颁发的独董资格，美国房地产经纪人资格。</p>
                        <p>之前在跨国企业担任财务总监和美国Nasdaq上市公司的独立董事，在中国，美国和南非都有过多年的工作经历。熟悉不同国家的财务，税法，和资本市场。涉及的行业有金融，现代物流，生物医药和互联网等。</p>
                        <p>潘先生持有对外经济贸易大学会计学本科学位和美国犹他大学会计学硕士学位。</p>

                    </div>
                    <div className="team-item-image">
                        <img src={require("../../img/panwencai.jpg")} />
                    </div>
                </div>

                <div className="team-item-container">
                    <div className="team-item-desc">
                        <p>叶先生具有项目管理专业资格（PMP）。</p>
                        <p>之前在华为工作了15年多，其中7年多时间被华为派驻德国和瑞士负责大型电信项目的实施和交付，对企业运营和项目管理有着丰富的实战经验。</p>
                        
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
                        电话： + 86 138 1842 4741
                    </div>
                </div>

                <div className="footer-contactus">
                    <div>
                        地址：上海市静安区共和路219号企业公馆802室   邮编：200070
                    </div>
                </div>

                <div className="footer-contactus">
                    <div>
                        电子邮件: Wilson.Pan@cushingconsult.com
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
