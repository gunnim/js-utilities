import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props {
	portalId?: string;
	elementType?: string;
}

/**
 * Simple portal as demonstrated by Dan Abromovo
 * http://stackoverflow.com/a/28823590/5663961
 */
class Portal extends React.Component<Props, void> {
  _portalElement = null;

  componentDidMount() {
    var portal = this.props.portalId && 
						document.getElementById(this.props.portalId);

		// Create and append to body
    if (!portal) {
      var portal = document.createElement(this.props.elementType || 'div');
      portal.id = this.props.portalId;
      document.body.appendChild(portal);
    }

    this._portalElement = portal;
    this.componentDidUpdate();
  }

  componentWillUnmount() {
    document.body.removeChild(this._portalElement);
  }

  componentDidUpdate() {
    ReactDOM.render(<div>{this.props.children}</div>, this._portalElement);
  }

  render() { return null; }
}

export default Portal