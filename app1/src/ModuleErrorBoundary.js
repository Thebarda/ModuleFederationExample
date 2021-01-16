import * as React from 'react';

class ModuleErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) { 
      return <h1>Module not found</h1>;
    }
    return this.props.children;
  }
}

export default ModuleErrorBoundary;