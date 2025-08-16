import { FC } from 'react';

import { Contact, FAQ, Hero, HowWeWork, Services } from '@/components/sections';
import { Spotlight } from '@/components/ui';

const Home: FC = () => {
  return (
    <div className="flex flex-col">
      <Spotlight />
      <Hero />
      <Services />
      <HowWeWork />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
