import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: React.ReactNode;
  portalTarget?: HTMLElement;
}

const Portal = ({ children, portalTarget, }: Props) =>
  portalTarget 
  ? ReactDOM.createPortal(
    children,
    portalTarget,
  )
  : <></>
  ;

export default Portal
