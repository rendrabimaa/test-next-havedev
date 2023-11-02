import Link from 'next/link';
import { useState } from 'react';
import { Transition } from 'react-transition-group';

const Navbar:React.FC = () => {1
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='bg-white h-[80px] py-6'>
            <ul className='flex justify-end gap-12 h-full text-md mr-12'>
                <li>
                    <Link href={"/dashboard"}>Dashboard</Link>
                </li>
                <li>
                    <Link href={"/master"}>Master</Link>
                    <button
                        className="text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >V</button>
                </li>
                <li>
                    <Link href={"/laporan/penjualan"}>Pembelian</Link>
                </li>
                <li>
                    <Link href={"/konsinyasi"}>Konsinyasi</Link>
                </li>
                <li>
                    <Link href={"/laporan"}>Laporan</Link>
                </li>
                <li>
                    <Link href={"/informasi"}>Informasi</Link>
                </li>
            </ul>
            <Transition in={isOpen} timeout={300} unmountOnExit>
                {(state) => (
                <div
                    className={`${
                    state === 'entered' ? 'opacity-100' : 'opacity-0'
                    } transform transition-transform ease-in-out duration-1000 absolute top-16 right-4 bg-red-500 p-2 shadow-lg`}
                >
                    <Link href="/tentang">Tentang</Link>
                    <Link href="/kontak">Kontak</Link>
                </div>
                )}
            </Transition>
        </nav>
    )
}

export default Navbar;