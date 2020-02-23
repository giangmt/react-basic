import React from 'react';
import ReactDOM from 'react-dom';

class UserComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: props.name
    }
  }

  render() {
    return (
      <div>Hello {this.state.name}!</div>　// React element. When ReactDOM rendering then this element --> HTML <div>
    );
  }
}

UserComponent.propTypes = {
  name: React.PropTypes.string,
};

UserComponent.defaultProps = {
  name: 'マイ　チュオン　ザン'
}

ReactDOM.render(<UserComponent/>, document.getElementById('app'));

/* Init Component
  1. Init class (inheritance from `React.Component`)
  2. Init default value for Props (`defaultProps`)
  3. Init default value for State in function `constructor`
  4. Call function `componentWillMount()`
  5. Call function `render()`
  6. Call function `componentDidMount()`
*/

/* When the State changes
  1. Update [state] value
  2. Call function `shouldComponentUpdate()`
  3. Call function `componentWillUpdate()` if Step 2. -> TRUE
  4. Call function `render()`
  5. Call function `componentDidUpdate()`
*/

/* When the Props changes
  1. Update [props] value
  2. Call function `componentWillReceiveProps()`
  3. Call function `shouldComponentUpdate()`
  4. Call function `componentWillUpdate()` if Step 3. -> TRUE
  5. Call function `render()`
  6. Call function `componentDidUpdate()`
*/

/* When Unmount Component
  1. Call function `componentWillUnmount()`
*/