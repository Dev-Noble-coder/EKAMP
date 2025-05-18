import React from 'react';
import {
  Globe,
  Wrench,
  Building2,
  Users2,
} from 'lucide-react';

const services = [
  {
    title: 'Digital Services',
    description: 'Access online payments, business registrations, and digital permit applications with ease.',
    icon: <Globe size={32} />,
    color: '#14B8A6',
  },
  {
    title: 'Public Works',
    description: 'Stay updated on road maintenance, waste management, and urban development projects.',
    icon: <Wrench size={32} />,
    color: '#fbbf24',
  },
  {
    title: 'Community Development',
    description: 'Explore healthcare programs, education support, and affordable housing initiatives.',
    icon: <Building2 size={32} />,
    color: '#1E3A8A',
  },
  {
    title: 'Citizen Engagement',
    description: 'Participate in town halls, take surveys, and submit feedback or complaints online.',
    icon: <Users2 size={32} />,
    color: '#EC7D10',
  },
];

const ServicesPage = () => (
  <section className="bg-white py-16 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4">Empowering Citizens Through Smart Services</h2>
      <p className="text-[#374151] mb-12 max-w-2xl mx-auto text-[12px] md:text-sm">
        Explore a wide range of municipal services built to enhance civic life, promote development, and connect citizens to the heart of local governance.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 text-left hover:shadow-lg transition-shadow duration-300"
          >
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full mb-4"
              style={{ backgroundColor: service.color, color: 'white' }}
            >
              {service.icon}
            </div>
            <h3 className="text-md font-semibold text-[#1E3A8A] mb-2">
              {service.title}
            </h3>
            <p className="text-[#374151] text-[12px]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPage;
