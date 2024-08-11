import React from 'react';
class ImgOnClickArgument extends React.Component {
  constructor(props) {
    super(props);
  }
  onClick = (event) => {
    this.props.onClick(this.props.onClickArgument);
  }
  render() {
    return <img src={this.props.src} onClick={this.onClick} />;
  }
}
export default ImgOnClickArgument;