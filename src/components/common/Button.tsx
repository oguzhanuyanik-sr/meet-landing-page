import { Link } from 'react-router-dom';

type Props = {};

const Button = ({ title, subtitle, color, url }: Props) => {
  return (
    <Link
      to={url}
      className={`${color} text-center text-white font-black text-base leading-[26px] p-[22px] rounded-[29px] w-fit mb-4 transition-all`}
    >
      {title}
      <span className='text-lightBlue'>{subtitle}</span>
    </Link>
  );
};

export default Button;
