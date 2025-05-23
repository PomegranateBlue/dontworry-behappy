import Image from 'next/image';
const App = () => {
  return (
    <div className="bg-backgroundWhite px-[12px] py-[24px]">
      <section className="relative h-[540px] w-full rounded-xl">
        <Image src="/hero-section-desktop.svg" fill={true} alt="intro" className="object-cover" />
      </section>
      <footer className="h-[48px] w-full bg-gray-500"></footer>
    </div>
  );
};

export default App;
