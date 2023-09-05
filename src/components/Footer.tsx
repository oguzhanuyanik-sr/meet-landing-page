import Button from './common/Button';
import Separator from './common/Separator';
import {
  FooterMobileImage,
  FooterTabletImage,
  FooterDesktopImage,
} from '../utils/constants';

const Footer = () => {
  return (
    <footer className='relative bg-ghostBlue flex flex-col items-center mt-[180px] pt-[100px] pb-[70px] px-[40px] text-center'>
      <div className='absolute top-[-175px]'>
        <Separator num={2} />
      </div>
      <img
        className='absolute z-[-50] w-full h-full top-0 md:hidden 2xl:container'
        src={FooterMobileImage}
        alt='Footer Image'
      />
      <img
        className='absolute z-[-50] w-full h-full top-0 hidden md:block lg:hidden 2xl:container'
        src={FooterTabletImage}
        alt='Footer Image'
      />
      <img
        className='absolute z-[-50] w-full h-full top-0 hidden lg:block 2xl:container'
        src={FooterDesktopImage}
        alt='Footer Image'
      />
      <h3 className='text-white font-black text-[32px] sm:text-[40px] leading-[36px] sm:leading-[44px] mb-6'>
        Experience more <br /> together
      </h3>
      <p className='text-white text-lg leading-[26px] mb-8'>
        Stay connected with reliable HD meetings and unlimited one-on-one and
        group video sessions.
      </p>
      <Button
        title={'Download'}
        subtitle={' v1.3'}
        color={'bg-purple hover:bg-softPurple'}
        url={'/'}
      />
    </footer>
  );
};

export default Footer;
