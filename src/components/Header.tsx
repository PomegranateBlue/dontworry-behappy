'use client';
import Image from 'next/image';
import Link from 'next/link';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

interface HeaderProps {
    user: User | null;
}

const Header = ({ user }: HeaderProps) => {
    const router = useRouter();
    const supabase = createClient();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/login');
    };

    return (
        <header className="flex h-[64px] w-full items-center bg-backgroundOffWhite px-[40px] py-[24px]">
            <div className="flex-1">
                <Link href="/">
                    <Image
                        src="/header.svg"
                        alt="logo"
                        width={180}
                        height={30}
                    />
                </Link>
            </div>

            <nav className="flex flex-1 justify-around bg-red-500">
                <Link
                    href="/note"
                    className="text-[16px] font-medium text-labelNeutral"
                >
                    걱정 작성
                </Link>
                <Link
                    href="/notebox"
                    className="text-[16px] font-medium text-labelNeutral"
                >
                    걱정 보관함
                </Link>
            </nav>

            <div className="flex flex-1 items-center justify-end gap-4">
                {user ? (
                    <>
                        <span className="text-[16px] font-medium text-labelNeutral">
                            {user.email}
                        </span>
                        <button
                            onClick={handleLogout}
                            className="text-[16px] font-medium text-labelNeutral hover:text-red-500"
                        >
                            로그아웃
                        </button>
                    </>
                ) : (
                    <Link
                        href="/login"
                        className="text-[16px] font-medium text-labelNeutral hover:text-blue-500"
                    >
                        로그인
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
