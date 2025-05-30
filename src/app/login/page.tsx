"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState<User|null>(null);
  //supabase.auth.getUser가 반환하는 타입으로 선언
  const router = useRouter();
  
  useEffect(() => {
    const checkUser = async () => {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        setUser(data.user);
      }
    };
    
    checkUser();
  }, []);
  
  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
    router.refresh();
  };
  
  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      {user ? (
        <div className="space-y-4">
          <p className="text-green-600 text-lg font-semibold">
            환영합니다, {user.email}님!
          </p>
          <button 
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            로그아웃
          </button>
        </div>
      ) : (
        <>
          {isLogin ? <LoginForm /> : <RegisterForm />}
          
          <div className="text-center mt-4">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 hover:underline"
            >
              {isLogin ? "계정이 없으신가요? 회원가입하기" : "이미 계정이 있으신가요? 로그인하기"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginPage;