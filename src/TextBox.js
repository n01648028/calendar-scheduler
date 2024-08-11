import React from 'react';
class TextBox extends React.Component {
  constructor(props) {
    super(props);
  }
  onChange = (event) => {
    this.props.onChange(event, this.props.onChangeArgument);
  }
  render() {
    return <input style={{backgroundColor:this.props.backgroundColor}} type="text" onChange={this.onChange} value={this.props.value} />;
  }
}
export default TextBox;