'use client';

import Image from 'next/image';
import {
    SectionStyle,
    SectionContainerStyle,
    HeroSectionImageStyle,
} from '@/components/common/HeroSection.style';

interface HeroSectionProps {
    imageSrc: string;
    alt?: string;
    className?: string;
}

const HeroSection = ({
    imageSrc,
    alt = 'hero-section',
    className,
}: HeroSectionProps) => {
    return (
        <section className={`${SectionStyle} ${className || ''}`}>
            <div className={SectionContainerStyle}>
                <Image
                    src={imageSrc}
                    fill
                    alt={alt}
                    className={HeroSectionImageStyle}
                    priority={className === 'priority'}
                />
            </div>
        </section>
    );
};

export default HeroSection;
