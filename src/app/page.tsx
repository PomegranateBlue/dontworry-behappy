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
        <main className="bg-backgroundWhite px-3 py-6 pt-16">
            {heroSectionsImgSrcs.map((section, index) => (
                <HeroSection
                    key={section.id}
                    imageSrc={section.imageSrc}
                    alt={section.alt}
                    className={index === 0 ? 'priority' : ''}
                />
            ))}
            <footer className="h-12 w-full bg-gray-500"></footer>
        </main>
    );
};

export default App;
