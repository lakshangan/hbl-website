import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Rocket, Globe, Heart } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Web3 Innovation',
    description: 'Create solutions that address real-world challenges using decentralized technologies, focusing on enhancing blockchain scalability, privacy, security, or interoperability.'
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Develop innovative solutions that leverage artificial intelligence to solve complex real-world problems. Focus on areas like machine learning, data analysis, automation, or AI-driven insights to create impactful and scalable applications.'
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Create solutions that harness technology to improve healthcare outcomes. Focus on areas like patient care, health data management, diagnostics, or telemedicine, aiming to enhance accessibility, efficiency, and quality in the healthcare industry.'
  },
  {
    icon: Rocket,
    title: 'Open Track',
    description: 'Explore innovative solutions across any domain or industry. This track allows participants to tackle unique challenges of their choice, encouraging creativity and out-of-the-box thinking. Build impactful solutions using technology to address a problem that excites you!'
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