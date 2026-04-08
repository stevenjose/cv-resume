export const cvPerfil = {
  id: 'perfil-1',
  name: 'Steven Jose',
  profession: 'Desarrollador de Software Senior',
  bio: 'Desarrollador de Software Senior con más de 3 años en Mecalux (Barcelona). Especializado en Java, Spring Boot, Angular y arquitecturas de microservicios. Apasionado por el Clean Code, SOLID y las buenas prácticas de ingeniería de software.',
  address: 'Barcelona, España',
  email: 'lopezajoseg@gmail.com',
};

export const cvExperience = [
  {
    id: 'exp-1',
    jobTitle: 'Desarrollador de Software Senior',
    company: 'Mecalux',
    location: 'Barcelona, España',
    startDate: 'Junio 2022',
    endDate: 'Presente',
    jobDescription:
      'Desarrollo de aplicaciones empresariales con Java y Spring Boot. Integración con Alfresco ECM para gestión documental. Implementación de microservicios con RabbitMQ. Monitoreo con ELK Stack (Kibana). Contenedores con Docker. Frontend con Angular, TypeScript y RxJS. Testing de mutación con PIT. Clean Code y principios SOLID.',
    web: 'https://www.mecalux.es',
    stack: ['Java', 'Spring Boot', 'Angular', 'Docker', 'RabbitMQ', 'Kibana', 'Alfresco'],
  },
  {
    id: 'exp-2',
    jobTitle: 'Desarrollador Full Stack',
    company: 'Freelance',
    location: 'Remoto',
    startDate: '2018',
    endDate: 'Mayo 2022',
    jobDescription:
      'Desarrollo de aplicaciones web y móviles con tecnologías modernas. Proyectos con React, Angular, Node.js y Java. Integración con APIs REST. Trabajo bajo metodologías ágiles.',
    web: 'https://github.com/stevenjose',
    stack: ['React', 'Angular', 'Node.js', 'Java', 'JavaScript'],
  },
];

export const cvSkills = [
  { id: 'sk-1', name: 'Java', percentage: '90%', category: 'Backend' },
  { id: 'sk-2', name: 'Spring Boot', percentage: '88%', category: 'Backend' },
  { id: 'sk-3', name: 'Angular', percentage: '85%', category: 'Frontend' },
  { id: 'sk-4', name: 'TypeScript', percentage: '83%', category: 'Frontend' },
  { id: 'sk-5', name: 'RxJS', percentage: '80%', category: 'Frontend' },
  { id: 'sk-6', name: 'Docker', percentage: '82%', category: 'DevOps' },
  { id: 'sk-7', name: 'RabbitMQ', percentage: '78%', category: 'Backend' },
  { id: 'sk-8', name: 'Kibana / ELK', percentage: '75%', category: 'DevOps' },
  { id: 'sk-9', name: 'Alfresco ECM', percentage: '80%', category: 'Integración' },
  { id: 'sk-10', name: 'Testing Mutación (PIT)', percentage: '76%', category: 'Testing' },
  { id: 'sk-11', name: 'Clean Code / SOLID', percentage: '92%', category: 'Metodología' },
  { id: 'sk-12', name: 'Git / GitHub', percentage: '88%', category: 'DevOps' },
];

export const cvPortafolio = [
  {
    id: 'proj-1',
    name: 'Integración Alfresco ECM',
    date: '2023',
    description:
      'Sistema de gestión documental empresarial integrado con Alfresco ECM usando Spring Boot. Automatización de flujos de trabajo y almacenamiento de documentos.',
    url: 'https://github.com/stevenjose',
  },
  {
    id: 'proj-2',
    name: 'Microservicios con RabbitMQ',
    date: '2023',
    description:
      'Arquitectura de microservicios con comunicación asíncrona mediante RabbitMQ. Implementado con Spring Boot y Docker para contenedores.',
    url: 'https://github.com/stevenjose',
  },
  {
    id: 'proj-3',
    name: 'Logging y Monitoreo con Kibana',
    date: '2024',
    description:
      'Sistema de monitoreo y análisis de logs con ELK Stack (Elasticsearch, Logstash, Kibana). Dashboards personalizados para seguimiento de métricas de aplicación.',
    url: 'https://github.com/stevenjose',
  },
  {
    id: 'proj-4',
    name: 'Testing de Mutación',
    date: '2024',
    description:
      'Implementación de testing de mutación con PIT (Pitest) en proyectos Java. Mejora de la calidad del código y cobertura real de tests.',
    url: 'https://github.com/stevenjose',
  },
];

export const cvEducation = [
  {
    id: 'edu-1',
    degree: 'Ingeniería en Sistemas',
    institution: 'Universidad',
    startDate: '2010',
    endDate: '2015',
    description: 'Formación en ingeniería de software, algoritmos, estructuras de datos y sistemas distribuidos.',
  },
];

export const cvCertificate = [
  {
    id: 'cert-1',
    name: 'Java SE Developer',
    institution: 'Oracle',
    date: '2022',
    description: 'Certificación en desarrollo Java SE.',
    url: 'https://www.oracle.com/java',
  },
  {
    id: 'cert-2',
    name: 'Angular Developer',
    institution: 'Google / Udemy',
    date: '2021',
    description: 'Desarrollo de aplicaciones con Angular y TypeScript.',
    url: 'https://angular.io',
  },
];
