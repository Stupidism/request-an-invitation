import React from 'react';
import { render } from '@testing-library/react';

import FakeAuthApi from './fake-auth-api';

describe('FakeAuthApi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FakeAuthApi />);
    expect(baseElement).toBeTruthy();
  });
});
