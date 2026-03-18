// ─── Personal Info ───────────────────────────────────────────────────────────
export const profile = {
  name:       'Charith Anupama',
  role:       'Software Engineer',
  email:      'charith20anupama@gmail.com',
  phone:      '+94 71 332 6622',
  location:   'Hapugala, Galle, Sri Lanka',
  github:     'https://github.com/CharithAnupama58',
  linkedin:   'https://www.linkedin.com/in/charith-anupama20',
  summary:    'HackerRank-certified engineer specialising in MERN stack, microservices, and machine learning. Building scalable healthcare software at MobiOs while researching ML diagnostics at University of Kelaniya.',
  roles:      ['Full Stack Engineer', 'MERN Stack Developer', 'ML Enthusiast', 'Backend Developer', 'Problem Solver'],
  tags:       ['MERN Stack', 'Microservices', 'Machine Learning', 'PostgreSQL', 'Agile/Scrum', 'WebSocket'],
}

// ─── Skills ──────────────────────────────────────────────────────────────────
export const skills = [
  {
    category: 'Programming Languages',
    items:    ['Java', 'Python', 'JavaScript', 'SQL', 'C++', 'Dart'],
  },
  {
    category: 'Web Development',
    items:    ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'HTML/CSS', 'REST APIs', 'WebSocket', 'Stripe'],
  },
  {
    category: 'Tools & Frameworks',
    items:    ['PostgreSQL', 'MySQL', 'TensorFlow', 'Keras', 'Scikit-learn', 'Kafka', 'Postman', 'Git', 'NumPy', 'Pandas'],
  },
  {
    category: 'Methodologies',
    items:    ['Agile/Scrum', 'Microservices', 'ClickUp', 'GitHub Flow'],
  },
]

// ─── Experience ───────────────────────────────────────────────────────────────
export const experience = [
  {
    period:  '2024 — 2025',
    role:    'Software Engineer Intern',
    company: 'MobiOs (Pvt) Ltd',
    location:'Colombo 04, Sri Lanka',
    points:  [
      'Contributed to Medica Project Series — Dental, Hospital, and Online Channeling Systems — using microservices for scalability.',
      'Applied Agile practices through sprint planning, daily stand-ups, and iterative releases.',
      'Collaborated via ClickUp and Git, assisting in design, coding, testing, and debugging of healthcare software modules.',
    ],
  },
]

// ─── Education ────────────────────────────────────────────────────────────────
export const education = [
  {
    period:      '2021 — 2025',
    degree:      'B.Sc. (Hons.) Information Technology',
    institution: 'University of Kelaniya',
    detail:      'Dept. of Industrial Management — Research: ML Framework for Sequence Classification in Medical Diagnostics',
  },
  {
    period:      '2020 — 2022',
    degree:      'Graduate Diploma in Software Engineering',
    institution: 'IJSE',
    detail:      'Institute of Java and Software Engineering',
  },
  {
    period:      '2020',
    degree:      'G.C.E Advanced Level',
    institution: 'Mahinda College, Galle',
    detail:      'Physical Science Stream',
  },
]

