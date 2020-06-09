import React from 'react'

import "./hovercard.css";

class HoverCard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
    }

    componentDidMount() {
    }

    render() {
        const { texts } = this.props;

        return (
            <div className="hovercard-container">
                <div style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <div className="hovercard">
                        <div ></div>
                        <div>
                            <h2>{texts.title}</h2>
                            <p style={{
                                fontSize: "14px",
                                fontWeight: "300",
                                paddingBottom: "15px",
                                paddingTop: "15px"
                            }}>
                                {texts.desc}
                            </p>

                            <a>
                                ...
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HoverCard
