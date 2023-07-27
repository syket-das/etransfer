'use client';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const ClientOnly: React.FC<Props> = ({ children }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
};

export default ClientOnly;
