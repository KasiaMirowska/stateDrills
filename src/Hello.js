import React from 'react';


export default class Hello extends React.Component {
   
    state = {
            who:'World',
        }
        
    handleClick(word){
       this.setState({
           who: word,
       })
    }    
    render(){
        return (
            <div>
                <h1>Hello {this.state.who}!</h1>
                <button id='1'onClick={() => this.handleClick('Friend')}>Friend</button>
                <button id='2'onClick={() => this.handleClick('Everyone')}>Everyone</button>
                <button id='3'onClick={() => this.handleClick('React')}>React</button>
            </div>
        )
    }
}