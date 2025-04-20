import { Project } from '../types/project';
import { images } from './images';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Machine Learning Image Classifier',
    description: 'A Python-based machine learning project using TensorFlow and Keras to classify images of handwritten digits with 98% accuracy.',
    imageUrl: images.projects.placeholder,
    category: 'desktop',
    technologies: ['Python', 'TensorFlow', 'Keras', 'Jupyter'],
    link: 'https://github.com/example/ml-classifier'
  },
  {
    id: '2',
    title: 'Interactive Data Visualization',
    description: 'Web application that creates interactive visualizations for complex datasets using D3.js and React.',
    imageUrl: images.projects.placeholder,
    category: 'web',
    technologies: ['JavaScript', 'React', 'D3.js', 'HTML/CSS'],
    link: 'https://github.com/example/data-viz'
  },
  {
    id: '3',
    title: 'Natural Language Processing App',
    description: 'Mobile application that uses NLP techniques to analyze sentiment and extract key topics from text input.',
    imageUrl: images.projects.placeholder,
    category: 'mobile',
    technologies: ['React Native', 'Python', 'NLTK', 'Flask'],
    link: 'https://github.com/example/nlp-app'
  },
  {
    id: '4',
    title: 'Algorithmic Music Composition',
    description: 'System that uses algorithms and machine learning to generate original musical compositions in various styles.',
    imageUrl: images.projects.placeholder,
    category: 'desktop',
    technologies: ['Python', 'TensorFlow', 'Music21', 'MIDI'],
    link: 'https://github.com/example/algo-music'
  },
  {
    id: '5',
    title: 'Virtual Reality Campus Tour',
    description: 'VR application that allows prospective students to tour the campus and explore facilities in an immersive 3D environment.',
    imageUrl: images.projects.placeholder,
    category: 'other',
    technologies: ['Unity', 'C#', '3D Modeling', 'VR'],
    link: 'https://github.com/example/vr-tour'
  },
  {
    id: '6',
    title: 'Social Network Analysis Tool',
    description: 'Desktop application for analyzing and visualizing social networks and community structures within large datasets.',
    imageUrl: images.projects.placeholder,
    category: 'web',
    technologies: ['JavaScript', 'Node.js', 'Cytoscape.js', 'MongoDB'],
    link: 'https://github.com/example/network-analysis'
  }
]; 