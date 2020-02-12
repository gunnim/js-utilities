import React from 'react';

const enterKeyCode = 13;

interface Props extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  onActivate: Function;
}

export default React.forwardRef(
  function AccessibleListElement({
    children,
    onActivate,
    ...rest
  }: Props,
    ref: React.Ref<HTMLLIElement>,
  ) {

    return (
      <li
        ref={ref}
        tabIndex={0}
        onClick={() => onActivate()}
        onKeyDown={ev => ev.keyCode === enterKeyCode && onActivate()}
        {...rest}
      >
        {children}
      </li>
    );
  });
