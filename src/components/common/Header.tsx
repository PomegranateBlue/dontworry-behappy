'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { headerStyles, containerStyles } from './Header.styles';
const Header = () => {
    const pathname = usePathname();

    const navigation = [
        { name: '홈', href: '/' },
        { name: '걱정 작성', href: '/note' },
        { name: '걱정 보관함', href: '/notebox' },
    ];

    return (
        <header className={headerStyles}>
            <div className={containerStyles}>
                <nav>
                    <ul>
                        {navigation.map((route) => {
                            const isActive = pathname === route.href;
                            return (
                                <li key={route.name}>
                                    <Link
                                        href={route.href}
                                        aria-current={
                                            isActive ? 'page' : undefined
                                        }
                                    >
                                        <span>{route.name}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
