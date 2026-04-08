import img1 from '../assets/img/jgla.jpeg';

// ──────────────────────────────────────────────
//  Static CV data for Steven Jose
//  This data is used as the Redux initial state so
//  the app renders immediately without Firebase.
//  Firebase can still override individual slices
//  when it returns non-empty results.
// ──────────────────────────────────────────────

export const cvAvatar = img1;

export const cvPerfil = {
  id: 'steven-jose',
  name: 'Steven Jose',
  profession: 'Desarrollador de Software',
  bio: 'Desarrollador de Software con más de 3 años de experiencia en Mecalux, Barcelona. Especializado en Java, Spring Boot y Angular, con sólidos conocimientos en arquitectura de microservicios, testing de mutación y gestión documental con Alfresco. Apasionado del Clean Code, los principios SOLID y las buenas prácticas de ingeniería.',
  address: 'Barcelona, España',
  email: 'lopezajoseg@gmail.com',
  tlf: '',
  zip: '',
};

export const cvSocial = [
  { name: 'github',   url: 'https://github.com/stevenjose/' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/joselopezarias/' },
];

export const cvExperience = [
  {
    id: 1,
    jobTitle: 'Desarrollador de Software',
    company: 'Mecalux',
    location: 'Barcelona, España',
    startDate: 'Junio 2022',
    endDate: 'Presente',
    current: true,
    jobDescription:
      'Desarrollo y mantenimiento de soluciones backend con Java y Spring Boot para el sistema de gestión de almacenes (WMS) de Mecalux. Implementación de integraciones con Alfresco ECM para la gestión documental, arquitectura de mensajería asíncrona con RabbitMQ, containerización con Docker y monitoreo centralizado mediante el stack ELK (Kibana). Aplicación de testing de mutación con PIT para garantizar la calidad del código.',
    responsibilities: [
      'Desarrollo backend con Java 11+ y Spring Boot (Spring Data, Spring Security, Spring MVC)',
      'Diseño e implementación de APIs RESTful y microservicios',
      'Integración con Alfresco ECM para la gestión y almacenamiento de documentos empresariales',
      'Mensajería asíncrona y eventos de dominio con RabbitMQ',
      'Containerización y orquestación con Docker y Docker Compose',
      'Monitoreo y análisis de logs con Kibana y el stack ELK',
      'Testing unitario, de integración y de mutación con PIT (Pitest)',
      'Desarrollo frontend con Angular, TypeScript y RxJS',
      'Aplicación de Clean Code, principios SOLID y revisiones de código',
    ],
    technologies: [
      'Java', 'Spring Boot', 'Spring Data', 'Spring Security',
      'Angular', 'TypeScript', 'RxJS',
      'RabbitMQ', 'Docker', 'Kibana', 'Elasticsearch',
      'Alfresco ECM', 'PIT / Mutation Testing',
      'Git', 'REST API', 'SQL',
    ],
    web: 'https://www.mecalux.es/',
  },
];

export const cvSkills = [
  // Backend
  { id: 1,  name: 'Java',                  percentage: '90%',  category: 'Backend',    years: 3 },
  { id: 2,  name: 'Spring Boot',           percentage: '88%',  category: 'Backend',    years: 3 },
  { id: 3,  name: 'Spring Data / Security',percentage: '82%',  category: 'Backend',    years: 3 },
  { id: 4,  name: 'Mutation Testing (PIT)',percentage: '75%',  category: 'Backend',    years: 2 },
  { id: 5,  name: 'REST API Design',       percentage: '85%',  category: 'Backend',    years: 3 },
  // Frontend
  { id: 6,  name: 'Angular',               percentage: '80%',  category: 'Frontend',   years: 3 },
  { id: 7,  name: 'TypeScript',            percentage: '80%',  category: 'Frontend',   years: 3 },
  { id: 8,  name: 'RxJS',                  percentage: '70%',  category: 'Frontend',   years: 2 },
  { id: 9,  name: 'React',                 percentage: '68%',  category: 'Frontend',   years: 2 },
  // DevOps & Infra
  { id: 10, name: 'Docker',                percentage: '78%',  category: 'DevOps',     years: 3 },
  { id: 11, name: 'RabbitMQ',              percentage: '72%',  category: 'DevOps',     years: 2 },
  { id: 12, name: 'Kibana / ELK Stack',   percentage: '70%',  category: 'DevOps',     years: 2 },
  // Gestión documental
  { id: 13, name: 'Alfresco ECM',          percentage: '73%',  category: 'Documental', years: 2 },
  // Metodología
  { id: 14, name: 'Clean Code & SOLID',    percentage: '88%',  category: 'Metodología',years: 3 },
  { id: 15, name: 'Git & CI/CD',           percentage: '85%',  category: 'Metodología',years: 3 },
  { id: 16, name: 'SQL / PostgreSQL',      percentage: '75%',  category: 'Bases de Datos', years: 3 },
];

export const cvEducation = [
  {
    id: 1,
    degree: 'Ingeniería en Sistemas / Informática',
    institution: 'Universidad',
    startDate: '2014',
    endDate: '2019',
    description: 'Formación en Ingeniería de Software, Estructuras de Datos, Algoritmos, Bases de Datos, Redes y Arquitectura de Sistemas.',
  },
];

export const cvCertificate = [
  {
    id: 1,
    name: 'Java SE 11 Developer',
    institution: 'Oracle',
    date: '2022',
    description: 'Certificación oficial de Oracle en desarrollo con Java SE 11.',
    url: 'https://education.oracle.com/java-se-11-developer/pexam_1Z0-819',
  },
  {
    id: 2,
    name: 'Spring Professional',
    institution: 'VMware / Broadcom',
    date: '2023',
    description: 'Certificación en desarrollo con el ecosistema Spring Framework.',
    url: 'https://www.vmware.com/learning/certification/spring-pro-develop-exam.html',
  },
  {
    id: 3,
    name: 'Angular Developer',
    institution: 'Google / Udemy',
    date: '2022',
    description: 'Formación y certificación avanzada en Angular, TypeScript y RxJS.',
    url: '#',
  },
  {
    id: 4,
    name: 'Docker Fundamentals',
    institution: 'Docker Inc.',
    date: '2023',
    description: 'Containerización, imágenes, volúmenes, redes y Docker Compose.',
    url: 'https://training.docker.com/',
  },
  {
    id: 5,
    name: 'Clean Code & TDD',
    institution: 'Udemy',
    date: '2022',
    description: 'Principios SOLID, Clean Code, Test-Driven Development y patrones de diseño.',
    url: '#',
  },
];

export const cvPortafolio = [
  {
    id: 1,
    name: 'Integración Alfresco ECM',
    date: '2022 – 2024',
    description:
      'Módulo de integración con Alfresco ECM para la gestión y almacenamiento de documentos empresariales dentro del WMS de Mecalux. Implementa flujos documentales, búsqueda avanzada y versionado de archivos.',
    technologies: ['Java', 'Spring Boot', 'Alfresco REST API', 'Docker'],
    role: 'Backend Developer',
    company: 'Mecalux',
    url: 'https://www.mecalux.es/',
  },
  {
    id: 2,
    name: 'Microservicios con RabbitMQ',
    date: '2023 – 2024',
    description:
      'Arquitectura de microservicios con comunicación asíncrona mediante RabbitMQ. Incluye publicación/suscripción de eventos de dominio, dead letter queues y retry policies.',
    technologies: ['Java', 'Spring Boot', 'RabbitMQ', 'Docker', 'Spring AMQP'],
    role: 'Backend Developer',
    company: 'Mecalux',
    url: 'https://www.mecalux.es/',
  },
  {
    id: 3,
    name: 'Sistema de Monitoreo ELK',
    date: '2023',
    description:
      'Implementación de logging centralizado y monitoreo en tiempo real con el stack ELK. Dashboards en Kibana para análisis de errores, trazabilidad y alertas proactivas.',
    technologies: ['Kibana', 'Elasticsearch', 'Logstash', 'Docker'],
    role: 'DevOps / Backend Developer',
    company: 'Mecalux',
    url: 'https://www.mecalux.es/',
  },
  {
    id: 4,
    name: 'CV Resume App',
    date: '2021',
    description:
      'Aplicación web personal de CV interactivo construida con React, Redux y Firebase. Diseño responsive con Bootstrap y CSS moderno.',
    technologies: ['React', 'Redux', 'Firebase', 'Bootstrap'],
    role: 'Full Stack Developer',
    company: 'Proyecto Personal',
    url: 'https://github.com/stevenjose/cv-resume',
  },
];

export const cvLanguages = [
  { id: 1, name: 'Español', level: 'Nativo',    percentage: '100%', flag: '🇪🇸' },
  { id: 2, name: 'Inglés',  level: 'B2 – Fluido', percentage: '72%',  flag: '🇬🇧' },
];

// Assembled initial Redux state
const cvData = {
  avatar: img1,
  perfil: cvPerfil,
  social: cvSocial,
  experience: cvExperience,
  portafolio: cvPortafolio,
  education: cvEducation,
  certificate: cvCertificate,
  skills: cvSkills,
  languages: cvLanguages,
};

export default cvData;
