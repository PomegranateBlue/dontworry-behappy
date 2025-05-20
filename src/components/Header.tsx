"use client";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="w-full h-[80px] px-[40px] py-[24px] flex items-center bg-backgroundWhite">
      <div className="flex-1">
        <Link href="/">
          <Image src="/header.svg" alt="logo" width={180} height={30} />
        </Link>
      </div>

      <nav className="flex flex-1 justify-between ">
        <Link
          href="/note"
          className="text-labelNeutral text-[16px] font-medium"
        >
          걱정 작성
        </Link>
        <Link
          href="/notebox"
          className="text-labelNeutral text-[16px] font-medium"
        >
          걱정 보관함
        </Link>
      </nav>
      
      <div className="flex flex-1">로그인</div>
    </header>
  );
};

export default Header;
