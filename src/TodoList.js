import React, { Component } from 'react';
import './App.css';
import DisplayArea from './components/DisplayArea';
import InputArea from './components/InputArea';


export class TodoList extends Component {
    inputElement = React.createRef();
    state = {
        currentItem: {
            text: '',
            key: ''
        },
        Items: [],
    }

    handleInput = (e) => {
        const value = e.target.value;
        const keys = Date.now();
        this.setState({
            currentItem: {
                text: value,
                key: keys,
            }
        })
    }

    addItem = (e) => {
        e.preventDefault();
        const newItem = this.state.currentItem.text;
        if (this.state.currentItem.text !== '') {
            this.setState({
                Items: [...this.state.Items, newItem],
                currentItem: {
                    text: '',
                    keys: '',
                }
            })
        } else {
            alert('Please input value!')
        }
    }

    deleteItem = (i) => {
        const deletedItems = this.state.Items.splice(i, 1);
        this.setState({
            deletedItems,
        })
    }


    render() {
        return (
            <div>
                <InputArea
                    handleInput={this.handleInput}
                    AddItem={this.addItem}
                    value={this.state.currentItem.text}
                    inputElement={this.inputElement}
                />
                <DisplayArea
                    Items={this.state.Items}
                    deleteItem={this.deleteItem} />
            </div>
        )
    }
}

export default TodoList;