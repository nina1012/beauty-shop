'use client';
import { Disclosure } from '@headlessui/react';
import decor from '@/images/main-text-decor.png';
import clsx from 'clsx';

export function FAQDisclosure() {
  const faq = [
    {
      question:
        'How long does it take for home delivery?',
      answer:
        ' Velit sit et dolore consequat ex elit ea. Proident duis nostrud id id. In sint commodo sint adipisicing ullamco magna voluptate voluptate nostrud reprehenderit magna veniam in. Consectetur exercitation proident aliqua duis nulla labore. Culpa proident qui ullamco id velit. Est anim est non qui veniam adipisicing non adipisicing deserunt incididunt laborum do esse do.Amet ipsum quis ipsum proident est elit proident qui in. Nulla mollit nostrud consectetur eiusmod occaecat incididunt excepteur occaecat velit. Non ipsum nostrud dolore est ut irure tempor ea velit id sit. Laboris Lorem ipsum et reprehenderit mollit ex aute officia sint et. Occaecat est occaecat commodo ea sunt pariatur.',
    },
    {
      question: 'Should I read labels?',
      answer:
        ' Velit sit et dolore consequat ex elit ea. Proident duis nostrud id id. In sint commodo sint adipisicing ullamco magna voluptate voluptate nostrud reprehenderit magna veniam in. Consectetur exercitation proident aliqua duis nulla labore. Culpa proident qui ullamco id velit. Est anim est non qui veniam adipisicing non adipisicing deserunt incididunt laborum do esse do.Amet ipsum quis ipsum proident est elit proident qui in. Nulla mollit nostrud consectetur eiusmod occaecat incididunt excepteur occaecat velit. Non ipsum nostrud dolore est ut irure tempor ea velit id sit. Laboris Lorem ipsum et reprehenderit mollit ex aute officia sint et. Occaecat est occaecat commodo ea sunt pariatur.',
    },
    {
      question: 'How do anti-wrinkle treatments work?',
      answer:
        ' Velit sit et dolore consequat ex elit ea. Proident duis nostrud id id. In sint commodo sint adipisicing ullamco magna voluptate voluptate nostrud reprehenderit magna veniam in. Consectetur exercitation proident aliqua duis nulla labore. Culpa proident qui ullamco id velit. Est anim est non qui veniam adipisicing non adipisicing deserunt incididunt laborum do esse do.Amet ipsum quis ipsum proident est elit proident qui in. Nulla mollit nostrud consectetur eiusmod occaecat incididunt excepteur occaecat velit. Non ipsum nostrud dolore est ut irure tempor ea velit id sit. Laboris Lorem ipsum et reprehenderit mollit ex aute officia sint et. Occaecat est occaecat commodo ea sunt pariatur.',
    },
    {
      question: 'How do anti-wrinkle treatments work?',
      answer:
        ' Velit sit et dolore consequat ex elit ea. Proident duis nostrud id id. In sint commodo sint adipisicing ullamco magna voluptate voluptate nostrud reprehenderit magna veniam in. Consectetur exercitation proident aliqua duis nulla labore. Culpa proident qui ullamco id velit. Est anim est non qui veniam adipisicing non adipisicing deserunt incididunt laborum do esse do.Amet ipsum quis ipsum proident est elit proident qui in. Nulla mollit nostrud consectetur eiusmod occaecat incididunt excepteur occaecat velit. Non ipsum nostrud dolore est ut irure tempor ea velit id sit. Laboris Lorem ipsum et reprehenderit mollit ex aute officia sint et. Occaecat est occaecat commodo ea sunt pariatur.',
    },
    {
      question: 'Why are animal fats in cosmetics?',
      answer:
        ' Velit sit et dolore consequat ex elit ea. Proident duis nostrud id id. In sint commodo sint adipisicing ullamco magna voluptate voluptate nostrud reprehenderit magna veniam in. Consectetur exercitation proident aliqua duis nulla labore. Culpa proident qui ullamco id velit. Est anim est non qui veniam adipisicing non adipisicing deserunt incididunt laborum do esse do.Amet ipsum quis ipsum proident est elit proident qui in. Nulla mollit nostrud consectetur eiusmod occaecat incididunt excepteur occaecat velit. Non ipsum nostrud dolore est ut irure tempor ea velit id sit. Laboris Lorem ipsum et reprehenderit mollit ex aute officia sint et. Occaecat est occaecat commodo ea sunt pariatur.',
    },
    {
      question: 'What are Smart Proteins?',
      answer:
        ' Velit sit et dolore consequat ex elit ea. Proident duis nostrud id id. In sint commodo sint adipisicing ullamco magna voluptate voluptate nostrud reprehenderit magna veniam in. Consectetur exercitation proident aliqua duis nulla labore. Culpa proident qui ullamco id velit. Est anim est non qui veniam adipisicing non adipisicing deserunt incididunt laborum do esse do.Amet ipsum quis ipsum proident est elit proident qui in. Nulla mollit nostrud consectetur eiusmod occaecat incididunt excepteur occaecat velit. Non ipsum nostrud dolore est ut irure tempor ea velit id sit. Laboris Lorem ipsum et reprehenderit mollit ex aute officia sint et. Occaecat est occaecat commodo ea sunt pariatur.',
    },
    {
      question:
        'What is the difference between pharmacy cosmetics and mass-market?',
      answer:
        ' Velit sit et dolore consequat ex elit ea. Proident duis nostrud id id. In sint commodo sint adipisicing ullamco magna voluptate voluptate nostrud reprehenderit magna veniam in. Consectetur exercitation proident aliqua duis nulla labore. Culpa proident qui ullamco id velit. Est anim est non qui veniam adipisicing non adipisicing deserunt incididunt laborum do esse do.Amet ipsum quis ipsum proident est elit proident qui in. Nulla mollit nostrud consectetur eiusmod occaecat incididunt excepteur occaecat velit. Non ipsum nostrud dolore est ut irure tempor ea velit id sit. Laboris Lorem ipsum et reprehenderit mollit ex aute officia sint et. Occaecat est occaecat commodo ea sunt pariatur.',
    },
    {
      question:
        'Should I pay attention to the number of components?',
      answer:
        ' Velit sit et dolore consequat ex elit ea. Proident duis nostrud id id. In sint commodo sint adipisicing ullamco magna voluptate voluptate nostrud reprehenderit magna veniam in. Consectetur exercitation proident aliqua duis nulla labore. Culpa proident qui ullamco id velit. Est anim est non qui veniam adipisicing non adipisicing deserunt incididunt laborum do esse do.Amet ipsum quis ipsum proident est elit proident qui in. Nulla mollit nostrud consectetur eiusmod occaecat incididunt excepteur occaecat velit. Non ipsum nostrud dolore est ut irure tempor ea velit id sit. Laboris Lorem ipsum et reprehenderit mollit ex aute officia sint et. Occaecat est occaecat commodo ea sunt pariatur.',
    },
    {
      question:
        'What is the difference between pharmacy cosmetics and mass-market?',
      answer:
        ' Velit sit et dolore consequat ex elit ea. Proident duis nostrud id id. In sint commodo sint adipisicing ullamco magna voluptate voluptate nostrud reprehenderit magna veniam in. Consectetur exercitation proident aliqua duis nulla labore. Culpa proident qui ullamco id velit. Est anim est non qui veniam adipisicing non adipisicing deserunt incididunt laborum do esse do.Amet ipsum quis ipsum proident est elit proident qui in. Nulla mollit nostrud consectetur eiusmod occaecat incididunt excepteur occaecat velit. Non ipsum nostrud dolore est ut irure tempor ea velit id sit. Laboris Lorem ipsum et reprehenderit mollit ex aute officia sint et. Occaecat est occaecat commodo ea sunt pariatur.',
    },
  ];
  return (
    <>
      {faq?.map((faq, idx) => (
        <Disclosure key={idx}>
          {({ open }) => (
            <div key={idx} className="mb-8">
              <Disclosure.Button
                className={clsx(
                  'py-2 relative text-base md:text-lg pb-4 w-full text-left before:absolute before:right-0 before:bottom-0 before:h-[1px] before:w-full before:bg-[#eee] transition-all',
                  open && 'text-pink'
                )}
              >
                <span
                  style={{
                    backgroundImage: `url(${decor?.src})`,
                  }}
                  className={clsx(
                    'disclosure-num w-10 text-center inline-block mr-4 md:mr-8 text-[#222] pt-[2px] bg-contain bg-no-repeat bg-center'
                  )}
                >
                  {idx + 1}
                </span>
                {faq.question}
                <span
                  className={clsx(
                    'btn w-10 h-10 absolute right-0 -bottom-5 z-[1] bg-lightPurple border-[1px] border-[#eee] rounded-full text-center text-sm origin-center before:absolute after:absolute before:w-2 after:w-[2px] before:h-[2px] after:h-2 before:bg-[#222] after:bg-[#222] before:top-1/2 after:top-1/2 before:left-1/2 after:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 after:-translate-x-1/2 after:-translate-y-1/2',
                    open &&
                      'after:w-0 after:h-0 !bg-lightBeige'
                  )}
                >
                  {' '}
                </span>
              </Disclosure.Button>
              <Disclosure.Panel
                className="text-[#666] text-sm pl-[55px] py-5 md:mt-12 md:px-28 md:pb-10 md:text-base md:leading-[170%]
      before:absolute before:right-0 before:bottom-0 before:h-[1px] before:w-full before:bg-[#eee]
      "
              >
                <p>{faq?.answer}</p>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </>
  );
}
