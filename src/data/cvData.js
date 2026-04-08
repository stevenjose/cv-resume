import avatar from '../assets/img/jgla.jpeg';

export const cvAvatar = avatar;

export const cvPerfil = {
  id: 'steven-jose',
  name: 'Steven Jose',
  profession: 'Desarrollador de Software Senior',
  bio: 'Desarrollador Senior con más de 3 años en Mecalux (Barcelona). Especializado en arquitectura backend escalable con Java y Spring Boot, frontend con Angular y TypeScript, y buenas prácticas como Clean Code, SOLID y Mutation Testing. Apasionado por la calidad del código y las soluciones que generan impacto real.',
  address: 'Barcelona, España',
  email: 'lopezajoseg@gmail.com',
  tlf: '+34 XXXXXXXXX',
  zip: '08001',
};

export const cvSocial = [
  { name: 'github', url: 'https://github.com/stevenjose/' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/joselopezarias/' },
];

export const cvExperience = [
  {
    id: 'mecalux-senior',
    jobTitle: 'Desarrollador de Software Senior',
    company: 'Mecalux',
    web: 'https://www.mecalux.es',
    startDate: 'Jun 2022',
    endDate: 'Presente',
    jobDescription:
      'Desarrollo de soluciones empresariales backend y frontend para sistemas de gestión de almacenes (WMS). Arquitectura con Java, Spring Boot, Angular y TypeScript. Integración con Alfresco ECM, microservicios con RabbitMQ, containerización con Docker y monitoreo con el ELK Stack (Kibana). Implementación de Mutation Testing (PIT) y prácticas de Clean Code y SOLID.',
    technologies: [
      'Java', 'Spring Boot', 'Angular', 'TypeScript',
      'Docker', 'RabbitMQ', 'Kibana', 'Alfresco',
    ],
    responsibilities: [
      'Arquitectura backend con Java y Spring Boot',
      'Integración con Alfresco ECM para gestión documental',
      'Microservicios con RabbitMQ (comunicación asíncrona)',
      'Testing de Mutación con PIT para máxima cobertura',
      'Containerización y orquestación con Docker',
      'Monitoreo y observabilidad con Kibana / ELK Stack',
      'Frontend con Angular y TypeScript (RxJS)',
      'Clean Code, SOLID Principles y Code Reviews',
      'Mentoring a desarrolladores junior',
    ],
    achievements: [
      'Integración Alfresco ECM implementada exitosamente',
      'Cobertura de testing mejorada con Mutation Testing',
      'Tiempo de deployment reducido con Docker CI/CD',
      'Arquitectura de microservicios optimizada y escalable',
    ],
  },
];

export const cvSkills = [
  { name: 'Java',                   percentage: '95%' },
  { name: 'Spring Boot',            percentage: '95%' },
  { name: 'Spring Framework',       percentage: '90%' },
  { name: 'REST API',               percentage: '95%' },
  { name: 'Angular',                percentage: '85%' },
  { name: 'TypeScript',             percentage: '85%' },
  { name: 'RxJS',                   percentage: '80%' },
  { name: 'Docker',                 percentage: '80%' },
  { name: 'RabbitMQ',               percentage: '75%' },
  { name: 'Kibana / ELK',           percentage: '80%' },
  { name: 'Alfresco ECM',           percentage: '80%' },
  { name: 'Mutation Testing (PIT)', percentage: '75%' },
  { name: 'Clean Code',             percentage: '95%' },
  { name: 'SOLID Principles',       percentage: '90%' },
  { name: 'Unit Testing',           percentage: '90%' },
  { name: 'Git',                    percentage: '90%' },
];

export const cvEducation = [
  {
    id: 'edu-1',
    degree: 'Grado en Ingeniería Informática',
    institution: 'Universidad / Instituto de Formación',
    field: 'Ingeniería de Software',
    startDate: '20XX',
    endDate: '20XX',
    description: 'Especialización en programación, arquitectura de software y sistemas distribuidos.',
  },
];

export const cvCertificate = [
  {
    id: 'cert-spring',
    name: 'Spring Professional Developer',
    institution: 'VMware / Pivotal',
    date: '2023-06-15',
    description:
      'Certificación oficial en desarrollo profesional con el ecosistema Spring (Spring Core, Spring Boot, Spring Data, Spring Security).',
    url: '',
  },
  {
    id: 'cert-cleancode',
    name: 'Clean Code Certificate',
    institution: 'Robert C. Martin Institute',
    date: '2022-12-10',
    description:
      'Certificación en principios de código limpio, refactoring y buenas prácticas de desarrollo de software.',
    url: '',
  },
];

export const cvPortafolio = [
  {
    id: 'proj-alfresco',
    name: 'Integración Alfresco ECM',
    date: '2023',
    description:
      'Sistema completo de integración con Alfresco para gestión empresarial de documentos en Mecalux. Arquitectura limpia con 100% test coverage y Mutation Testing.',
    url: '',
    technologies: ['Java', 'Spring Boot', 'Alfresco', 'RabbitMQ', 'Docker'],
    company: 'Mecalux',
  },
  {
    id: 'proj-microservices',
    name: 'Arquitectura de Microservicios',
    date: '2023-2024',
    description:
      'Diseño e implementación de microservicios escalables con RabbitMQ para comunicación asíncrona. Alta disponibilidad, integration testing y Docker deployment.',
    url: '',
    technologies: ['Java', 'Spring Boot', 'RabbitMQ', 'Docker', 'PostgreSQL'],
    company: 'Mecalux',
  },
  {
    id: 'proj-elk',
    name: 'ELK Stack para Logging y Monitoreo',
    date: '2024',
    description:
      'Infraestructura de logging centralizado y monitoreo en tiempo real con dashboards personalizados, alertas automáticas y análisis centralizado.',
    url: '',
    technologies: ['Elasticsearch', 'Logstash', 'Kibana', 'Docker'],
    company: 'Mecalux',
  },
];
