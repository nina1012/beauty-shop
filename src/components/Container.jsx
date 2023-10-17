import clsx from 'clsx';

export function Container({
  as: Component = 'div',
  className,
  children,
}) {
  return (
    <Component
      className={clsx(
        'wrapper w-full px-4 md:px-5 lg:max-w-[1220px]',
        className
      )}
    >
      {/* <div className="mx-auto max-w-2xl lg:max-w-none"> */}
      {children}
      {/* </div> */}
    </Component>
  );
}
