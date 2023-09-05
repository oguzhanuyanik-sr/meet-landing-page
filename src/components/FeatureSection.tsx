import { featureData } from '../utils/constants';

type Props = {};

const FeatureSection = (props: Props) => {
  return (
    <section className='container flex flex-col items-center'>
      <div className='flex flex-wrap justify-between mt-16 mb-12 sm:mb-6'>
        {featureData.map((item, index) => (
          <img
            className='rounded-[24px] w-[45%] mb-6 sm:w-[23%]'
            src={item}
            alt='Human Photos'
            key={index}
          />
        ))}
      </div>
      <div className='lg:w-1/2'>
        <div className='text-blue font-black text-base leading-[26px] text-center'>
          BUILT FOR MODERN USE
        </div>
        <h2 className='font-black text-[32px] sm:text-[40px] text-center leading-[36px] sm:leading-[44px] mt-6 mb-8'>
          Smarter meetings, all <br /> in one place
        </h2>
        <p className='text-center text-lightGray text-base lg:text-lg leading-[26px]'>
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
    </section>
  );
};

export default FeatureSection;
