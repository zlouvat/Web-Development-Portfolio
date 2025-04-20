import { images } from "./images";

interface FacultyMember {
  id: number;
  name: string;
  title: string;
  background: string;
  imageUrl: string;
  email?: string;
  research?: string[];
  website?: string;
}

export const facultyMembers: FacultyMember[] = [
  {
    id: 1,
    name: "Barry G. Lawson",
    title: "Colony Family Professor of Digital and Computational Studies",
    background: "Ph.D. in Computer Science from the College of William & Mary. His research interests include parallel and distributed computing, simulation, and computer science education.",
    imageUrl: images.faculty.lawson,
    email: "blawson@bates.edu",
    research: ["Agent-based Simulation", "Discrete-event Simulation", "Computer Science Education"],
    website: "https://www.bates.edu/faculty-expertise/profile/barry-g-lawson/"
  },
  {
    id: 2,
    name: "Jason Castro",
    title: "Associate Professor of Digital and Computational Studies; Neuroscience",
    background: "Ph.D. in Computation and Neural Systems from the California Institute of Technology. His research addresses computational and conceptual problems in neuroscience and data science more broadly.",
    imageUrl: images.faculty.castro,
    email: "jcastro@bates.edu",
    research: ["Computational Neuroscience", "Data Science", "Machine Learning"],
    website: "https://www.bates.edu/faculty-expertise/profile/jason-b-castro/"
  },
  {
    id: 3,
    name: "Carrie Diaz Eaton",
    title: "Associate Professor of Digital and Computational Studies",
    background: "Ph.D. in Mathematics from the University of Tennessee. Her work focuses on computational and mathematical biology education, interdisciplinary studies, and inclusive pedagogies.",
    imageUrl: images.faculty.diazEaton,
    email: "cdeaton@bates.edu",
    research: ["Computational Biology", "STEM Education", "Interdisciplinary Computing", "Complex Adaptive Systems"],
    website: "https://www.bates.edu/faculty-expertise/profile/carrie-diaz-eaton/"
  },
  {
    id: 4,
    name: "Anelise H. Shrout",
    title: "Associate Professor of Digital and Computational Studies",
    background: "Ph.D. in History from New York University. Her work examines the intersections of digital humanities, history, and social data.",
    imageUrl: images.faculty.shrout,
    email: "ashrout@bates.edu",
    research: ["Digital Humanities", "Data Visualization", "Historical Data Analysis", "Critical Race Theory", "Gender and Technology"],
    website: "https://www.bates.edu/faculty-expertise/profile/anelise-h-shrout/"
  },
  {
    id: 5,
    name: "Andy E. Ricci",
    title: "Assistant Professor of Digital and Computational Studies",
    background: "Ph.D. in Computer Science from Brown University. His research focuses on human-computer interaction, educational technology, and computational learning environments.",
    imageUrl: images.faculty.ricci,
    email: "aricci@bates.edu",
    research: ["Human-Computer Interaction", "Human-Robot Interaction", "Computer Mediated Communication", "Robotics"]
  },
  {
    id: 6,
    name: "Chris Agbonkhese",
    title: "Visiting Lecturer in Digital and Computational Studies",
    background: "Ph.D. in Computer Science from Morgan State University. His research explores the intersection of artificial intelligence, computer vision, and their practical applications.",
    imageUrl: images.faculty.agbonkhese,
    email: "cagbonkh@bates.edu",
    research: ["Artificial Intelligence", "Computer Vision", "Deep Learning"]
  }
]; 