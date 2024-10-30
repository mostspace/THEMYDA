import React from 'react';
import { stats } from 'src/constants';
import { Typography } from '@mui/material';

const Stats = () => {
  return (
    <section className="flex flex-wrap gap-20 justify-center md:justify-between xl:px-20 mt-[50px] md:mt-[100px]">
      {stats.map((stat) => (
        <div className='relative' key={stat.id}>
          <div
            className="origin-bottom -rotate-6 border rounded-[19px] w-[286px] h-[224px] z-10 mt-[12px]"
            style={{ borderColor: stat.stroke, position: 'absolute' }}
          />

          <div
            className="drop-shadow-md relative bg-[#180D48] border rounded-[19px] w-[286px] h-[224px] flex items-end px-[26px] py-[12px] z-20 transition duration-300 ease-in-out hover:-rotate-6 cursor-pointer"
            style={{ borderColor: stat.stroke }}
          >
            <img src={stat.img} className="absolute -top-[25%] left-[25%]" alt={stat.title} />
            <div className="flex flex-col gap-[10px] justify-center text-center">
              <Typography variant="h4" className="font-montSemiBold">
                {stat.title}
              </Typography>
              <Typography variant="title">{stat.value}</Typography>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stats;