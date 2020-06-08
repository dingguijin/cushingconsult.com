import React from "react"

import "../../css/home.css"

export default function Home() {
    return <div>
        <div>
            <div>库 寻 咨 询</div>

            <div>上海库寻企业管理咨询合伙企业</div>
        </div>

        <div>
            <div>我们主要为投资人，私募基金或者大型集团公司，提供如下服务：</div>


            <ul>
                <li>
                    跨境财务咨询
                    Cross-border financial advisory；
            </li>
                <li>
                    财务尽调和税收优化
                    Financial due diligence and tax advisory；
            </li>
                <li>
                    兼职财务总监/运营总监
            </li>
                <li>
                    业绩提升/债务重组/临时接管
            </li>

                <li>

                    潘文才先生和叶杰成先生于2020年在上海成立
            </li>
                <li>
                    各自都有超过20多年的企业管理和运营的经验
            </li>
                <li>

                    在创立库寻之前，潘先生在美国和南非工作过8年，叶先生在德国和瑞士工作过7年
            </li>
                <li>
                    我们认为每个客户的需求都是不一样的，我们会利用我们的专业知识帮助客户在这个急剧变化的环境中，寻找到最佳解决方案
            </li>
                <li>
                    我们一直坚持结果导向，除了给客户提建议，我们经常带领团队为客户执行
            </li>

                <li>
                    我们永远把客户的利益放在第一位
            </li>

                <li>
                    以往客户和同事对我们的评价是：专业，务实，创新，真诚
            </li>

            </ul>
        </div>

        <div>
            <div>
                <div>
                    潘先生具有中国和美国的注册会计师（CPA）资格，也是特许金融分析师（CFA），持有上海证券交易所颁发的独董资格。潘先生之前一直在跨国企业担任财务总监，在中国，美国，南非，越南，中东都有过工作经历。熟悉不同国家的财务，税法，和资本市场。涉及的行业有金融，现代物流，制造业和互联网等。
                    潘先生持有对外经济贸易大学会计学本科学位和美国犹他大学会计学硕士学位。
                </div>
                <div>
                    <img src={require("../../img/panwencai.jpg")} />
                </div>
            </div>

            <div>
                <div>
                    叶先生具有项目管理专业资格（PMP）。之前在华为工作了15年多，其中7年多时间被华为派驻德国和瑞士负责大型电信项目的实施和交付，对企业运营和项目管理有着丰富的实战经验。
                    叶先生持有大连理工大学物理学本科学位和电子工程硕士学位。
                </div>
                <div>
                    <img src={require("../../img/yejiecheng.jpg")} />
                </div>
            </div>

        </div>

        <div>
            <div>
                Tel：	+ 86 138 1842 4741
            </div>

            <div>
                Email: Wilson.Pan@cushingconsult.com
            </div>
        </div>

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

}
