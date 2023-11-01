import clsx from 'clsx';

export function TableRowHead({ headings, className }) {
  return (
    <div
      className={clsx(
        'table-row-head capitalize text-[#222] pb-2 mb-8 border-b-2 border-[#222] hidden md:flex justify-between md:items-center text-xl leading-[120%]',
        className
      )}
    >
      {headings?.map((heading, idx) => (
        <div key={idx} className="col pr-10">
          {heading}
        </div>
      ))}
    </div>
  );
}
