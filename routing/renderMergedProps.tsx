import React from 'react';

export default (Component: React.ComponentClass, ...rest: any[]) => {
  const finalProps = Object.assign({}, ...rest);
  return <Component {...finalProps} />;
};
