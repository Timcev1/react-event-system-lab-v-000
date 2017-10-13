// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component(
  onFocus = () => console.log('Good!'),
  onBlur = () => console.log(`Hey! Eyes on me!`),
  render(){
    return(
    <button onFocus={this.onFocus} onBlue={this.onBlur}>
    </button>
    )
  }
)

export default EyesOnMe;
