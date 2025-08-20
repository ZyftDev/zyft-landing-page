import { FC } from 'react';

import { AutomationSolutions, Contact, FAQ, Hero, HowWeWork } from '@/components/sections';
import { Spotlight } from '@/components/ui';

const Home: FC = () => {
  return (
    <div className="flex flex-col">
      <Spotlight />
      <Hero />
      <AutomationSolutions />
      <HowWeWork />
      <Contact />
      <FAQ />
    </div>
  );
};

export default Home;
