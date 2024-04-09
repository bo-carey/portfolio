import { HTMLProps, useRef, useState } from 'react';
import ReCaptcha from 'react-google-recaptcha';

export const ResumeButton = ({
  className: customClasses = '',
}: {
  className?: HTMLProps<HTMLElement>['className'];
}) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const recaptchaRef = useRef<ReCaptcha>(null);

  const handleRecaptchaChange = () => {
    const recaptchaValue = recaptchaRef.current?.getValue();
    if (recaptchaValue) {
      window.open(process.env.RESUME_LINK || '');
    }
    setIsVerifying(false);
  };

  return (
    <>
      <button
        className={`bg-blend-color bg-[#667] hover:bg-[#778] text-white text-xl py-2 px-6 rounded-md bg-right-top bg-gradient-to-tr from-[#4158d0] to-[#c850c0] duration-150 ${customClasses}`}
        onClick={() => setIsVerifying(true)}
      >
        Resume
      </button>
      {isVerifying && (
        <div className="w-screen bg-black bg-opacity-20 h-full absolute top-0 left-0 flex justify-center items-center">
          <ReCaptcha
            ref={recaptchaRef}
            sitekey={process.env.GOOGLE_SITE_KEY || ''}
            onChange={handleRecaptchaChange}
          />
        </div>
      )}
    </>
  );
};
