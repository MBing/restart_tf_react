import React, { PureComponent} from 'react';

export default class Person extends PureComponent {
  render() {
    return (
      <div className="person">
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
