import { HTMLProps } from 'react';

export const ResumeButton = ({
  customClasses = '',
}: {
  customClasses?: HTMLProps<HTMLElement>['className'];
}) => {
  return (
    <button
      className={`bg-blend-color bg-[#667] hover:bg-[#778] text-white text-xl py-2 px-6 rounded-md bg-right-top bg-gradient-to-tr from-[#4158d0] to-[#c850c0] duration-150 ${customClasses}`}
    >
      Resume
    </button>
  );
};
