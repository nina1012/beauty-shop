import { Container } from '@/components/layout/Container';
import DetailBlock from '@/components/DetailBlock';
import InstaPhotos from '@/components/InstaPhotos';
import { Button } from '@/components/global/Button';
import { Trending } from '@/components/Trending';
import { TableCart } from '@/components/TableCart';
import { FadeIn } from '@/components/FadeIn';

function Wishlist() {
  return (
    <div className="wishlist pt-16 md:pt-28">
      <Container className="">
        {/* <div className="table-cart -mx-4 w-[calc(100%+30px)] overflow-x-scroll">
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
            {PRODUCT_DATA?.map(
              ({
                id,
                img,
                name,
                productNum,
                price,
                status,
              }) => (
                <div
                  key={id}
                  className="table-cart-row md:px-8 [&>*:first-of-type]:w-1/2 [&>*:first-of-type]:grid [&>*:first-of-type]:grid-cols-[110px,1fr] [&>*:first-of-type]:gap-x-4 flex justify-between items-center border-[1px] border-[#eee] mb-2 py-2 md:py-8"
                >
                  <div className="table-cart-col">
                    <Link
                      href="/product/id"
                      className="table-cart-img w-[110px] h-[110px] mr-8 inline-block align-top lg:min-w-[110px]"
                    >
                      <Image
                        src={img}
                        width={img.width}
                        height={img.height}
                        alt=""
                        className="!w-full !h-full object-cover"
                      />
                    </Link>
                    <div className="table-cart-info inline-block align-top mt-2">
                      <Link
                        href={`/product/${id}`}
                        className="leading-[115%] capitalize text-2xl text-[#222] hover:text-pink transition-colors"
                      >
                        <h5>
                          {name.length > 22
                            ? name.substring(0, 20) +
                              '...'
                            : name}
                        </h5>
                        <span className="product-num mt-3 text-xs text-[#666] leading-[170%]">
                          {productNum}
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="table-cart-col text-[#666]">
                    <span className="price">{price}</span>
                  </div>
                  <div className="table-cart-col text-[#666]">
                    <span
                      className={clsx(
                        'status uppercase',
                        status === 'in stock'
                          ? 'text-[#12a33b]'
                          : 'text-[#999] line-through'
                      )}
                    >
                      {status}
                    </span>
                  </div>

                  <div className="table-cart-col">
                    <Link
                      href={`/faq`}
                      className="flex gap-2 uppercase group items-center text-sm text-pink transition-all origin-center"
                    >
                      Buy now
                      <AiOutlineArrowRight className="group-hover:translate-x-1 transition-all" />
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div> */}
        <FadeIn>
          <TableCart />
          <div className="wishlist-buttons gap-4 flex flex-col md:flex-row w-full md:w-auto mt-16 [&>*]:ml-2">
            <Button invert={true}>Clear wishlist</Button>
            <Button>Go shopping</Button>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}

export default function WishlistPage() {
  return (
    <>
      <DetailBlock />
      <Wishlist />
      <Trending />
      <InstaPhotos />
    </>
  );
}
