/* =========================================================
   PORTFOLIO DATA — edit this file to update projects & posts
   ========================================================= */

const GH = 'https://github.com/um8r/';

/* category keys: agents | fullstack | ml | mobile */
window.PROJECTS = [
  {
    id: 'agentflow',
    title: 'AgentFlow AI',
    tagline: 'Multi-agent AI workspace orchestrated with LangGraph',
    category: ['agents'],
    icon: 'bi-diagram-3-fill',
    accent: 'purple',
    featured: true,
    year: '2026',
    summary: 'A master orchestrator agent reads each request and routes it to one or more specialist agents — Research, Coding, Data Analyst and Document/RAG — then merges their outputs into one structured answer.',
    features: [
      'LangGraph state graph: receive → classify → plan → execute → synthesize',
      'Content-based routing — one request can trigger several agents at once',
      'Data Analyst agent profiles CSV/Excel (missing values, IQR outliers, correlations) and answers from real computed numbers',
      'Full RAG pipeline over PDF / DOCX / TXT with source excerpts',
      'Demo mode that runs end-to-end without an API key',
      'Custom glassmorphism UI with agent-activity timeline'
    ],
    stack: ['Python', 'LangGraph', 'Streamlit', 'RAG', 'LLM APIs', 'Pandas'],
    repo: GH + 'AgentFlow-AI'
  },
  {
    id: 'leadgen',
    title: 'LeadGenAI',
    tagline: 'AI-powered B2B lead generation & outreach automation',
    category: ['agents', 'fullstack'],
    icon: 'bi-bullseye',
    accent: 'cyan',
    featured: true,
    year: '2026',
    summary: 'Takes an ideal customer profile and produces a scored, qualified and explainable list of B2B leads, each with an AI-drafted outreach message that a human must approve.',
    features: [
      'Three Claude-powered agents: Research → Qualification → Personalization',
      'Deterministic, documented 0–100 lead-scoring formula — the AI explains the score, never invents it',
      'Anti-hallucination guardrails and Pydantic-validated JSON outputs',
      'Human-in-the-loop Approve / Edit / Reject gate for every message',
      'Dashboard with funnel metrics, score distribution and CSV export',
      'robots.txt-aware scraping, Docker setup and a pytest suite'
    ],
    stack: ['FastAPI', 'Claude API', 'SQLAlchemy', 'Streamlit', 'Plotly', 'Docker', 'Pytest'],
    repo: GH + 'LeadGenAI'
  },
  {
    id: 'projectpilot',
    title: 'ProjectPilot AI',
    tagline: 'An autonomous AI project manager for engineering teams',
    category: ['agents', 'fullstack'],
    icon: 'bi-kanban-fill',
    accent: 'pink',
    featured: true,
    year: '2026',
    summary: 'Full-stack project management app that generates multi-phase roadmaps with AI, then runs them on a live Kanban board with risk detection, deadline prediction and a database-aware AI copilot.',
    features: [
      'AI plan generator with a one-click commit of every task to the database',
      'Drag-and-drop Kanban with optimistic UI updates',
      'Risk and bottleneck detection with a 0–100% portfolio health score',
      'Deadline and velocity predictor with delay probability',
      'AI copilot chat that answers from live project data ("Why is my project delayed?")',
      'JWT auth + RBAC, calendar, file attachments, Ctrl+K global search, Chart.js analytics'
    ],
    stack: ['FastAPI', 'OpenAI', 'SQLAlchemy', 'JWT / RBAC', 'JavaScript', 'Bootstrap 5', 'Chart.js'],
    repo: GH + 'projectpilot-ai'
  },
  {
    id: 'mindpower',
    title: 'MindPower AI',
    tagline: 'AI-assisted therapy & wellness platform',
    category: ['mobile', 'agents'],
    icon: 'bi-heart-pulse-fill',
    accent: 'cyan',
    year: '2026',
    summary: 'A cross-platform wellness and therapist-management app. A Flutter client talks to a FastAPI backend that runs a provider-agnostic multi-agent AI engine with dedicated safety checks.',
    features: [
      'Flutter app (iOS / Android / Desktop) with Material 3 and Clean Architecture',
      'Multi-agent AI engine: Conversation, Safety and RAG agents',
      'PostgreSQL 16 + pgvector for semantic retrieval',
      'FastAPI + SQLAlchemy 2.0 + Pydantic v2 backend',
      'Docker Compose setup for local development'
    ],
    stack: ['Flutter', 'Dart', 'FastAPI', 'PostgreSQL', 'pgvector', 'Docker'],
    repo: GH + 'mindpower-ai'
  },
  {
    id: 'docflow',
    title: 'DocFlow',
    tagline: 'AI-native collaborative document workspace',
    category: ['fullstack'],
    icon: 'bi-file-earmark-richtext-fill',
    accent: 'purple',
    year: '2026',
    summary: 'A lightweight Google-Docs-style editor: authenticated users create, format, import and share rich-text documents, with access control enforced on the backend.',
    features: [
      'TipTap rich-text editor with content saved as structured JSON',
      'Debounced autosave with Saving / Saved / Unsaved indicators',
      'Per-user sharing with view or edit permissions',
      '.txt / .md import with server-side type and size validation',
      'JWT auth with bcrypt hashing; owner-only rename, delete and share',
      'Pytest suite covering auth, CRUD, authorization and sharing'
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'TipTap', 'FastAPI', 'Pytest'],
    repo: GH + 'docflow'
  },
  {
    id: 'invoicehub',
    title: 'InvoiceHub AI',
    tagline: 'AI invoice & receipt data-extraction pipeline',
    category: ['agents', 'fullstack'],
    icon: 'bi-receipt-cutoff',
    accent: 'pink',
    year: '2026',
    summary: 'Upload an invoice or receipt as a PDF or image and get clean structured data back, validated against a Pydantic schema and saved to a database.',
    features: [
      'GPT-4o-mini vision with native structured outputs, parsed straight into Pydantic models',
      'PDF → image preprocessing with pdf2image',
      'Clean error mapping (422 / 500) so the UI never shows a traceback',
      'SQLModel persistence on SQLite, ready for Postgres/MySQL',
      'FastAPI backend + Streamlit frontend'
    ],
    stack: ['FastAPI', 'OpenAI', 'Pydantic v2', 'SQLModel', 'Streamlit'],
    repo: GH + 'AIWithUmar-InvoiceHub'
  },
  {
    id: 'kashmirai',
    title: 'KashmirAI Tourism',
    tagline: 'Smart tourism assistant for Azad Kashmir',
    category: ['agents'],
    icon: 'bi-geo-alt-fill',
    accent: 'cyan',
    year: '2026',
    summary: 'A tourism discovery platform for Azad Kashmir. Explore valleys, lakes and resorts, get an AI day-by-day itinerary, and receive destination picks matched to your travel style.',
    features: [
      'AI travel planner that uses your days, budget, group size and interests',
      '"Where should I go?" recommender by travel style',
      'Interactive map of every destination',
      'Real Wikimedia Commons imagery; hotel info is labelled when unverified',
      'Rule-based fallback planner so it works without an API key'
    ],
    stack: ['Python', 'Streamlit', 'LLM API', 'JSON data layer', 'Maps'],
    repo: GH + 'azad-kashmir-ai-tourism'
  },
  {
    id: 'hiremind',
    title: 'HireMind AI',
    tagline: 'AI-powered candidate interviews & assessment',
    category: ['agents'],
    icon: 'bi-person-badge-fill',
    accent: 'purple',
    year: '2026',
    summary: 'An AI interview platform that runs candidate interviews, scores every answer, gives feedback and gives recruiters a dashboard of results.',
    features: [
      'AI-driven interview flow with per-answer scoring and feedback levels',
      'Candidate records and interview history stored in a database',
      'Recruiter dashboard with total interviews and average score',
      'Custom dark UI with sidebar workspace'
    ],
    stack: ['Python', 'Streamlit', 'OpenAI', 'PostgreSQL'],
    repo: GH + 'HireMind-AI'
  },
  {
    id: 'volley',
    title: 'Volley Coach AI',
    tagline: 'AI volleyball spike & tactics analyzer',
    category: ['agents', 'fullstack'],
    icon: 'bi-dribbble',
    accent: 'pink',
    year: '2026',
    summary: 'A sports-analytics web app that analyzes spikes and tactics with Gemini, recommends setter strategy and tracks player stats, with secure login.',
    features: [
      'Gemini-powered spike and tactical analysis on the server side',
      'Setter strategy recommendations and player stats tracking',
      'Real-time analytics dashboard',
      'Express backend with JWT + bcrypt authentication'
    ],
    stack: ['React 19', 'TypeScript', 'Gemini API', 'Express', 'Tailwind', 'Vite'],
    repo: GH + 'volley-coach-ai',
    live: 'https://volley-coach-ai.vercel.app'
  },
  {
    id: 'jobhub',
    title: 'JobHub',
    tagline: 'Full-stack job portal for candidates & employers',
    category: ['fullstack'],
    icon: 'bi-briefcase-fill',
    accent: 'cyan',
    year: '2026',
    summary: 'A job board with separate candidate and employer flows: employers post jobs and review applications, candidates apply and track their status.',
    features: [
      'REST API for jobs, applications and application status',
      'JWT authentication with role-based employer / candidate access',
      'Employer dashboard to post jobs and manage applicants',
      'Lightweight HTML / CSS / JS client'
    ],
    stack: ['FastAPI', 'SQLAlchemy', 'JWT', 'JavaScript', 'HTML/CSS'],
    repo: GH + 'JobHub'
  },
  {
    id: 'fraudguard',
    title: 'FraudGuard AI',
    tagline: 'Credit-card fraud detection with machine learning',
    category: ['ml'],
    icon: 'bi-shield-lock-fill',
    accent: 'cyan',
    year: '2026',
    summary: 'A machine-learning system that flags credit-card transactions as normal or potentially fraudulent, served through an interactive Streamlit app.',
    features: [
      'End-to-end ML workflow: EDA, class-imbalance analysis, scaling, train/test split',
      'Logistic Regression baseline vs. Random Forest main model',
      'Model and scaler saved for real-time predictions',
      'Deployed on Streamlit Cloud'
    ],
    stack: ['Python', 'Scikit-learn', 'Random Forest', 'Pandas', 'Streamlit'],
    repo: GH + 'FraudGuard-AI',
    live: 'https://fraudguard-ai-umar.streamlit.app/'
  },
  {
    id: 'student',
    title: 'Student Performance Analysis',
    tagline: 'Interactive data-analysis dashboard',
    category: ['ml'],
    icon: 'bi-bar-chart-line-fill',
    accent: 'purple',
    year: '2026',
    summary: 'Explores student academic data through cleaning, statistics and visualisations, and presents the insights in an interactive Streamlit dashboard.',
    features: [
      'Data cleaning and exploratory data analysis',
      'Statistical summaries and score analysis',
      'Relationship plots between performance metrics',
      'Deployed interactive dashboard'
    ],
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit'],
    repo: GH + 'student_perfomance_analysis',
    live: 'https://studentperfomanceanalysis-2vpitzvgqvjcgs9ak67ys7.streamlit.app/'
  },
  {
    id: 'bridgeit',
    title: 'BridgeIt — Final Year Project',
    tagline: 'University–industry collaboration platform',
    category: ['fullstack'],
    icon: 'bi-bounding-box-circles',
    wide: true,
    accent: 'pink',
    year: '2025',
    summary: 'My final year project. BridgeIt connects students, faculty, universities and industry experts around real projects, FYP ideas and research, with role-based dashboards for each.',
    features: [
      'Role-based portals for Admin, Faculty, Student and Industry Expert',
      'FYP idea submission, review and history workflow',
      'Industry projects with milestones and Stripe payments',
      'Real-time chat with SignalR and OTP email verification',
      'Analytics visualisations with Chart.js and AI assistance with Gemini'
    ],
    stack: ['Next.js 14', 'TypeScript', 'Redux Toolkit', 'Tailwind', 'SignalR', 'Stripe', 'Gemini'],
    repo: GH + 'FYP',
    live: 'https://fyp-sand-eight.vercel.app',
    related: [
      ['bridge-master-fyp', GH + 'bridge-master-fyp'],
      ['bridge-it', GH + 'bridge-it'],
      ['app', GH + 'app'],
      ['fyp2025', GH + 'fyp2025']
    ]
  }
];

/* =========================================================
   LINKEDIN POSTS
   Add your posts here. Each item:
   { date: 'Sep 2026', title: 'Short headline', text: 'One or two lines…',
     tags: ['AI Agents'], url: 'https://www.linkedin.com/posts/…' }
   If this list is empty, the section shows a "Follow on LinkedIn" card.
   ========================================================= */
window.POSTS = [];
