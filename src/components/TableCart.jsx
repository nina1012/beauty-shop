import clsx from 'clsx';

function TableRowHead({ headings, className }) {
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

function TableRow({ children }) {
  return (
    <div className="table-cart-row md:px-8 [&>*:first-of-type]:w-1/2 [&>*:first-of-type]:grid [&>*:first-of-type]:grid-cols-[110px,1fr] [&>*:first-of-type]:gap-x-4 flex justify-between items-center border-[1px] border-[#eee] mb-2 py-2 md:py-8">
      {children}
    </div>
  );
}

export function TableCart({ products }) {
  return (
    <div className="table-cart -mx-4 w-[calc(100%+30px)] overflow-x-scroll">
      <div className="table-cart-box min-w-[790px] md:min-w-[900px]">
        <TableRowHead
          className="!flex [&>*:first-of-type]:w-1/2 [&>*:first-of-type]:grid [&>*:first-of-type]:grid-cols-[110px,1fr] [&>*:first-of-type]:gap-x-4"
          headings={[
            'product',
            'price',
            'status',
            'add to cart',
          ]}
        />

        {products?.map(
          ({
            id,
            img,
            name,
            productNum,
            price,
            status,
          }) => (
            <TableRow key={id}></TableRow>
          )
        )}
      </div>
    </div>
  );
}
