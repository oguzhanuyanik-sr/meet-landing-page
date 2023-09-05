import { Link } from 'react-router-dom';

type ButtonProps = {
  title: string;
  subtitle?: string;
  color: string;
  url: string;
};

const Button = ({ title, subtitle, color, url }: ButtonProps) => {
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
