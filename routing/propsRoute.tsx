import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { Route } from 'react-router';

import renderMergedProps from './renderMergedProps';

const PropsRoute = ({ component, ...rest }: 
  ({ component: React.ComponentClass, [index: string ]: any })) => {
  return (
    <Route
      {...rest}
      render={routeProps => (
        <CSSTransition
          classNames="fade"
          timeout={{
            enter: 150,
            exit: 150,
          }}
          {...rest}>
          {renderMergedProps(component, routeProps, rest)}
        </CSSTransition>
      )}
    />
  );
};

PropsRoute.propTypes = {
  component: PropTypes.any,
};

export default PropsRoute;
