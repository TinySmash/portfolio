import React, { Component } from 'react'

export default class ProgressBar extends Component {

  constructor(props) {
    super(props);
  } 

  componentDidMount() {
    let maxP = this.props.percentage;
    let P = 0
    const createProgress = setInterval(() => {
      P++ ;
     document.querySelector(`.percentage-${this.props.id}`).style.width = `${P}%`;
      if (P == maxP || document.querySelector(`.percentage-${this.props.id}`) == undefined) {
        clearInterval(createProgress)
      }

    },10)
  }

  render() {
    const {percentage, id} = this.props;
    
    return (
      <div className='w-5/6 h-6 absolute bottom-6 rounded-full bg-gray-800'>
        <div className={`Progress percentage-${id} h-full w-full absolute rounded-full`}>

        </div>
      </div>
    )
  }
}
