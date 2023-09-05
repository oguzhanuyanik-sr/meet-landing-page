import { HeroLeft, HeroRight } from '../utils/constants';
import Button from './common/Button';
import Separator from './common/Separator';

const HeroSection = () => {
  return (
    <main className='lg:flex lg:flex-col lg:items-center 2xl:container'>
      <div className='w-full flex justify-center mt-14 sm:mt-16 mb-12 sm:mb-20 lg:hidden'>
        <img className='w-[55%]' src={HeroLeft} alt='Hero Image' />
        <img className='w-[55%]' src={HeroRight} alt='Hero Image' />
      </div>
      <div className='lg:mx-0 w-full flex justify-center items-center lg:relative lg:mt-[61px]'>
        <img
          className='w-[25%] hidden lg:block lg:absolute lg:left-[-20px]'
          src={HeroLeft}
          alt='Hero Image'
        />
        <div className='w-[75%] lg:w-[50%] lg:px-[90px]'>
          <h1 className='text-gray font-black text-[40px] sm:text-[48px] leading-[44px] sm:leading-[48px] text-center'>
            Group Chat
            <br /> for Everyone
          </h1>
          <p className='text-lightGray font-medium text-base leading-[26px] mt-6 text-center'>
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className='w-full mt-10 flex flex-col sm:flex-row sm:gap-6 justify-center items-center'>
            <Button
              title={'Download'}
              subtitle={' v1.3'}
              color={'bg-blue hover:bg-softBlue'}
              url={'/'}
            />
            <Button
              title={'What is it?'}
              color={'bg-purple hover:bg-softPurple'}
              url={'/'}
            />
          </div>
        </div>
        <img
          className='w-[25%] hidden lg:block lg:absolute lg:right-[-20px]'
          src={HeroRight}
          alt='Hero Image'
        />
      </div>
      <Separator num={1} />
    </main>
  );
};

export default HeroSection;
