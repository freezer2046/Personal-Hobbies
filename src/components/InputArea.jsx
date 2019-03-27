import React, { Component } from 'react'

export class InputArea extends Component {

    componentDidUpdate() {
        this.props.inputElement.current.focus();
    }
    render() {
        return (
            <div className='todoListMain'>
                <div className='header'>
                    <form onSubmit={this.props.AddItem}>
                        <input
                            ref={this.props.inputElement}
                            type="text"
                            value={this.props.value}
                            onChange={this.props.handleInput}
                            placeholder='Tasks'
                        />
                        <button type='submit'>Submit</button>
                    </form>
                </div>

            </div>

        )
    }
}
export default InputArea;