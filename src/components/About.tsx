import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Rocket, Globe } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Web3 Innovation',
    description: 'Build cutting-edge applications using blockchain technology and decentralized systems.'
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Leverage state-of-the-art AI models and machine learning algorithms.'
  },
  {
    icon: Globe,
    title: 'Global Community',
    description: 'Connect with developers worldwide and build lasting relationships.'
  },
  {
    icon: Rocket,
    title: 'Launch Ready',
    description: 'Get mentorship and resources to transform your idea into a startup.'
  }
];

export const About = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About the Event</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join us for an immersive 24-hour hackathon where innovation meets technology. 
            Build groundbreaking solutions, learn from industry experts, and compete for 
            amazing prizes while networking with fellow developers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all hover:-translate-y-2"
            >
              <div className="mb-4">
                <feature.icon className="w-12 h-12 text-purple-500 group-hover:text-purple-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};