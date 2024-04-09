import { HTMLProps } from 'react';

export const Spinner = ({ className }: { className: HTMLProps<HTMLElement>['className'] }) => {
  return (
    <svg className={`h-6 w-6 animate-spin ${className}`} viewBox="0 0 100 100">
      <circle
        fill="none"
        stroke-width="10"
        className="stroke-current opacity-40"
        cx="50"
        cy="50"
        r="40"
      />
      <circle
        fill="none"
        stroke-width="10"
        className="stroke-current"
        stroke-dasharray="250"
        stroke-dashoffset="210"
        cx="50"
        cy="50"
        r="40"
      />
    </svg>
  );
};
