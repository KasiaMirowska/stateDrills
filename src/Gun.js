import React from 'react';

export default class Gun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8,
    }
    constructor(props){
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false,
        }
    }

    handleClick() {
        this.setState({
            spinningTheChamber: true,
        });
       
        setTimeout(() => {
            const newChamber = Math.ceil(Math.random() * 8);
            return this.setState({
                spinningTheChamber: false,
                chamber: newChamber
            });
        }, 2000);
    }

    render() {
        let display;
        if (this.state.spinningTheChamber) {
            display = 'Spinning the chamber and pulling the trigger!';
        }
        else if (this.state.chamber === this.props.bulletInChamber){
            display = 'BANG!!!!';
        }
        else {
            display = " you're safe!";
        }

        return (
            <div>  
                <h1>{display}</h1>
                {!this.state.spinningTheChamber && <button onClick={() => this.handleClick()}>Pull the trigger!</button>}
            </div>
        );
    }
}