import React, { Component} from 'react';

export default class Person extends Component {
  constructor() {
    super();
    this.state = {
      highlight: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      highlight: !this.state.highlight,
    });
  }

  render() {
    const classes = `person ${this.state.highlight ? 'highlight' : ''}`;
    return (
      <div className={classes} onClick={this.onClick}>
        <div className="person-name">{this.props.name}</div>
        <img className="person-img" src={this.props.imageUrl} />
        <div className="person-job">
          {this.props.job}
        </div>
      </div>
    );
  }
}

Person.defaultProps = {
  imageUrl: 'http://www.gravatar.com/avatar/?d=identicon'
};
