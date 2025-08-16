import { FC } from 'react';

import { Spotlight } from '@/components/ui';

const Home: FC = () => {
  return (
    <div className="flex flex-col gap-32 pb-32">
      <Spotlight />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-landing-hero-heading text-6xl font-[400] font-clash mb-6">
            Hello World
          </h1>
          <p className="text-landing-hero-subheading text-xl font-[450] font-satoshi max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen bg-black/5 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-clash mb-16">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-black/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-clash mb-4">Feature {i}</h3>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-clash mb-16">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam ipsum
                adipisci aperiam ullam excepturi quos cumque beatae ab.
              </p>
              <p className="text-lg text-gray-300">
                Voluptates quisquam ipsum adipisci aperiam ullam excepturi quos cumque beatae ab.
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="bg-black/10 rounded-lg aspect-square"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen bg-black/5 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-clash mb-16">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-black/10 rounded-lg aspect-square"></div>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam ipsum
                adipisci aperiam ullam excepturi quos cumque beatae ab.
              </p>
              <p className="text-lg text-gray-300">
                Voluptates quisquam ipsum adipisci aperiam ullam excepturi quos cumque beatae ab.
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
