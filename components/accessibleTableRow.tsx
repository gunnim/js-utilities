import React from 'react';

const enterKeyCode = 13;

interface Props {
  children: React.ReactNode;
  onActivate: Function;

  [index: string]: any;
}

export default React.forwardRef(
  function AccessibleTableRow({
    children,
    onActivate,
    ...rest
  }: Props,
  ref: React.Ref<HTMLTableRowElement>,
) {

    return (
      <tr
        ref={ref}
        tabIndex={0}
        onClick={() => onActivate()}
        onKeyDown={ev => ev.keyCode === enterKeyCode && onActivate()}
        {...rest}
      >
        {children}
      </tr>
    );
  });
