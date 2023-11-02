import clsx from 'clsx';
import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const InputField = forwardRef((props, ref) => {
  const {
    type = 'text' | 'email' | 'password',
    label,
    error,
    name,
    className,
    ...inputProps
  } = props;

  return (
    <div
      className={clsx(
        className,
        'flex w-full mb-1  md:w-full h-16  md:mb-0'
      )}
    >
      <input
        ref={ref}
        className="overflow-hidden  w-full text-sm px-6 py-3 "
        type={type}
        placeholder={label}
        error={error}
        name={label.toLowerCase()}
        {...inputProps}
      />
    </div>
  );
});

export default InputField;
