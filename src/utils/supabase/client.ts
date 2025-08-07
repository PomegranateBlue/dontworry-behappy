import { createBrowserClient } from '@supabase/ssr';
import { Database } from '@/types/supabase.types';

let supabase: ReturnType<typeof createBrowserClient> | null = null;

export const createClient = () => {
    if (supabase) return supabase;

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
        console.error('환경 변수가 설정되지 않았습니다.');
        console.error('NEXT_PUBLIC_SUPABASE_URL:', !!supabaseUrl);
        console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY:', !!supabaseAnonKey);
        throw new Error('Supabase 환경 변수가 설정되지 않았습니다.');
    }

    supabase = createBrowserClient(supabaseUrl, supabaseAnonKey, {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true,
        },
        cookies: {
            get(name: string) {
                return document.cookie
                    .split('; ')
                    .find((row) => row.startsWith(name + '='))
                    ?.split('=')[1];
            },
            set(name: string, value: string, options: { path: string }) {
                document.cookie = `${name}=${value}; path=${options.path}`;
            },
            remove(name: string, options: { path: string }) {
                document.cookie = `${name}=; path=${options.path}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
            },
        },
    });

    return supabase;
};
