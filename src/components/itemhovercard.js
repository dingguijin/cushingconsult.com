import React from 'react'

import "./itemhovercard.css";

class ItemHoverCard extends React.Component {

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
            <div className="item-hovercard-container">
                <div style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <div className="item-hovercard">
                        <div></div>
                        <div>
                            <p class="item-hovercard-title">{texts.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemHoverCard
