import React, { Component } from 'react'

export default class ProgressBar extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let P = 0
    const createProgress = setInterval(() => {
      let maxP = this.props.percentage;
    //   if ( P <= maxP ) {
    //     P++ ;
    //     document.querySelector(`.percentage-${this.props.id}`).style.width = `${P}%`;
    //   }else if (document.querySelector(`.percentage-${this.props.id}`) !== undefined || document.querySelector(`.percentage-${this.props.id}`) !== null){
    //     clearInterval(createProgress)
    //   }
    // },10)
      if ( P >= maxP ) {
        clearInterval(createProgress)
      }
      if(document.querySelector(`.percentage-${this.props.id}`) === undefined || document.querySelector(`.percentage-${this.props.id}`) === null) {
        clearInterval(createProgress)
      }
      else {
        P++ ;
        document.querySelector(`.percentage-${this.props.id}`).style.width = `${P}%`;
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
