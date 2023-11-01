'use client';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { TableRowHead } from './TableRowHead';

function TabOrder({ tab }) {
  return (
    <Tab
      key={tab}
      className={clsx(
        'ui-selected:bg-pink ui-selected:text-white mb-2 w-full md:mr-2 md:w-auto text-left list-none bg-lightPurple border-[1px] border-[#eee] px-8 py-2 hover:cursor-pointer hover:opacity-80 text-[#666]'
      )}
    >
      {tab}
    </Tab>
  );
}

function ProfileOrders() {
  const orders = [
    {
      date: 'Aug 17, 2020',
      address:
        '27 Division St, New York, NY 10002, US. St, New York, NY 10002, USA',
      amount: '$618.80',
      status: "On it's way",
    },
    {
      date: 'June 21, 2020',
      address:
        '27 Division St, New York, NY 10003, US. St, New York, NY 10002, USA',
      amount: '$700.80',
      status: 'Delivered',
    },
    {
      date: 'Aug 17, 2020',
      address:
        '27 Division St, New York, NY 10004, US. St, New York, NY 10002, USA',
      amount: '$618.80',
      status: "On it's way",
    },
    {
      date: 'June 21, 2020',
      address:
        '27 Division St, New York, NY 10005, US. St, New York, NY 10002, USA',
      amount: '$700.80',
      status: 'Delivered',
    },
    {
      date: 'Aug 17, 2020',
      address:
        '27 Division St, New York, NY 10006, US. St, New York, NY 10002, USA',
      amount: '$618.80',
      status: "On it's way",
    },
    {
      date: 'June 21, 2020',
      address:
        '27 Division St, New York, NY 10007, US. St, New York, NY 10002, USA',
      amount: '$700.80',
      status: 'Delivered',
    },
  ];
  return (
    <Tab.Panel>
      <div className="profile-orders">
        {/* <div className="profile-orders-row capitalize text-[#222] pb-2 mb-8 border-b-2 border-[#222] hidden md:flex justify-between md:items-center text-xl leading-[120%]"> */}
        <TableRowHead
          headings={[
            'date',
            'delivery address',
            'amount',
            'status',
          ]}
        />
        {/* </div> */}
        {orders.map((order) => {
          const labels = [...Object.keys(order)];
          return (
            <div
              className="order-item border-[1px] [&>*:nth-of-type(2)]:w-[294px] md:border-none md:flex md:justify-between mb-2 py-4 border-[#eee]"
              key={order.address}
            >
              {labels.map((label) => (
                <div
                  key={label}
                  className="row flex items-start bg-white"
                >
                  <div
                    key={label}
                    className="col flex py-1 px-3 text-xs flex-col text-left md:pr-3 md:pl-0"
                  >
                    <span className="!uppercase  font-bold my-1 md:hidden">
                      {label}
                    </span>
                    <span
                      className={clsx(
                        label === 'date' &&
                          'text-[#999] capitalize',
                        label === 'address' &&
                          'capitalize',
                        label === 'amount' && 'text-base',
                        label === 'status' &&
                          order.status.includes(
                            'Delivered'
                          ) &&
                          'text-[#12a33b] uppercase',
                        label === 'status' &&
                          order.status.includes(
                            "On it's way"
                          )
                          ? 'text-pink uppercase'
                          : 'text-[#666]'
                      )}
                    >
                      {order[label]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </Tab.Panel>
  );
}

export function Tabs({ tabs, className }) {
  return (
    <Tab.Group>
      <Tab.List
        className={clsx(
          'flex flex-col md:flex-row mb-8',
          className
        )}
      >
        {tabs?.map((tab) => (
          <TabOrder key={tab} tab={tab} />
        ))}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div className="text-sm">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Neque quasi, sit vel
            exercitationem ea veniam quo asperiores
            corporis dignissimos quod id. Adipisci libero
            similique a commodi fugiat quibusdam maiores
            ipsa!
          </div>
        </Tab.Panel>
        <ProfileOrders />
        <Tab.Panel>
          <div className="text-sm">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Neque quasi, sit vel
            exercitationem ea veniam quo asperiores
            corporis dignissimos quod id. Adipisci libero
            similique a commodi fugiat quibusdam maiores
            ipsa!
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
