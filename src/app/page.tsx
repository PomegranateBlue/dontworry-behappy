'use client';
//컴포넌트로 반복 구조 수정하기

import HeroSection from '@/components/common/HeorSection';

const heroSectionsImgSrcs = [
    {
        id: 'hero',
        imageSrc: '/hero-section-desktop.svg',
        alt: 'hero-section',
    },
    {
        id: 'note-intro',
        imageSrc: '/noteIntro.svg',
        alt: 'note-introduction',
    },
    {
        id: 'static-intro',
        imageSrc: '/staticIntro.svg',
        alt: 'static-introduction',
    },
    {
        id: 'letter-intro',
        imageSrc: '/letterIntro.svg',
        alt: 'letter-introduction',
    },
    {
        id: 'community-intro',
        imageSrc: '/communityIntro.svg',
        alt: 'community-introduction',
    },
];
const App = () => {
    return (
        <main className="bg-backgroundWhite">
            <HeroSection
                imageSrc={heroSectionsImgSrcs[0].imageSrc}
                alt={heroSectionsImgSrcs[0].alt}
            />
            <footer className="h-12 w-full bg-gray-500"></footer>
        </main>
    );
};

export default App;
