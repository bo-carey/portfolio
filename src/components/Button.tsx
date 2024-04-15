import { useState, useEffect } from 'react';

type ButtonProps = JSX.IntrinsicElements['button'] & {
  accent?: 'primary' | 'secondary';
  className?: string;
};

export function Button({ accent = 'primary', className, children, ...props }: ButtonProps) {
  const [buttonStyle, setButtonStyle] = useState('');
  useEffect(() => {
    const staticStyles = 'text-sm font-bold duration-300 p-4 w-36 rounded-[2rem] ';
    if (accent === 'primary') {
      setButtonStyle(
        staticStyles +
          `hover:bg-neutral-700 hover:text-white text-neutral-700 bg-none border-2 border-neutral-700`
      );
    } else {
      setButtonStyle(staticStyles + `hover:bg-neutral-900 text-white bg-neutral-700`);
    }
  }, [accent]);
  return (
    <button className={` ${buttonStyle} ${className}`} {...props}>
      {children}
    </button>
  );
}
