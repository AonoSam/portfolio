export interface ProjectScreenshot {
  title: string;
  description: string;
  image: string;
}

export interface Project {
  title: string;
  slug: string;
  category: string;
  description: string;
  year: string;
  technologies: string[];
  features: string[];
  screenshots: ProjectScreenshot[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "VetPlus",
    slug: "vetplus",
    category: "Veterinary Technology Platform",
    year: "2026",
    description:
      "A veterinary management platform designed to help clinics manage animal records, appointments, vaccinations, inventory and other veterinary operations.",
    technologies: [
      "React Native",
      "TypeScript",
      "Django",
      "PostgreSQL",
      "REST API",
    ],
    features: [
      "Animal medical records",
      "Appointment management",
      "Vaccination tracking",
      "Inventory management",
      "Veterinary workflows",
    ],
    screenshots: [
  {
    title: "Dashboard",
    description:
      "The main VetPlus dashboard providing an overview of veterinary operations.",
    image: "/projects/vetplus/dashboard.png",
  },
  {
    title: "Animal Management",
    description:
      "Management interface for viewing and maintaining animal medical records.",
    image: "/projects/vetplus/animals.png",
  },
  {
    title: "Appointments",
    description:
      "Appointment management interface for veterinary clinics.",
    image: "/projects/vetplus/appointments.png",
  },
  {
    title: "Login Screen",
    description:
      "The login screen for the VetPlus application.",
    image: "/projects/vetplus/login.png",
  },
],
    github: "https://github.com/EngGlo/VetPlus",
    demo: "#",
    featured: true,
  },

  {
    title: "AI Breast Cancer Detection System",
    slug: "breast-cancer-ai",
    category: "Artificial Intelligence & Machine Learning",
    year: "2026",
    description:
      "An AI-powered system combining clinical and image-based approaches to assist with breast cancer risk prediction and analysis.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TensorFlow",
      "Scikit-learn",
    ],
    features: [
      "Clinical data prediction",
      "Histopathology image analysis",
      "SVM model",
      "CNN model",
      "Hybrid prediction",
    ],
    screenshots: [
  {
    title: "AI Dashboard",
    description:
      "Dashboard for monitoring breast cancer prediction results and patient analysis.",
    image: "/projects/breast-cancer-ai/dashboard.png",
  },
  {
    title: "Clinical Prediction",
    description:
      "Interface for submitting clinical features and generating a prediction.",
    image: "/projects/breast-cancer-ai/prediction.png",
  },
  {
    title: "Image Analysis",
    description:
      "Histopathology image analysis using the computer vision model.",
    image: "/projects/breast-cancer-ai/image-analysis.png",
  },
  {
    title: "System Architecture",
    description:
      "Architecture of the frontend, FastAPI backend and machine learning models.",
    image: "/projects/breast-cancer-ai/architecture.png",
  },
 ],
    github: "#",
    demo: "#",
    featured: true,
  },

  {
    title: "Fleet Management System",
    slug: "fleet-management",
    category: "Full-Stack Application",
    year: "2026",
    description:
      "A fleet management platform for managing vehicles, drivers, maintenance, payments and operational information.",
    technologies: [
      "Django",
      "React",
      "MySQL",
      "REST API",
      "M-Pesa",
    ],
    features: [
      "Vehicle management",
      "Driver management",
      "Maintenance tracking",
      "Payment management",
      "Reports",
    ],
    screenshots: [
  {
    title: "Fleet Dashboard",
    description:
      "Overview of vehicles, drivers, maintenance and fleet activity.",
    image: "/projects/fleet-management/finance.png",
  },
  {
    title: "Driver Dashboard",
    description:
      "Driver's login interface.",
    image: "/projects/fleet-management/driver.png",
  },
  {
    title: "Payments",
    description:
      "Payment and financial management interface.",
    image: "/projects/fleet-management/payments.png",
  },
  {
    title: "Landing Page",
    description:
      "Landing page for the fleet management system.",
    image: "/projects/fleet-management/hero.png",
  },
 ],
    github: "https://github.com/AonoSam/Fleet_Management_System",
    demo: "https://fleetmanagementsystem-mocha.vercel.app/",
    featured: true,
  },

  {
    title: "Rental Management System",
    slug: "rental-management",
    category: "Full-Stack Application",
    year: "2026",
    description:
      "A rental management system designed to help landlords manage rental properties, tenants, caretakers and payments.",
    technologies: [
      "Java",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
    ],
    features: [
      "Property management",
      "Landlord management",
      "Tenant management",
      "Caretaker management",
      "Payment services",
    ],
    screenshots: [
  {
    title: "Dashboard",
    description:
      "Interface for managing rental properties.",
    image: "/projects/rental-management/admin.png",
  },
  {
    title: "Property Management",
    description:
      "Interface for managing rental properties.",
    image: "/projects/rental-management/properties.png",
  },
  {
    title: "Tenant Management",
    description:
      "Tenants dashboard page.",
    image: "/projects/rental-management/tenants.png",
  },
  {
    title: "Payments",
    description:
      "Payment management interface for rental operations.",
    image: "/projects/rental-management/payments.png",
  },
  {
    title: "Caretaker Management",
    description:
      "Caretaker's page where they can manage their tenants and attend to maintenance requests.",
    image: "/projects/rental-management/caretaker.png",
  },
  
],
    github: "https://github.com/AonoSam/Rental_Management_System",
    demo: "#",
    featured: true,
  },

  {
    title: "Retail Management System",
    slug: "retail-management",
    category: "Desktop Application",
    year: "2026",
    description:
      "A retail management system designed to help businesses manage products, employees and suppliers.",
    technologies: [
      "Python",
      "Tkinter",
      "MySQL",
    ],
    features: [
      "Product management",
      "Employee management",
      "Supplier management",
      "Role-based authentication",
    ],
    screenshots: [
  {
    title: "Product Management",
    description:
      "Interface for managing retail products and inventory.",
    image: "/projects/retail-management/products.png",
  },
  {
    title: "Employee Management",
    description:
      "Employee management and role-based access interface.",
    image: "/projects/retail-management/employees.png",
  },
  {
    title: "Supplier Management",
    description:
      "Interface for managing suppliers and supplier information.",
    image: "/projects/retail-management/suppliers.png",
  },
],
    github: "https://github.com/AonoSam/Tkinter_Inventory",
    featured: false,
  },
];