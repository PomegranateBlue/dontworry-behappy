"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;

  // 1. Supabase Auth에 사용자 등록
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    console.error("회원가입 실패:", authError.message);
    redirect("/error");
  }

  // 2. 사용자가 성공적으로 생성되었는지 확인
  if (authData.user) {
    // 3. public.users 테이블에 사용자 정보 추가
    const { error: insertError } = await supabase.from("users").insert({
      id: authData.user.id,
      email: authData.user.email,
      name: name || null,
    });

    if (insertError) {
      console.error("사용자 정보 저장 실패:", insertError.message);
      // 사용자 정보 저장에 실패해도 회원가입은 완료된 상태이므로 계속 진행
    }
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function logout() {
  const supabase = await createClient();
  
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    redirect("/error");
  }
  
  revalidatePath("/", "layout");
  redirect("/login");
}