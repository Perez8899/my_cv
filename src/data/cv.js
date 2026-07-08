export const profile = {
  name: 'Héctor José Pérez',
  title: 'Ingeniero de Sistemas · Desarrollador Full Stack',
  email: 'hectorjp43@gmail.com',
  phone: '+506 89448308',
  location: 'Río Cuarto, Alajuela, Costa Rica',
  linkedin: 'www.linkedin.com/in/hector-jose-perez-624763290 ',
  github: 'https://github.com/Perez8899',
  summary:
    'Ingeniero de Sistemas y Desarrollador Full Stack con experiencia en desarrollo de aplicaciones ' +
'empresariales utlizando Java, Spring Boot, React y C#. Experiencia en el diseño de APIs REST, ' +
'autenticacion JWT, documentacion con Swagger/OpenAPI, pruebas con Postman y pruevas basadas ' +
'en arquitectur de microservicios. Con conocimientos en Docker, Git/GitHub, bases de datos ' +
'relacionales (MSQL,Posgrest y Oracle) y metodologias agiles Scrum.',
};

export const skills = [
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'React', 'ASP.NET Core (MVC)'],
  },
  {
    category: 'Backend',
    items: ['Java', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'REST APIs', 'JWT', 'C#'],
  },
  {
    category: 'Bases de Datos',
    items: ['MySQL', 'PostgreSQL', 'Oracle', 'SQL Optimización'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['Docker', 'Docker Compose', 'Git', 'GitHub', 'Git Flow'],
  },
  {
    category: 'API & Testing',
    items: ['Postman', 'Swagger/OpenAPI', 'JSON'],
  },
  {
    category: 'Metodologías Ágiles',
    items: ['Scrum'],
  },
];

export const experience = [
  {
    title: 'Ecommerce para Restaurante | Soda Saira',
    type: 'Proyecto Universitario',
    period: 'Sep 2024 – Ago 2025',
    highlights: [
      'API RESTful con Spring Boot siguiendo principios REST y documentación OpenAPI.',
      'Autenticación JWT y roles (admin/cliente).',
      'Desarrollo full-stack: backend Java Spring Boot, frontend React y MySQL.',
    ],
    link: 'https://github.com/Perez8899/foodOrderinPerezJavaSpring/tree/master',
  },
  {
    title: 'Sistema de Inventario',
    type: 'Freelancer',
    period: 'Ago 2025 – Ene 2026',
    highlights: [
      'Reducción del 70% en tiempo de inventariado manual con Java Spring Boot y React.',
      'Alertas automáticas de stock mínimo en 3 categorías críticas.',
      'Aplicación contenerizada con Docker.',
    ],
    link: 'https://github.com/Perez8899/inventario_springBoot_Docker',
  },
  {
    title: 'Sistema de Compras y Ventas',
    type: 'Freelancer',
    period: 'Sep 2025 – Feb 2026',
    highlights: [
      'Automatización del ciclo compras-ventas-inventario con Spring Boot, PostgreSQL y React.',
      'Reducción del 85% en tiempo de facturación manual.',
      'Autenticación JWT, roles (admin/vendedor/cliente) y cálculo automático de impuestos.',
    ],
    link: 'https://github.com/Perez8899/Spring-Boot-API-compras-ventas/tree/master',
  },
];

export const education = [
  {
    degree: 'Bachiller en Ingeniería de Sistemas',
    institution: 'Universidad Católica de Costa Rica',
    period: 'Feb 2020 – Ago 2026',
  },
  {
    degree: 'Academia de Inglés (en curso)',
    institution: 'Universidad Fidelitas',
    period: 'Ene 2025 – Presente',
  },
];

export const certifications = [
  { name: 'Desarrollo Backend API REST con Spring Boot', issuer: 'Blumbit', date: 'Nov 2025' },
  { name: 'Diseño y Análisis Bases de Datos Relacional (SQL) y NoSQL', issuer: 'Blumbit', date: 'Sep 2025' },
  { name: 'Docker y Docker Compose', issuer: 'Blumbit', date: 'Sep 2025' },
  { name: 'Git y GitHub', issuer: 'Blumbit', date: 'Ago 2025' },
  { name: 'Scrum Foundation Professional (SFPC)', issuer: 'CertiProf', date: 'Jun 2023' },
  { name: 'Desarrollo Web', issuer: 'Next_U', date: 'Oct 2019' },
];

export const navLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'educacion', label: 'Educación' },
  { id: 'contacto', label: 'Contacto' },
];
