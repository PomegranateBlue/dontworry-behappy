'use client';
//컴포넌트로 반복 구조 수정하기

import Image from 'next/image';
import Header from '@/components/common/Header';
const App = () => {
    return (
        <>
            <Header />
            <main className="bg-backgroundWhite px-3 py-6 pt-16">
                <section className="relative mx-auto min-h-screen w-full overflow-hidden">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                    <Image
                        src="/hero-section-desktop.svg"
                        fill
                        alt="hero-section"
                        className="object-cover"
                    />
                </div>
            </section>
            <section className="relative mx-auto min-h-screen w-full overflow-hidden">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                    <Image
                        src="/noteIntro.svg"
                        fill
                        alt="hero-section"
                        className="object-cover"
                    />
                </div>
            </section>
            <section className="relative mx-auto min-h-screen w-full overflow-hidden">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                    <Image
                        src="/staticIntro.svg"
                        fill
                        alt="hero-section"
                        className="object-cover"
                    />
                </div>
            </section>
            <section className="relative mx-auto min-h-screen w-full overflow-hidden">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                    <Image
                        src="/letterIntro.svg"
                        fill
                        alt="hero-section"
                        className="object-cover"
                    />
                </div>
            </section>
            <section className="relative mx-auto min-h-screen w-full overflow-hidden">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                    <Image
                        src="/communityIntro.svg"
                        fill
                        alt="hero-section"
                        className="object-cover"
                    />
                </div>
            </section>
            <div></div>
            <footer className="h-12 w-full bg-gray-500"></footer>
            </main>
        </>
    );
};

export default App;
