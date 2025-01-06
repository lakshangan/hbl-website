import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Users } from 'lucide-react';

const teams = [
  {
    name: 'Team Alpha',
    project: 'Decentralized Healthcare',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=300',
    description: 'Revolutionary blockchain-based health records management'
  },
  {
    name: 'Binary Bandits',
    project: 'AI Trading Bot',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400&h=300',
    description: 'Advanced algorithmic trading using machine learning'
  },
  {
    name: 'Quantum Questers',
    project: 'MetaVerse Education',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400&h=300',
    description: 'Virtual reality platform for immersive learning'
  }
];

export const ParticipatingTeams = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="teams">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Teams</h2>
          <p className="text-xl text-gray-400">Meet our innovative participants</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
              
              <img
                src={team.image}
                alt={team.name}
                className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">{team.name}</h3>
                <div className="flex items-center gap-2 text-purple-400 mb-2">
                  <Trophy className="w-5 h-5" />
                  <span>{team.project}</span>
                </div>
                <p className="text-gray-300">{team.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};