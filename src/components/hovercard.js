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

        const descs = texts.desc.map((i, index) => {
            return (<p style={{
                fontSize: "14px",
                fontWeight: "300",
                paddingBottom: "15px",
                paddingTop: "15px"
            }}>
                { i }
            </p>);
            
        });
        
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
                            {descs}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HoverCard
