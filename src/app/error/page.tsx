"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/login");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4 text-center">
      <h1 className="text-red-600 text-xl font-bold">오류가 발생했습니다</h1>
      <p>회원가입 또는 로그인 중 문제가 발생했습니다.</p>
      <p className="text-sm text-gray-500">
        {countdown}초 후 로그인 페이지로 이동합니다...
      </p>
      <button
        onClick={() => router.push("/login")}
        className="bg-blue-600 text-white px-4 py-2 mt-4"
      >
        로그인 페이지로 이동
      </button>
    </div>
  );
}