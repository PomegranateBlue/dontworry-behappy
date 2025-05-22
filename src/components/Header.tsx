'use client';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  return (
    <header className="flex h-[80px] w-full items-center bg-backgroundWhite px-[40px] py-[24px]">
      <div className="flex-1">
        <Link href="/">
          <Image src="/header.svg" alt="logo" width={180} height={30} />
        </Link>
      </div>

      <nav className="flex flex-1 justify-between bg-red-500">
        <Link href="/note" className="text-[16px] font-medium text-labelNeutral">
          걱정 작성
        </Link>
        <Link href="/notebox" className="text-[16px] font-medium text-labelNeutral">
          걱정 보관함
        </Link>
      </nav>

      <div className="flex flex-1 items-center justify-center text-[16px] font-medium text-labelNeutral">로그인</div>
    </header>
  );
};

export default Header;
