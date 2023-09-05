import { Link } from 'react-router-dom';
import { LogoImage } from '../../utils/constants';

const Logo = () => {
  return (
    <Link to='/'>
      <img src={LogoImage} alt='Logo' />
    </Link>
  );
};

export default Logo;
