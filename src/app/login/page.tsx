// app/login/page.tsx
import { createClient } from "@/utils/supabase/server";
import { login, signup, logout } from "./actions";

const LoginPage = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      {user ? (
        <div className="space-y-4">
          <p className="text-green-600 text-lg font-semibold">
            환영합니다, {user.email}님!
          </p>
          <form>
            <button
              formAction={logout}
              className="bg-red-600 text-white px-4 py-2"
            >
              로그아웃
            </button>
          </form>
        </div>
      ) : (
        <form className="space-y-2">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border p-2"
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full border p-2"
          />
          <div className="flex gap-2">
            <button
              formAction={login}
              className="bg-blue-600 text-white px-4 py-2"
            >
              Log in
            </button>
            <button
              formAction={signup}
              className="bg-green-600 text-white px-4 py-2"
            >
              Sign up
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginPage;