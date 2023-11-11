import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { NavLinks } from '@/constants';
import logo from '../public/logo.svg';
import AuthProviders from './AuthProviders';

const Navbar = () => {
    const session = {};
    return (
        <nav className='flexBetween navbar'>
            <div className='flex-1 flexStart gap-10'>
                <Link href='/'>
                    <Image src={logo} width={115} height={43} alt="Flexibble"/>
                </Link>
                <ul className='x1:flex text-small gap-7'>
                    {NavLinks.map((link) => (
                        <Link style={{ marginRight: '15px' }} href={link.href} key={link.key}>{link.text}</Link>
                    ))}
                </ul>
            </div>
            <div className='flexCenter gap-4'>
                {session ? (
                    <>
                        UserPhoto
                        <Link href=""></Link>
                    </>
                ): (
                    <AuthProviders />
                )}
            </div>
        </nav>
    )
}

export default Navbar