// ─── Certifications ───────────────────────────────────────────────────────────
export const certifications = [
  {
    title:   'Software Engineer Role Certification',
    issuer:  'HackerRank',
    date:    'Apr 2025',
    id:      '57ECB170EB46',
    icon:    '⭐',
  },
  {
    title:   'SQL (Advanced) Skill Certification',
    issuer:  'HackerRank',
    date:    'Apr 2025',
    id:      '551497CAA F30',
    icon:    '🗃️',
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id:          1,
    title:       '🎂 Cake O\' Clock System',
    category:    'Full Stack',
    description: 'Web-based bakery management with online ordering, custom cake uploads, and Stripe payment integration.',
    tech:        ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Tailwind', 'Stripe'],
    github:      'https://github.com/CharithAnupama58',
    year:        2024,
    featured:    true,
  },
  {
    id:          2,
    title:       '🌡️ Temperature Monitor',
    category:    'Full Stack',
    description: 'Real-time IoT-ready monitoring with live WebSocket notifications and automated email alerts.',
    tech:        ['React.js', 'Node.js', 'WebSocket', 'MySQL', 'Express.js'],
    github:      'https://github.com/CharithAnupama58',
    year:        2024,
    featured:    true,
  },
  {
    id:          3,
    title:       '📊 Log Analysis Tool',
    category:    'Data Engineering',
    description: 'Data pipeline for log collection, parsing, PostgreSQL storage, KPI visualisation, and real-time Kafka alerting.',
    tech:        ['Python', 'PostgreSQL', 'Kafka', 'Regex', 'JavaScript'],
    github:      'https://github.com/CharithAnupama58',
    year:        2025,
    featured:    true,
  },
  {
    id:          4,
    title:       '❤️ ECG Lab Test Multi Model',
    category:    'Machine Learning',
    description: 'Multimodal ML model classifying ECG signals and lab test features. 95% overall accuracy.',
    tech:        ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    github:      'https://github.com/CharithAnupama58',
    year:        2025,
    featured:    true,
    accuracy:    '95%',
  },
  {
    id:          5,
    title:       '🧠 ECG Classification Model',
    category:    'Deep Learning',
    description: 'Advanced ECG classifier using ConvNeXt1D + Attention Pooling. Optimised macro-F1 and interpretability.',
    tech:        ['Python', 'TensorFlow', 'Keras', 'ConvNeXt1D', 'Attention'],
    github:      'https://github.com/CharithAnupama58',
    year:        2025,
    featured:    false,
    accuracy:    '80%',
  },
  {
    id:          6,
    title:       '🍃 Tea Factory Management',
    category:    'Desktop',
    description: 'Management system for Gunawardhana Tea Factory — customer registration, payments, and profit reports.',
    tech:        ['Java', 'MySQL'],
    github:      'https://github.com/CharithAnupama58',
    year:        2025,
    featured:    false,
  },
]

export const projectCategories = ['all', 'Full Stack', 'Machine Learning', 'Deep Learning', 'Data Engineering', 'Desktop']

// ─── Blog Posts ───────────────────────────────────────────────────────────────
export const blogPosts = [
  {
    id:       1,
    title:    'Building Real-Time Systems with WebSocket and Node.js',
    slug:     'building-realtime-systems-websocket-nodejs',
    excerpt:  'How I built a production-ready real-time temperature monitoring system — including automated email alerts and live dashboards.',
    tags:     ['Node.js', 'WebSocket', 'React'],
    readTime: 6,
    date:     'Mar 06, 2026',
  },
  {
    id:       2,
    title:    'Microservices in Healthcare: Lessons from MobiOs',
    slug:     'microservices-healthcare-mobios-lessons',
    excerpt:  'Insights from the Medica Project Series using microservices for scalability in a real Agile team.',
    tags:     ['Microservices', 'Agile', 'Healthcare'],
    readTime: 8,
    date:     'Feb 19, 2026',
  },
  {
    id:       3,
    title:    'From ECG Signals to ML Models: A Deep Dive',
    slug:     'ecg-signals-machine-learning-deep-dive',
    excerpt:  'Building an ECG classifier with ConvNeXt1D and Attention Pooling, achieving 80% accuracy.',
    tags:     ['ML', 'ECG', 'TensorFlow'],
    readTime: 10,
    date:     'Mar 11, 2026',
  },
]

// ─── Achievements ─────────────────────────────────────────────────────────────
export const achievements = [
  { icon: '🏆', type: 'Winner',           title: 'IdeaSprint 2023',                detail: 'Inter-University Ideathon',                           year: '2023' },
  { icon: '🥈', type: 'Finalist',         title: 'Hack X 8.0',                     detail: 'Inter-University Startup Challenge',                   year: '2023' },
  { icon: '💻', type: 'Participant',       title: 'Deep Mind Annual Hackathon',      detail: 'Institute of Java and Software Engineering',           year: '2020' },
  { icon: '🔬', type: 'Academic Research', title: 'ML Framework for Medical Diagnostics', detail: 'Sequence Classification in Healthcare',          year: '2025' },
  { icon: '🎓', type: 'Leadership',        title: 'IMSSA Event Coordinator',         detail: 'How You Did It Session · University of Kelaniya',     year: '2023–24' },
  { icon: '🌱', type: 'Community',         title: 'Sasnaka Sansada Galle',           detail: 'Sub Coordinator · Learn Steer Project',               year: '2020–21' },
]