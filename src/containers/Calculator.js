import React from 'react';
import Button from '../components/Button/Button';

class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            button: [
                { text: '1' },
                { text: '1' },
                { text: '1' },
                { text: '1' },
                { text: '1' },
                { text: '1' },
                { text: '1' },
                { text: '1' },
                { text: '1' },
                { text: '1' },
                { text: '1' },
                { text: '1' }
            ]
        }
    }
    onButtonClick = () => {

    }

    render() {
        return (
            <div>
                <table>
                    {this.state.button.map(text => {
                        <tr>
                            <td>
                            </td>
                        </tr>
                    })}
                </table>
                <table>
                    <tr>
                        <td className='button'><Button id='1' value='1' onClick={this.onButtonClick} /></td>
                        <td className='button'><Button id='2' value='2' onClick={this.onButtonClick} /></td>
                        <td className='button'><Button id='3' value='3' onClick={this.onButtonClick} /></td>
                    </tr>
                    <tr>
                        <td className='button'><Button id='4' value='4' onClick={this.onButtonClick} /></td>
                        <td className='button'><Button id='5' value='5' onClick={this.onButtonClick} /></td>
                        <td className='button'><Button id='6' value='6' onClick={this.onButtonClick} /></td>
                    </tr>
                    <tr>
                        <td className='button'><Button id='7' value='7' onClick={this.onButtonClick} /></td>
                        <td className='button'><Button id='8' value='8' onClick={this.onButtonClick} /></td>
                        <td className='button'><Button id='9' value='9' onClick={this.onButtonClick} /></td>
                    </tr>
                    <tr>
                        <td className='button'><Button id='+' value='+' onClick={this.onButtonClick} /></td>
                        <td className='button'><Button id='-' value='-' onClick={this.onButtonClick} /></td>
                        <td className='button'><Button id='*' value='*' onClick={this.onButtonClick} /></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Calculator;