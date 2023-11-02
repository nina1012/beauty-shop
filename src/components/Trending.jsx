import { ProductItems } from './product/ProductItems';
import { Section } from './layout/Section';

export function Trending() {
  const tabs = [
    'Make Up',
    'SPA',
    'Perfume',
    'Nails',
    'Skin care',
    'Hair care',
  ];
  return (
    <Section
      subheading="Cosmetics"
      heading="Trending Products"
    >
      <div className="section-content">
        <div className="section-top mb-5 md:mb-14 text-center text-darkGray">
          <span className="text-[40px] md:text-6xl text-pink"></span>
          <h2 className="text-[40px] md:text-5xl lg:text-6xl my-5"></h2>
        </div>
        <div className="trending-tabs text-gray-500 text-base w-full overflow-x-scroll">
          <ul className="tabs mb-10 w-full flex flex-wrap flex-col md:flex-row md:justify-center">
            {tabs?.map((tab) => (
              <li
                key={tab}
                className="text-center py-2 mx-4 bg-[#faf9ff] border-[1px] border-[#eee] first-of-type:bg-pink first-of-type:text-white hover:cursor-pointer md:py-1 md:px-8"
              >
                {tab}
              </li>
            ))}
          </ul>
          <ProductItems />
        </div>
      </div>
    </Section>
  );
}
