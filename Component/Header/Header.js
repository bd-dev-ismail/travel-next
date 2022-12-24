import Link from 'next/link'

const Header = () => {
    return (
        <div>
            <div>
            <div className="navbar bg-[#fff] md:px-9 p-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost text-[#2095AE] lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>

      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#fff] rounded-box w-52 text-black ">
      <li className='hover:text-[#2095AE]'><Link href='/' >Home</Link></li>
      <li className='hover:text-[#2095AE]'><Link href='/about' >About</Link></li>
      <li className='hover:text-[#2095AE]'><Link href='/tour' >Tour</Link></li>
      <li className='hover:text-[#2095AE]'><Link href='/destinations' >Destinations</Link></li>
      <li className='hover:text-[#2095AE]'><Link href='/blog' >Blog</Link></li>
      <li className='hover:text-[#2095AE]'><Link href='/tour' >Contact</Link></li>

      </ul>

    </div>
    <Link href='/' className="btn btn-ghost normal-case text-[#2095AE] text-xl">Travel Next</Link>
  </div>
  <div className="navbar-center hidden lg:flex text-black font-semibold navbar-end">
    <ul className="menu menu-horizontal px-1">
      <li className='hover:text-[#2095AE] '><Link href='/' >Home</Link></li>
      <li className='hover:text-[#2095AE]'><Link href='/about' >About</Link></li>
      <li className='hover:text-[#2095AE]'><Link href='/tour' >Tour</Link></li>
      <li className='hover:text-[#2095AE]'><Link href='/destinations' >Destinations</Link></li>
      <li className='hover:text-[#2095AE]'><Link href='/blog' >Blog</Link></li>
      <li className='hover:text-[#2095AE]'><Link href='/tour' >Contact</Link></li>
    </ul>
  </div>
</div>
        </div>
        </div>
    );
};

export default Header;