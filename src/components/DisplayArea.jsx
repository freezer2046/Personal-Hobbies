import React, { Component } from 'react';

export class DisplayArea extends Component {

    render() {
        return (
            <div className="theList">
                <ul>
                    {this.props.Items.map((e, i) => {
                        return <li key={i} onClick={() => this.props.deleteItem(i)}>{e}</li>
                    })}

                </ul>
            </div>
        )
    }
}

export default DisplayArea;