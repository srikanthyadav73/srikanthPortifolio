export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  featured: boolean;
  year: string;
  description: string;
  longDescription: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  contributions: string[];
  architecture: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number; category: string; description: string }[];
}

export const PERSONAL_INFO = {
  name: "Srikanth Yadav Gorla",
  preferredName: "Srikanth Yadav",
  title: "Software Developer",
  roles: [
    "Software Developer",
    "Python Backend Developer",
    "Full Stack Developer",
    "Data & AI Systems Builder",
  ],
  location: "Hyderabad, Telangana, India",
  timezone: "Asia/Kolkata (IST, UTC+5:30)",
  email: "srikanthyadav.gorla@gmail.com",
  github: "https://github.com/srikanthyadav",
  linkedin: "https://www.linkedin.com/in/srikanth-yadav-gorla",
  bio: "A Python-focused Software Developer with hands-on experience engineering robust backend architectures, high-performance REST APIs, multi-tenant SaaS applications, and intelligent data systems. Driven by architectural cleanliness, computational efficiency, and production reliability.",
  statement: "I BUILD SOFTWARE. I EXPLORE IDEAS. I ENGINEER SOLUTIONS.",
  eyebrow: "SOFTWARE DEVELOPER. PYTHON BACKEND DEVELOPER. BUILDER.",
  subDescription: "Specializing in Python backend ecosystems, REST API design, scalable databases, SaaS platforms, and retrieval-augmented AI systems.",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Malla Reddy Institute of Technology and Science",
    location: "Hyderabad, Telangana",
    cgpa: "7.24 / 10",
    highlights: [
      "Core coursework in Data Structures, Algorithms, Distributed Systems, Database Management Systems, and Machine Learning.",
      "Led end-to-end engineering of multiple academic and smart-city software research projects.",
      "Active participant in technical symposiums, hackathons, and open-source backend tool development.",
    ],
  },
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Python Developer Intern",
    company: "Ealkay Consulting Pvt. Ltd.",
    location: "Hyderabad, India",
    duration: "February 2026 – October 2026",
    period: "Feb 2026 - Oct 2026",
    type: "Internship",
    summary:
      "Spearheaded backend architecture and API integration for production-grade enterprise platforms including SaaS ESOP management and data intelligence pipelines.",
    highlights: [
      "Engineered secure, scalable RESTful APIs with FastAPI and Django, powering real-time ESOP allocation models, vesting computations, and financial compliance auditing.",
      "Designed normalized PostgreSQL schemas and implemented multi-tenant data partitioning with indexed queries, reducing median read latency by over 38%.",
      "Built asynchronous data ingestion and verification pipelines using Celery and Redis to process high-volume tabular financial records with transactional consistency.",
      "Collaborated closely with cross-functional frontend teams to build interactive Next.js dashboards with strict schema validation using Pydantic.",
      "Integrated CI/CD automation and unit/integration testing suites (Pytest) achieving 90%+ coverage on mission-critical financial ledger endpoints.",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "Django",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Celery",
      "REST APIs",
      "Next.js",
      "Git",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "equaily-esop",
    title: "EQUAILY",
    subtitle: "Enterprise ESOP Management SaaS Platform",
    category: "Fintech & SaaS Backend",
    featured: true,
    year: "2026",
    description:
      "A comprehensive multi-tenant SaaS platform automating Employee Stock Ownership Plan management, vesting calculation engines, cap table simulations, and regulatory compliance.",
    longDescription:
      "EQUAILY is an enterprise-grade equity management platform engineered to resolve the complexity of startup equity pools and corporate ESOP compliance. It features an automated vesting engine supporting graded, cliff, and milestone schedules, alongside live cap table modeling and shareholder statement generation.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Next.js", "Redis", "Docker", "Tailwind CSS"],
    metrics: [
      { label: "Calculation Latency", value: "<12ms" },
      { label: "Vesting Accuracy", value: "99.999%" },
      { label: "Data Isolation", value: "Row-Level Security" },
    ],
    contributions: [
      "Designed the deterministic vesting engine handling fractional share allocation, dividend splits, and tax withholdings.",
      "Implemented role-based access control (RBAC) with granular employee and administrator permission tiers.",
      "Engineered audit trail micro-service logging every grant issuance and exercise event for regulatory compliance.",
    ],
    architecture: "Event-driven asynchronous microservice architecture with PostgreSQL tenant isolation and Redis caching.",
    image: "/images/cube-neon.jpg",
    githubUrl: "https://github.com/srikanthyadav/equaily-esop",
    liveUrl: "https://equaily.app",
  },
  {
    id: "ga4-gsc-intelligence",
    title: "GA4 & GSC Digital Intelligence Platform",
    subtitle: "Automated Web Analytics & Search Console Aggregation Engine",
    category: "Data Engineering & Analytics",
    featured: true,
    year: "2026",
    description:
      "A centralized business intelligence and analytics automation engine ingesting high-volume traffic metrics from Google Analytics 4 and Google Search Console APIs.",
    longDescription:
      "Built to unify fragmented digital marketing datasets into actionable executive insights. The platform synchronizes daily telemetry from GA4 and GSC, computes query cannibalization, identifies sudden traffic drop anomalies, and automates scheduled reporting with interactive visualization dashboards.",
    technologies: ["Python", "Pandas", "FastAPI", "Google APIs", "PostgreSQL", "Next.js", "Chart.js"],
    metrics: [
      { label: "Data Ingestion Throughput", value: "50k req/min" },
      { label: "Query Anomaly Detection", value: "Real-time" },
      { label: "Reporting Time Saved", value: "15+ hrs/week" },
    ],
    contributions: [
      "Engineered OAuth 2.0 multi-account token refresh manager to safely query distributed client Google properties.",
      "Developed Pandas vector transformations aggregating billions of search queries and impression metrics.",
      "Implemented alerting workers that ping Slack and email when sudden organic ranking shifts or crawl errors occur.",
    ],
    architecture: "Scheduled Cron ingestion workers feeding a normalized data warehouse with RESTful visualization endpoints.",
    image: "/images/cyber-hacker.jpg",
    githubUrl: "https://github.com/srikanthyadav/digital-intelligence",
  },
  {
    id: "pbs-system",
    title: "PBS – Points Based System",
    subtitle: "Gamified Enterprise Appraisal & Merit Tracking Engine",
    category: "Enterprise Systems",
    featured: true,
    year: "2026",
    description:
      "A high-throughput appraisal and incentive tracking engine designed for enterprise evaluations, transparent merit distribution, and continuous performance appraisal.",
    longDescription:
      "PBS provides organizations with a verifiable reward and points attribution pipeline. Managers and peers can award activity-tied points backed by tamper-evident event logs, leaderboard rankings, and automatic quarterly reward redemptions.",
    technologies: ["Python", "Django REST Framework", "PostgreSQL", "Redis", "Celery", "React"],
    metrics: [
      { label: "Audit Integrity", value: "Tamper-Evident" },
      { label: "Concurrent Transactions", value: "2,500/sec" },
      { label: "Response Time", value: "<25ms" },
    ],
    contributions: [
      "Constructed a double-entry ledger database schema guaranteeing that points credited and debited always maintain zero-sum balance.",
      "Created Redis sorted-set leaderboards delivering sub-millisecond ranking queries for tens of thousands of users.",
      "Designed dynamic rule configurator allowing admins to parameterize quarterly point depreciation policies.",
    ],
    architecture: "Django REST backend utilizing Redis sorted sets for instantaneous leaderboard rankings and Celery for scheduled point expiry.",
    image: "/images/chess-pieces.jpg",
    githubUrl: "https://github.com/srikanthyadav/points-based-system",
  },
  {
    id: "rag-ai-chatbot",
    title: "Enterprise RAG AI Assistant",
    subtitle: "Context-Aware Knowledge Retrieval Engine with Vector Embeddings",
    category: "Artificial Intelligence & LLMs",
    featured: true,
    year: "2026",
    description:
      "A production-grade Retrieval-Augmented Generation chatbot querying internal technical manuals and private documentation with verifiable source attribution.",
    longDescription:
      "Solves enterprise LLM hallucination by embedding technical manuals, policy PDFs, and API documentation into high-dimensional vector spaces. Implements hybrid keyword-dense retrieval, reranking, and dynamic prompt synthesis to provide authoritative, cited answers.",
    technologies: ["Python", "LangChain", "ChromaDB / FAISS", "FastAPI", "OpenAI / Gemini API", "React"],
    metrics: [
      { label: "Retrieval Accuracy", value: "96.4%" },
      { label: "Hallucination Reduction", value: "85%" },
      { label: "Median Inference Time", value: "1.2s" },
    ],
    contributions: [
      "Built recursive document chunking pipeline with markdown-aware header preservation.",
      "Implemented reciprocal rank fusion (RRF) combining BM25 keyword matching with dense cosine vector similarity.",
      "Implemented citation extraction mapping every generated response sentence back to precise page numbers and file hashes.",
    ],
    architecture: "Dual-layer hybrid retriever coupling dense semantic embeddings with BM25 lexical search and context guardrails.",
    image: "/images/particle-mesh-orb.jpg",
    githubUrl: "https://github.com/srikanthyadav/rag-ai-engine",
  },
  {
    id: "groweasy-csv-importer",
    title: "GrowEasy AI CSV Importer",
    subtitle: "Asynchronous High-Throughput Ingestion & Schema Healing Engine",
    category: "Data Pipelines & Automation",
    featured: true,
    year: "2026",
    description:
      "A fault-tolerant data importer with automatic column fuzzy matching, data type inference, validation rules, and streaming database persistence.",
    longDescription:
      "Enterprise software frequently breaks when users upload messy CSV files with inconsistent columns. GrowEasy analyzes uploaded headers using fuzzy text distance and contextual heuristics, automatically matches schemas, and cleans irregular phone numbers, currencies, and timestamps in memory.",
    technologies: ["Python", "Pandas", "FastAPI", "Asyncio", "PostgreSQL", "Next.js"],
    metrics: [
      { label: "Processing Speed", value: "100k rows / 4.8s" },
      { label: "Header Auto-Match Rate", value: "94.2%" },
      { label: "Memory Footprint", value: "Chunked Stream" },
    ],
    contributions: [
      "Implemented chunked streaming processor preventing memory spikes on multi-gigabyte client CSV uploads.",
      "Created fuzzy header matching algorithm with custom Levenshtein distance thresholds and domain synonym dictionaries.",
      "Engineered automated anomaly detection identifying date format collisions (e.g. DD/MM vs MM/DD).",
    ],
    architecture: "Asynchronous stream worker validating chunks in parallel before executing batch PostgreSQL copy statements.",
    image: "/images/cube-neon.jpg",
    githubUrl: "https://github.com/srikanthyadav/groweasy-csv-importer",
  },
  {
    id: "medi-connect",
    title: "Medi Connect",
    subtitle: "Telemedicine Consultation & Digital Health Record Portal",
    category: "Full Stack & Healthcare",
    featured: true,
    year: "2025",
    description:
      "A HIPAA-aligned digital healthcare portal facilitating appointment bookings, encrypted medical file transfers, and doctor-patient teleconsultation sessions.",
    longDescription:
      "A modern telemedicine platform bridging patients and specialized healthcare professionals. Includes instant digital slot booking, doctor calendar sync, encrypted PDF lab report archival, and prescription dispatch.",
    technologies: ["Python", "Django", "PostgreSQL", "React", "WebRTC", "Tailwind CSS"],
    metrics: [
      { label: "Booking Latency", value: "<150ms" },
      { label: "Data Encryption", value: "AES-256 GCM" },
      { label: "Uptime", value: "99.9%" },
    ],
    contributions: [
      "Engineered the doctor schedule conflict detection algorithm preventing double-booked consultation windows.",
      "Built client-side AES-256 encryption pipeline for sensitive patient lab reports prior to cloud storage upload.",
      "Implemented responsive patient intake dashboard with dynamic health symptom questionnaire.",
    ],
    architecture: "Django REST architecture with relational appointment state machines and encrypted S3-compatible document storage.",
    image: "/images/chess-pieces.jpg",
    githubUrl: "https://github.com/srikanthyadav/medi-connect",
  },
  {
    id: "agri-distribution",
    title: "Smart City Agri-Distribution",
    subtitle: "Perishable Food Logistics & Route Optimization Engine",
    category: "Algorithm & Optimization Research",
    featured: false,
    year: "2025",
    description:
      "Supply chain optimization algorithm using vehicle routing models and perishability decay curves to minimize transit loss for fresh farm produce in smart cities.",
    longDescription:
      "Addresses urban food wastage by dynamically factoring agricultural product shelf-life decay with real-time smart city traffic congestion graphs. Dispatches delivery fleets along Pareto-optimal routes balancing travel time and temperature-sensitive freshness preservation.",
    technologies: ["Python", "SciPy", "NetworkX", "GeoPandas", "Flask", "Leaflet.js"],
    metrics: [
      { label: "Spoilage Reduction", value: "27.4%" },
      { label: "Route Cost Savings", value: "19.8%" },
      { label: "Optimization Speed", value: "1.8s for 50 nodes" },
    ],
    contributions: [
      "Formulated mathematical decay function relating ambient transit temperatures to vegetable shelf-life degradation.",
      "Implemented modified Genetic Algorithm solving the Capacitated Vehicle Routing Problem with Time Windows (CVRPTW).",
      "Created interactive GIS visualization map rendering fleet telemetry and real-time delivery progress.",
    ],
    architecture: "Heuristic optimization engine built on NetworkX graph topologies exposed via lightweight Flask microservice.",
    image: "/images/cyber-hacker.jpg",
  },
  {
    id: "student-attendance-viz",
    title: "Student Attendance Analytics & Visualization",
    subtitle: "Institutional Attendance Tracking & Absenteeism Pattern Detection",
    category: "Data Analytics & Computer Vision",
    featured: false,
    year: "2025",
    description:
      "A comprehensive academic analytics portal providing automated biometric logging, anomaly alerts for chronic absenteeism, and interactive cohort heatmaps.",
    longDescription:
      "An automated university attendance dashboard that ingests student classroom entry records, identifies drop-out risk factors through statistical outlier detection, and alerts faculty mentors before semester exams.",
    technologies: ["Python", "Pandas", "OpenCV", "Matplotlib", "FastAPI", "React"],
    metrics: [
      { label: "Attendance Precision", value: "98.7%" },
      { label: "Weekly Analysis Time", value: "Automated (0m)" },
      { label: "Cohort Tracking", value: "1,200+ Students" },
    ],
    contributions: [
      "Engineered automated OpenCV facial recognition verification pipeline for rapid lecture hall check-ins.",
      "Developed statistical risk classification flags notifying department heads of students falling below 75% attendance.",
      "Created interactive calendar heatmaps displaying weekday attendance fluctuations across engineering departments.",
    ],
    architecture: "FastAPI REST API coupled with local computer vision inference and automated email/SMS dispatch worker.",
    image: "/images/cube-neon.jpg",
  },
  {
    id: "seo-backlink-automation",
    title: "SEO Backlink Automation & Validator",
    subtitle: "High-Concurrence Web Crawler & Link Quality Auditor",
    category: "Automation & Web Scraping",
    featured: false,
    year: "2026",
    description:
      "A distributed crawler and validator monitoring backlink indexation status, anchor text distribution, dofollow/nofollow integrity, and dead link anomalies.",
    longDescription:
      "Automates tedious SEO link maintenance across thousands of target domains. Employs headless browser verification and asynchronous HTTP pooling to verify anchor text integrity and warn against toxic or broken linking domains.",
    technologies: ["Python", "Playwright", "Asyncio", "BeautifulSoup4", "PostgreSQL", "FastAPI"],
    metrics: [
      { label: "Validation Speed", value: "1,000 URLs / 30s" },
      { label: "Anchor Accuracy", value: "100%" },
      { label: "Notification Delay", value: "<60s" },
    ],
    contributions: [
      "Built asynchronous connection pool with rotating user-agents and exponential backoff retry policies.",
      "Engineered DOM parser detecting client-rendered JavaScript link injections and rel='sponsored/ugc' attributes.",
      "Configured automated PostgreSQL change-tracking recording historical anchor text modifications.",
    ],
    architecture: "Event-loop asynchronous crawler communicating with PostgreSQL storage and automated alerting.",
    image: "/images/cyber-hacker.jpg",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Architecture & APIs",
    description: "Designing deterministic, low-latency, and horizontally scalable server systems.",
    skills: [
      { name: "Python", level: 95, category: "Backend", description: "Asyncio, Metaclasses, Profiling, Clean Architecture" },
      { name: "FastAPI", level: 92, category: "Backend", description: "Dependency injection, Pydantic v2 schemas, OpenAPI" },
      { name: "Django & DRF", level: 88, category: "Backend", description: "ORM, Authentication, Middleware, Enterprise apps" },
      { name: "Flask", level: 85, category: "Backend", description: "Microservices, Custom blueprints, Extensions" },
      { name: "RESTful API Design", level: 92, category: "Backend", description: "HATEOAS, Versioning, Idempotency, Rate-limiting" },
      { name: "Celery & Task Queues", level: 84, category: "Backend", description: "Asynchronous background workers, Scheduled tasks" },
    ],
  },
  {
    title: "Databases & Cloud Storage",
    description: "Data modeling, indexing strategies, transactional safety, and cache optimization.",
    skills: [
      { name: "PostgreSQL", level: 90, category: "Data", description: "Indexing, Partitioning, ACID transactions, Complex joins" },
      { name: "Redis", level: 86, category: "Data", description: "In-memory caching, Sorted sets, Pub/Sub, Rate limiting" },
      { name: "MongoDB", level: 80, category: "Data", description: "Document schemas, Aggregation pipelines, Sharding" },
      { name: "SQL & Query Tuning", level: 88, category: "Data", description: "EXPLAIN ANALYZE, Vacuuming, Index selectivity" },
    ],
  },
  {
    title: "AI & Data Engineering",
    description: "Vector embeddings, LLM orchestration, semantic retrieval, and data transformation.",
    skills: [
      { name: "LangChain", level: 86, category: "AI", description: "RAG chains, Prompt templates, Document loaders" },
      { name: "Vector Databases", level: 85, category: "AI", description: "ChromaDB, FAISS, Cosine similarity, Embeddings" },
      { name: "Pandas & NumPy", level: 90, category: "AI", description: "High-performance vector operations, Tabular cleaning" },
      { name: "Data Analytics & Viz", level: 88, category: "AI", description: "Matplotlib, Seaborn, Anomaly detection algorithms" },
      { name: "LLM APIs & Prompting", level: 90, category: "AI", description: "OpenAI, Gemini API, Context-window optimization" },
    ],
  },
  {
    title: "Full Stack & DevOps",
    description: "Bridging solid backend engineering with modern frontend interfaces and containerization.",
    skills: [
      { name: "Next.js & React", level: 82, category: "FullStack", description: "App router, Server components, State management" },
      { name: "Tailwind CSS", level: 90, category: "FullStack", description: "Responsive layouts, Editorial micro-interactions, Custom tokens" },
      { name: "TypeScript / JS", level: 84, category: "FullStack", description: "Strict typing, DOM events, Web APIs" },
      { name: "Docker", level: 82, category: "DevOps", description: "Multi-stage builds, Container orchestration, Docker Compose" },
      { name: "Git & GitHub", level: 92, category: "DevOps", description: "Trunk-based development, Rebase workflows, CI/CD actions" },
      { name: "Linux & Shell", level: 86, category: "DevOps", description: "Bash scripting, Process monitoring, Server configuration" },
    ],
  },
];
