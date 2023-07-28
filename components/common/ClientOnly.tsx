'use client';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const ClientOnly: React.FC<Props> = ({ children }) => {
  const [mounted, setMounted] = React.useState(false);

  // IF URL is /auth, then don't render the children
  const pathname = usePathname();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (pathname === '/auth/register' || pathname === '/auth/login') return null;

  return <>{children}</>;
};

export default ClientOnly;
