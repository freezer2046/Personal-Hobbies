import React, { Component } from 'react';
import './checkbox.css'

export class Checkbox extends Component {
    state = {
        Checkbox: {
            count: 0,
            value: [],
        },
        index: 0,
        text: ['A', 'B', 'C', 'D', 'E'],
        difference: [],
        newDate: 0,
        dateNow: Date.now(),
    }

    validatetest = (e) => {
        const newCount = this.state.Checkbox.count;
        const newValue = e.target.value;
        if (e.target.checked) {
            this.setState({
                Checkbox: {
                    count: newCount + 1,
                    value: [...this.state.Checkbox.value, newValue],
                }
            });
        }
    }

    Next = () => {
        this.setState({
            index: (this.state.index + 1) % this.state.text.length,
        })
    }

    Prev = () => {
        if (this.state.index > 0) {
            this.setState({
                index: this.state.index - 1,
            })
        } else {
            this.setState({
                index: 4,
            })
        }
    }

    handlechange = (e) => {
        const TimeInputValue = new Date(e.target.value);
        this.setState({
            newDate: TimeInputValue.getTime(),
        })
    }

    calculate = () => {
        const now = this.state.dateNow;
        const displayTime = this.state.newDate;
        var year = (now - displayTime) / (1000 * 60 * 60 * 24 * 365);
        var month = (year - Math.floor(year)) * 12;
        var day = (month - Math.floor(month)) * 30;
        var hour = (day - Math.floor(day)) * 24;
        console.log(Math.floor(year), Math.floor(month), Math.floor(day), Math.floor(hour));
        this.setState({
            difference: [Math.floor(year), Math.floor(month), Math.floor(day), Math.floor(hour)],
        })
    }

    render() {

        setTimeout(this.Next, 5000);

        return (
            <div>
                <div>
                    {this.state.text[this.state.index]}<br />
                    <button onClick={this.Prev}>Prev</button>
                    <button onClick={this.Next}>Next</button>
                </div>
                <input type='checkbox' value='red' onChange={(e, value) => this.validatetest(e, value)} />red<br />
                <input type='checkbox' value='green' onChange={(e, value) => this.validatetest(e, value)} />green<br />
                <input type='checkbox' value='blue' onChange={(e, value) => this.validatetest(e, value)} />blue<br />
                <p>There are {this.state.Checkbox.count} boxes checked.</p>
                <p>{this.state.Checkbox.count === 0 ? null : <span>Checked value are {this.state.Checkbox.value}</span>}</p>
                <div>
                    <label>Start Date:</label>
                    <input type='date' id='start' defaultValue={this.state.Value} min='2015-01-01' max='2020-12-31' onChange={this.handlechange} />
                    <button onClick={this.calculate}>Calculate</button><br />
                    <span>The difference is {this.state.difference.length === 0 ? 'Nothing' : this.state.difference[0] + ' years ' + this.state.difference[1] + ' month ' + this.state.difference[2] + ' days ' + this.state.difference[3] + ' hours.'}.</span>
                </div>
            </div>
        )
    }
}

export default Checkbox;
