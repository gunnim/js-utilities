import React from 'react';
import { 
  Route,
  Redirect,
} from 'react-router';

interface RedirectProps { 
  from: string; 
  to: string; 
  status: number;
}

export const RedirectWithStatus = ({ 
  from, 
  to, 
  status 
}: RedirectProps) => (
  <Route render={({ staticContext }) => {
    // there is no `staticContext` on the client, so
    // we need to guard against that here
    if (staticContext)
      staticContext.statusCode = status
    return <Redirect from={from} to={to}/>
  }}/>
) 

export const Status = (props: any) => (
  <Route render={({ staticContext }) => {
    if (staticContext)
      staticContext.statusCode = props.code
    return props.children
  }}/>
)

export const NotFound = () => (
  <Status code={404}>
    <div>
      <h1>Sorry, can’t find that.</h1>
    </div>
  </Status>
)

interface SwitchProps {
  render: (args: any) => any;
  [index: string]: any;
}

export const SwitchWrapper = ({ render, ...rest }: SwitchProps) =>
  render(rest)
