'use client';

import Image from 'next/image';

const App = () => {
    return (
        <section className="bg-backgroundWhite px-[12px] py-[24px]">
            <section className="relative mx-auto min-h-screen w-full overflow-hidden">
                <div className="relative h-[540px] w-full overflow-hidden rounded-xl">
                    <Image
                        src="/hero-section-desktop.svg"
                        fill
                        alt="hero-section"
                        className="object-fill"
                    />
                </div>
            </section>
            <section className="relative mx-auto min-h-screen w-full overflow-hidden">
                <div className="relative h-[540px] w-full overflow-hidden rounded-xl">
                    <Image
                        src="/noteIntro.svg"
                        fill
                        alt="hero-section"
                        className="object-fill"
                    />
                </div>
            </section>
            <section className="relative mx-auto min-h-screen w-full overflow-hidden">
                <div className="relative h-[540px] w-full overflow-hidden rounded-xl">
                    <Image
                        src="/staticIntro.svg"
                        fill
                        alt="hero-section"
                        className="object-fill"
                    />
                </div>
            </section>
            <section className="relative mx-auto min-h-screen w-full overflow-hidden">
                <div className="relative h-[540px] w-full overflow-hidden rounded-xl">
                    <Image
                        src="/letterIntro.svg"
                        fill
                        alt="hero-section"
                        className="object-fill"
                    />
                </div>
            </section>
            <section className="relative mx-auto min-h-screen w-full overflow-hidden">
                <div className="relative h-[540px] w-full overflow-hidden rounded-xl">
                    <Image
                        src="/communityIntro.svg"
                        fill
                        alt="hero-section"
                        className="object-fill"
                    />
                </div>
            </section>
            <footer className="h-[48px] w-full bg-gray-500"></footer>
        </section>
    );
};

export default App;
