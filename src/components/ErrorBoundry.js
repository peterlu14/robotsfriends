import React, { PureComponent } from "react";

class ErrorBoundry extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>That is not good.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
