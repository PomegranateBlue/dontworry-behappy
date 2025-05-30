"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { AuthError, PostgrestError } from "@supabase/supabase-js";
import { Database } from "@/types/supabase.types";

type UserInsert = Database["public"]["Tables"]["users"]["Insert"];

export default function RegisterForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const supabase = createClient();

      // 1. Supabase Auth에 사용자 등록
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) throw signUpError;

      // 2. 사용자가 성공적으로 생성되었는지 확인
      if (data.user) {
        // 3. public.users 테이블에 사용자 정보 추가
        const userData: UserInsert = {
          id: data.user.id,
          email: data.user.email,
          name: name || null,
        };

        const { error: insertError } = await supabase
          .from("users")
          .insert(userData);

        if (insertError) throw insertError;
      }

      // 성공 메시지 표시 또는 리다이렉트
      alert("회원가입이 완료되었습니다. 이메일을 확인해주세요.");
      router.push("/login");
    } catch (error) {
      const errorMessage =
        error instanceof AuthError || error instanceof PostgrestError
          ? error.message
          : "회원가입 중 오류가 발생했습니다.";

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">회원가입</h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            이메일
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border p-2 rounded mt-1 text-black"
            placeholder="example@email.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border p-2 rounded mt-1 text-black"
            placeholder="6자 이상 입력해주세요"
            minLength={6}
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            닉네임
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded mt-1 text-black"
            placeholder="사용할 닉네임을 입력하세요"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-green-600 text-white py-2 px-4 rounded ${
            loading ? "opacity-70 cursor-not-allowed" : "hover:bg-green-700"
          }`}
        >
          {loading ? "처리 중..." : "회원가입"}
        </button>
      </form>
    </div>
  );
}
