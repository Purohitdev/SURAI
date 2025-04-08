// components/SectionWrapper.tsx
export default function SectionWrapper({ children }: { children: React.ReactNode }) {
    return (
      <div className="relative h-screen w-full flex justify-center items-center snap-center">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        {children}
      </div>
    );
  }
  