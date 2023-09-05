type Props = {};

const Separator = ({ num }: Props) => {
  return (
    <div className='container flex flex-col items-center mt-16'>
      <div className='w-[1px] h-[84px] border-l border-lightGray'></div>
      <div className='bg-white text-lightGray font-black text-base leading-[26px] border border-lightGray rounded-full h-14 w-14 flex justify-center items-center select-none'>
        {num}
      </div>
    </div>
  );
};

export default Separator;
