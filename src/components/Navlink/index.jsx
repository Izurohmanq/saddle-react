import React from 'react';

function SNavLink({ action, children }) {
  return <Nav.Link onClick={action}>{children}</Nav.Link>;
}

export default SNavLink;