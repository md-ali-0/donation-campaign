import { Link, NavLink } from 'react-router-dom';
import Logo from '/logo.png';
import { useState } from 'react';
import { FiAlignLeft, FiX } from "react-icons/fi";
const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className='container mx-auto'>
            <nav className='p-5 bg-white md:flex md:items-center md:justify-between'>
                <div className='flex justify-between items-center'>
                    <Link to='/'><img className='w-36' src={Logo} alt="Donation Campaign" /></Link>
                    <div onClick={() => setOpen(!open)} className="md:hidden">
                        {
                            open === true ? <span className='text-3xl cursor-pointer'><FiX></FiX></span> : <span className='text-3xl cursor-pointer'><FiAlignLeft></FiAlignLeft></span>
                        }
                    </div>
                </div>
                <ul className={`flex flex-col items-center justify-center md:flex-row md:static bg-white absolute left-0 w-full md:w-auto gap-3 opacity-0 md:opacity-100 z-50 ${open && 'top-[80px] opacity-100'}`}>
                    <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-red-500 underline underline-offset-4 font-bold text-lg' : 'text-lg'}>Home</NavLink></li>
                    <li><NavLink to='/donation' className={({ isActive }) => isActive ? 'text-red-500 underline underline-offset-4 font-bold text-lg' : 'text-lg'}>Donation</NavLink></li>
                    <li><NavLink to='/statistics' className={({ isActive }) => isActive ? 'text-red-500 underline underline-offset-4 font-bold text-lg' : 'text-lg'}>Statistics</NavLink></li>
                </ul>

            </nav>
        </header>
    );
};

export default Header;