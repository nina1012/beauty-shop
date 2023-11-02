import { Container } from './layout/Container';

export function InfoBoxes({ details }) {
  return (
    <Container className="relative top-0 !md:px-0">
      <div className="detail-block-items mt-8 md:-mt-12 flex flex-col flex-wrap z-[1] relative justify-between md:gap-2 md:flex-row -md:mx-2 ">
        {details?.map(({ icon, info }) => (
          <div
            key={info}
            className="detail-block-item w-full mt-0 !mx-auto mb-3 max-w-[320px] md:max-w-[calc(33.3%-8px)] flex items-center justify-between p-4 bg-lightPurple border-[1px] border-[#eee] "
          >
            <div className="detail-block-icon flex text-pink items-center relative justify-center w-14 h-12 mr-6 text-3xl">
              {icon}
              <div></div>
            </div>
            <div className="detail-block-info text-[#666]">
              {info}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
