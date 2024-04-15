import React from 'react';

export function Tag({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`px-2 py-1 bg-gray-200 rounded-md text-sm ${className}`}>{children}</div>;
}
