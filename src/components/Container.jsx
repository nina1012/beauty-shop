import clsx from 'clsx';

export function Container({
  as: Component = 'div',
  className,
  children,
}) {
  return (
    <Component
      className={clsx(
        'mx-auto min-w-[320px] w-full max-w-7xl',
        className
      )}
    >
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {children}
      </div>
    </Component>
  );
}
