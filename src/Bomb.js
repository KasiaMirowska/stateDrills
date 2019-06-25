import React from 'react';
import './Bomb.css';

class Bomb extends React.Component{
  state = {
    count: 0,
  }
  
  myInterval = null;
  
  
  componentDidMount() {
    console.log('mounted')
    this.myInterval = setInterval(() => {
     const newCount = this.state.count + 1;
     this.setState({
       count: newCount,
     })
    }, 1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
  
  
  render(){

    let word;
    if(this.state.count >= 8) {
      word = 'Boom';
      clearInterval(this.myInterval);
    } else if(this.state.count % 2 !== 0){
      word = 'tock';
    } else if (this.state.count % 2 === 0){
      word = 'tick';
    }
    return (
      <div className="Bomb">
       <p>{word}</p> 
      </div>
    );
  }

  
}

export default Bomb;
