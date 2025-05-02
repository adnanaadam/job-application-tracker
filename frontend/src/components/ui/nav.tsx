import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav>
      <header className='flex items-center justify-between bg-neutral-900 p-4 text-white'>
        <Link to='/'>
          <h1 className='text-2xl font-bold'>JobTrackr</h1>
        </Link>

        <Link to='/login' className='text-blue-400'>
          Login
        </Link>
      </header>
    </nav>
  );
};

export default Navbar;
