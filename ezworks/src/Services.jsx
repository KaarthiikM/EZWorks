import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';
import presentationIcon from './assets/presentationIcon.png';
// import audioVisualIcon from './assets/audio-visual-icon.png';
// import translationIcon from './assets/translation-icon.png';
// import graphicIcon from './assets/graphic-icon.png';
// import researchIcon from './assets/research-icon.png';
// import dataProcessingIcon from './assets/data-processing-icon.png';

const servicesData = [
  {
    icon: presentationIcon,
    title: 'Presentation Design',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
  },
  {
    icon: presentationIcon,
    title: 'Audio - Visual Production',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
  },
  {
    icon: presentationIcon,
    title: 'Translation Services',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
  },
  {
    icon: presentationIcon,
    title: 'Graphic Design',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
  },
  {
    icon: presentationIcon,
    title: 'Research & Analytics',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
  },
  {
    icon: presentationIcon,
    title: 'Data Processing',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
  },
];

function Services() {
  return (
    <div className="services">
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}

export default Services;
