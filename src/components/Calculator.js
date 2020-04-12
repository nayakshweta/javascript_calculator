import React from 'react';
import Button from './Button';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            input: [],
            lastEntryOrOutput: '0'
        };

        this.numbers = [
            {
                val: '1',
                id: 'one'
            },
            {
                val: '2',
                id: 'two'
            },
            {
                val: '3',
                id: 'three'
            },
            {
                val: '4',
                id: 'four'
            },
            {
                val: '5',
                id: 'five'
            },
            {
                val: '6',
                id: 'six'
            },
            {
                val: '7',
                id: 'seven'
            },
            {
                val: '8',
                id: 'eight'
            },  
            {
                val: '9',
                id: 'nine'
            },
            {
                val: '0',
                id: 'zero'
            }
        ];

        this.operands = [
            {
            op: '+',
            id: 'add'
            },
            {
            op: '-',
            id: 'subtract'
            },
            {
            op: '*',
            id: 'multiply'
            },
            {
            op: '/',
            id: 'divide'
            }
        ];
        
        this.handleClear = this.handleClear.bind(this);
    }

    handleClear() {
        this.setState({
            input: [],
            lastEntryOrOutput: 0
        });
    }

    render() {
        return (
            <div>
                <h3>Input: {this.state.input.join("")}</h3>
                <h2 id="display">{this.state.lastEntryOrOutput}</h2>
                <button id="clear" onClick={this.handleClear}>AC</button>
                <br />
                <br />
                <div id="numbers">
                    {this.numbers.map(item => (
                    <Button 
                        id={item.id}
                        val={item.val}
                    />
                    ))}
                </div>
                <div id="operands">
                    {this.operands.map(item => (
                    <Button 
                        id={item.id}
                        val={item.op}
                    />
                    ))}
                </div>
                <div>
                    <button id="decimal">.</button>
                </div>
                <div>
                    <button id="equals">=</button>
                </div>
            </div>
        );
    }
}


export default Calculator;