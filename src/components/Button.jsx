import clsx from 'clsx';
import Link from 'next/link';

export function Button({
  invert,
  href,
  className,
  children,
  ...props
}) {
  className = clsx(
    className,
    'inline-flex px-16 py-1.5 text-sm leading-10 font-semibold transition h-[60px] uppercase',
    invert
      ? 'bg-white text-primaryDarkBlue hover:bg-neutral-200'
      : 'bg-darkGray text-white hover:bg-[#545454]'
  );

  let inner = (
    <span className="relative top-px">{children}</span>
  );

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={className} {...props}>
      {inner}
    </button>
  );
}
