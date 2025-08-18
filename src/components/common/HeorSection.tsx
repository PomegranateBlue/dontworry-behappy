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
const HeroSection = ({ imageSrc }: HeroSectionProps) => {
    return (
        <section className={SectionStyle}>
            <div className={SectionContainerStyle}>
                <Image
                    src={imageSrc}
                    fill
                    alt="hero-section"
                    className={HeroSectionImageStyle}
                />
            </div>
        </section>
    );
};

export default HeroSection;
