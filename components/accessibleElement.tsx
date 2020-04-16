import React from 'react';

const enterKeyCode = 13;

interface Props {
  children: React.ReactNode;
  onActivate: Function;
  renderTag?: React.ReactType,

  [index: string]: any;
}

export default React.forwardRef(
  function AccessibleElement({
    children,
    onActivate,
    renderTag,
    ...rest
  }: Props,
    ref: React.Ref<HTMLElement>,
  ) {

    return React.createElement(renderTag || 'div', {
      ref,
      tabIndex: 0,
      onClick: onActivate,
      onKeyDown: (ev: React.KeyboardEvent) => ev.keyCode === enterKeyCode && onActivate(),
      ...rest,
    },
      children,
    );
  });
