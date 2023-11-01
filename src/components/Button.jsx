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
    'flex justify-center px-16 py-1.5 text-sm leading-10 font-semibold font-lato transition h-[60px] uppercase',
    invert
      ? 'bg-lightPurple text-primaryDarkBlue hover:bg-[#222] hover:border-[#222] hover:text-white border-[1px] border-[#eee]'
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
