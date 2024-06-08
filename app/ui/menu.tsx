'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    {name: 'Home', href: '/'},
    {name: 'WhatsApp', href: '/whatsapp'}
]

export default function Menu() {
    const pathname = usePathname();
    return (
        <div className="flex w-full flex-row bg-slate-100 p-1 sm:p-2">
            {links.map((link) => (
                <Link 
                className={clsx("bg-slate-400 m-1 p-1 sm:p-2 scale-90 hover:scale-95 hover:bg-cyan-600", {
                    "bg-green-700": pathname === link.href,
                },)} 
                key={link.href} href={link.href}>
                    <h2 className="font-semibold text-white text-lg sm:text-xl">{link.name}</h2>
                </Link>
            ))}
                
        </div>
    );
}