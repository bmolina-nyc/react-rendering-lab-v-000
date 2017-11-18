import React from 'react';

class Circle extends React.Component {

shouldComponentUpdate(nextProps){
  //must be a boolean
  return this.props.color !== nextProps.color;
  // flip flops except for {color: "yellow"}
  // console.log(nextState) // this is null
}

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);

    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

export default Circle;
