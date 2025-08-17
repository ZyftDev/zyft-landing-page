import { FC } from 'react';

import Image from 'next/image';

export const RotatingCube: FC = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      <div className="animate-spin-slow relative w-64 h-64">
        <Image
          src="/logos/logo-no-bg.png"
          alt="Zyft Logo"
          width={256}
          height={256}
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#6B46C1]/20 via-[#E94B87]/10 to-[#F9A23F]/20 blur-3xl pointer-events-none" />
    </div>
  );
};
