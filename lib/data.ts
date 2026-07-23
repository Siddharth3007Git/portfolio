export const profile = {
  name: "Siddharth Jagadale",
  roles: [
    "Python Developer",
    "FastAPI Developer",
    "Machine Learning Enthusiast",
    "Backend Developer",
    "Computer Vision Developer",
  ],
  tagline:
    "I build scalable web applications and AI-powered solutions using Python, FastAPI, React, and Machine Learning.",
  location: "Pune, Maharashtra",
  email: "siddharthjagadale50@gmail.com",
  phone: "+91 9359316735",
  github: "https://github.com/Siddharth3007Git",
  githubUser: "Siddharth3007Git",
  linkedin: "https://linkedin.com/in/siddharthjagadale",
  resumeFile: "/resume.pdf",
  photo: "/profile.jpg",
};

export const about = {
  summary:
    "I'm an Information Technology undergraduate at Smt. Kashibai Navale College of Engineering, Pune, with a strong hands-on foundation in Python, FastAPI, React.js, Machine Learning, Deep Learning, and Computer Vision. I enjoy building full-stack web applications and AI-powered software, from designing REST APIs and backend architecture to preprocessing data and training models. I'm currently deepening my skills through a Data Science program, and I care about writing clean, maintainable code and understanding systems from the ground up. My goal is to grow into a software engineer who can move fluidly between backend engineering and applied machine learning.",
  points: [
    "Information Technology Student, SKNCOE Pune (Batch 2024–2028)",
    "Backend Developer — Python, FastAPI, REST API design",
    "Machine Learning & Deep Learning — Scikit-learn, TensorFlow, Keras",
    "Computer Vision — OpenCV, YOLOv11, real-time inference",
    "Frontend — React.js for responsive, production-grade UIs",
    "A continuous learner who enjoys solving hard, ambiguous problems",
  ],
  stats: [
    { label: "Projects Built", value: "3+" },
    { label: "Technologies", value: "20+" },
    { label: "Internship", value: "1 Active" },
    { label: "Mindset", value: "Always Learning" },
  ],
};

export const skills = {
  Programming: ["Python", "SQL", "JavaScript", "HTML5", "CSS3"],
  Frameworks: ["FastAPI", "React.js", "TensorFlow", "Keras", "Scikit-learn"],
  "Data & ML": ["NumPy", "Pandas", "OpenCV", "Matplotlib", "Machine Learning"],
  Databases: ["MySQL", "PostgreSQL"],
  Tools: ["Git", "GitHub", "Docker", "Postman", "Swagger UI", "VS Code"],
};

export const experience = [
  {
    company: "CodeSpyder Technologies Pvt. Ltd.",
    role: "Student – Data Science Program",
    period: "Dec 2025 – Present",
    location: "Pune, Maharashtra",
    points: [
      "Developed practical knowledge of Machine Learning, Deep Learning, and Data Analysis through hands-on projects using real-world datasets.",
      "Built data preprocessing and visualization pipelines using Python, NumPy, Pandas, and Matplotlib.",
      "Implemented machine learning models for classification and regression using Scikit-learn and evaluated model performance with standard metrics.",
      "Developed and trained deep learning models using TensorFlow and Keras for predictive and computer vision tasks.",
      "Performed feature engineering, model optimization, and data analysis while following industry-standard machine learning workflows.",
    ],
  },
];

export const projects = [
  {
    slug: "ai-object-detection",
    title: "AI Object Detection System",
    tagline: "Real-time computer vision, served over a modular API.",
    overview:
      "A full-stack AI-powered object detection application with a FastAPI backend and a React.js frontend. YOLOv11 is integrated with OpenCV to run real-time detection on images, videos, and live webcam streams, exposed through clean REST endpoints for upload, inference, and result retrieval.",
    stack: ["Python", "FastAPI", "React.js", "YOLOv11", "OpenCV"],
    features: [
      "Real-time object detection on images, video, and webcam streams",
      "YOLOv11 model integrated with OpenCV for inference",
      "RESTful APIs for media upload, detection, and result retrieval",
      "Modular backend architecture for maintainability and scale",
    ],
    github: "https://github.com/Siddharth3007Git/AI-Object-Detection-System",
    repo: "AI-Object-Detection-System",
    theme: "vision" as const,
  },
  {
    slug: "urbanwear",
    title: "UrbanWear",
    tagline: "Full-stack AI-ready e-commerce, built for scale.",
    overview:
      "A full-stack e-commerce platform with secure user authentication, product management, a shopping cart, and order processing. RESTful APIs built with FastAPI power the storefront, backed by MySQL, with the whole application containerized in Docker for consistent deployment.",
    stack: ["Python", "FastAPI", "React.js", "MySQL", "Docker"],
    features: [
      "Secure authentication, product management, cart, and order flow",
      "RESTful APIs built with FastAPI, backed by MySQL",
      "Responsive React.js UI across desktop and mobile",
      "Containerized with Docker; modular backend architecture",
    ],
    github: "https://github.com/Siddharth3007Git/UrbanWear-FullStack-Ecommerce",
    repo: "UrbanWear-FullStack-Ecommerce",
    theme: "ecommerce" as const,
  },
  {
    slug: "car-price-prediction",
    title: "Car Price Prediction",
    tagline: "Regression modeling turned into a usable price estimator.",
    overview:
      "A machine learning system that estimates used-car prices from listing data. The pipeline covers data cleaning and feature engineering through model training and evaluation, comparing regression approaches to arrive at reliable, explainable predictions.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    features: [
      "End-to-end data preprocessing and feature engineering",
      "Multiple regression models trained and compared",
      "Model evaluation with standard performance metrics",
      "Clear, interpretable price predictions from listing data",
    ],
    github: "https://github.com/Siddharth3007Git/Car-Price-Prediction",
    repo: "Car-Price-Prediction",
    theme: "prediction" as const,
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering",
    school: "Smt. Kashibai Navale College of Engineering",
    university: "Savitribai Phule Pune University",
    location: "Pune, Maharashtra",
    period: "2024 – 2028",
    detail:
      "Bachelor of Engineering (B.E.) in Information Technology. Currently strengthening my knowledge in Backend Development, Machine Learning, Deep Learning, Computer Vision, and Full Stack Development.",
  },

  {
    degree: "Junior College",
    school: "Jayashri Thorat Junior College",
    university: "",
    location: "Maharashtra, India",
    period: "2021 – 2023",
    detail: "Grade:  First class with distinction",
  },

  {
    degree: "Higher Secondary School",
    school: "Trimbakrao Kale Vidhyalay",
    university: "",
    location: "Maharashtra, India",
    period: "2009 – 2021",
    detail: "Score: 75.00%",
  },
];