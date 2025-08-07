'use client';

import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import Header from '@/components/Header';

export default function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [user, setUser] = useState<User | null>(null);
    const supabase = createClient();

    useEffect(() => {
        const getUser = async () => {
            try {
                const {
                    data: { user },
                } = await supabase.auth.getUser();
                setUser(user);
            } catch (error) {
                console.error('Error fetching user:', error);
                setUser(null);
            }
        };

        getUser();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return (
        <>
            <Header user={user} />
            {children}
        </>
    );
}
