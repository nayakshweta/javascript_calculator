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
        this.handleNum = this.handleNum.bind(this);
        this.handleOp = this.handleOp.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);
    }

    handleClear() {
        this.setState({
            input: [],
            lastEntryOrOutput: 0
        });
    }


    handleNum(val) {
        var lastEntry = this.state.input.slice(-1)[0];
        var newInput;
        var newLastNum;
        if(lastEntry == undefined) {
            //if this is the first entry to the empty input array
            newLastNum = val;
            newInput = [...this.state.input, newLastNum];
        }
        else if(lastEntry == 0 && val == 0) {
            //don't allow number to start with multiple zeroes
            newLastNum = lastEntry;
            newInput = this.state.input;
        }
        else if(lastEntry.match(/^(\d*\.)?(\d+)?$/)) { 
            // if last entry in the input array is already a number (integer or decimal), we concat the new digit to it
            newLastNum = this.state.input.slice(-1)[0].concat(val);
            newInput = [...this.state.input.slice(0, -1), newLastNum];
        }
        else if(lastEntry.match(/[+/*-]/)){ 
            // if last entry was an operand we push new entry to the input array
            newLastNum = val;
            newInput = [...this.state.input, newLastNum];
        }
        this.setState({
            input: newInput,
            lastEntryOrOutput: newLastNum
        });
    }

    handleOp(val) {
        var lastEntry = this.state.input.slice(-1)[0];
        var newInput;
        var newLastOp;
        if(lastEntry == undefined) {
            //if this is the first entry to the empty input array
            newLastOp = val;
            newInput = [...this.state.input, newLastOp];
        }
        else if(lastEntry.match(/^(\d*\.)?(\d+)?$/)) { 
            // if last entry in the input array is a number ( integer or decimal ), we push a new operand to the input array
            newLastOp = val;
            newInput = [...this.state.input, newLastOp];
        }
        else if(lastEntry.match(/[+/*-]/)){ 
            // if last entry was an operand we replace it with the new operand, except if the new operand is '-'
            if(val == '-') {
                newLastOp = val;
                newInput = [...this.state.input, newLastOp];
            }
            if(lastEntry == '-'){
                // however, if the last entry was already a -, we need to check if the second last entry was also an operand.
                // If so, replace them both with the new operand.
                var secondLastEntry = this.state.input.slice(-2, -1)[0];
                if(secondLastEntry.match(/[+/*-]/)){
                    newLastOp = val;
                    newInput = [...this.state.input.slice(0, -2), newLastOp]
                }
            }
            else if(val.match(/[+/*]/)){
                newLastOp = val;
                newInput = [...this.state.input.slice(0, -1), newLastOp];
            }
        }
        this.setState({
            input: newInput,
            lastEntryOrOutput: newLastOp
        });
    }

    handleEquals() {
        this.setState({
            lastEntryOrOutput: eval(this.state.input.join(""))
        });
    }


    handleDecimal() {
        var lastEntry = this.state.input.slice(-1)[0];
        var newInput;
        var newLastNum;

        if(lastEntry == undefined) {
            //if this is the first entry to the empty input array
            newLastNum = "0.";
            newInput = [...this.state.input, newLastNum];
        }
        else if(lastEntry.match(/^(\d*\.)(\d+)?$/)) {
            // if last entry already contains a decimal, don't allow adding another decimal
            newLastNum = lastEntry;
            newInput = this.state.input;
        }
        else if(lastEntry.match(/^[0-9]+$/)) { 
            // if last entry in the input array is an integer, we concat the new decimal to it
            newLastNum = this.state.input.slice(-1)[0].concat(".");
            newInput = [...this.state.input.slice(0, -1), newLastNum];
        }
        else if(lastEntry.match(/[+/*-]/)){ 
            // if last entry was an operand we push new entry to the input array
            newLastNum = "0.";
            newInput = [...this.state.input, newLastNum];
        }
        this.setState({
            input: newInput,
            lastEntryOrOutput: newLastNum
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
                        handle={this.handleNum}
                    />
                    ))}
                </div>
                <div id="operands">
                    {this.operands.map(item => (
                    <Button 
                        id={item.id}
                        val={item.op}
                        handle={this.handleOp}
                    />
                    ))}
                </div>
                <div>
                    <button id="decimal" onClick={this.handleDecimal}>.</button>
                </div>
                <div>
                    <button id="equals" onClick={this.handleEquals}>=</button>
                </div>
            </div>
        );
    }
}


export default Calculator;