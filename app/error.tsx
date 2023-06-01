'use client';

import { FC, useEffect } from 'react';

import { EmptyState } from '@components/EmptyState';

interface ErrorSatateProps {
  error: Error;
}

const ErrorSatate: FC<ErrorSatateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title='Uh Oh!' subtitle='Something went wrong!' />;
};

export default ErrorSatate;
