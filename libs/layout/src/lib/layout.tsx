import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LayoutProps {}

const StyledLayout = styled.div`
  color: pink;
`;

export function Layout(props: LayoutProps) {
  return (
    <StyledLayout>
      <h1>Welcome to layout!</h1>
    </StyledLayout>
  );
}

export default Layout;
