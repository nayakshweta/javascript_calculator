import React from 'react';

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
    }


    render() {
        return (
            <div>
            </div>
        );
    }
}


export default Calculator;