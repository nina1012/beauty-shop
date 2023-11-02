'use client';
import clsx from 'clsx';
import { forwardRef, useState } from 'react';

// eslint-disable-next-line react/display-name
const Checkbox = forwardRef((props, ref) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="w-full my-4 text-left">
      <label className="checkbox-box left-8 flex items-center !text-left text-[#666] !w-full !my-5 relative cursor-pointer">
        <input
          type="checkbox"
          ref={ref}
          className="absolute opacity-0 h-0 w-0"
          onChange={() => setIsChecked(!isChecked)}
        />
        <span
          className={clsx(
            'absolute checkmark -left-8 !w-4 !h-4 mr-5 border-[1px] border-[#eee] bg-white transition-colors',
            isChecked && '!bg-pink'
          )}
        ></span>
        Remember me
      </label>
    </div>
  );
});

export default Checkbox;
