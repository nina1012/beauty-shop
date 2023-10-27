import DetailBlock from '@/components/DetailBlock';
import { TopCategories } from '@/components/TopCategories';
import topCat1 from '@/images/top-categories-img1.jpg';
import topCat2 from '@/images/top-categories-img2.jpg';
import topCat3 from '@/images/top-categories-img3.jpg';
import topCat4 from '@/images/top-categories-img4.jpeg';
import topCat5 from '@/images/top-categories-img5.jpeg';
import topCat6 from '@/images/top-categories-img6.jpeg';

export const metadata = {
  title: 'Categories | Beauty Shop',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
};

export default async function Categories() {
  const categories = [
    { img: topCat1, categoryName: 'SPA' },
    { img: topCat2, categoryName: 'Nails' },
    { img: topCat3, categoryName: 'Perfume' },
    { img: topCat4, categoryName: 'Make up' },
    { img: topCat5, categoryName: 'Skin' },
    { img: topCat6, categoryName: 'Hair' },
  ];
  return (
    <>
      <DetailBlock />
      <TopCategories categories={categories} />
    </>
  );
}
