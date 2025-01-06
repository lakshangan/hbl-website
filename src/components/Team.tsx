import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'Lakshan',
    role: 'Lead Organizer',
    image: './images/IMG_8127.jpeg',
    social: {
      twitter: '#',
      linkedin: '#', 
      github: '#'
    }
  },
  {
    name: 'Sarah Johnson', 
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Michael Wong',
    role: 'Web3 Expert', 
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Emily Davis',
    role: 'Community Manager',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150&h=150',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }
];

export const Team = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="team">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The passionate individuals behind HACK_BEYOND
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-900/60 rounded-xl overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className="aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <div className="flex gap-4">
                    <a href={member.social.twitter} className="text-gray-400 hover:text-purple-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-purple-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.github} className="text-gray-400 hover:text-purple-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};