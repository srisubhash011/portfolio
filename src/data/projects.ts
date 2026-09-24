import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'cricket-ai',
    number: '01',
    title: 'AI-Based Cricket Sports Performance Analysis',
    slug: 'ai-cricket-sports-performance-analysis',
    category: 'Computer Vision',
    subCategory: 'Computer Vision / Deep Learning / Sports Analytics',
    year: '2026',
    status: 'ongoing',
    featured: true,
    tagline: 'End-to-end computer vision pipeline for automated cricket bowling analysis and personalized AI coaching feedback.',
    resumeDescription: 'Developed an end-to-end computer vision pipeline for automated cricket bowling analysis, using RTMPose-based pose estimation to extract skeletal keypoints and STR-GCN for spatio-temporal skeleton-based motion analysis. Engineered biomechanical features and integrated FAISS-based similarity search to compare performances and generate personalized coaching feedback.',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'MMPose', 'RTMPose', 'STR-GCN', 'FAISS'],
    
    heroImage: '/assets/projects/cricket/pose-results/3.png',
    video: '/assets/projects/cricket/videos/InShot_20260924_163756262.mp4',
    
    problem: 'Cricket bowling technique evaluation traditionally requires expensive sensor suits or human coaches manually inspecting video frames, making granular biomechanical feedback inaccessible to most athletes.',
    solution: 'Built an automated video pipeline that extracts human skeletal joint sequences frame-by-frame using RTMPose, feeds keypoint spatio-temporal graph structures into Spatial Temporal Graph Convolutional Networks (STR-GCN), computes biomechanical metrics (release angle, elbow extension, stride length), and matches posture vector embeddings via FAISS similarity indexing.',
    
    pipelineSteps: [
      'VIDEO INPUT',
      'POSE ESTIMATION (RTMPose)',
      'SKELETON EXTRACTION',
      'STR-GCN ANALYSIS',
      'BIOMECHANICAL METRICS',
      'SIMILARITY SEARCH (FAISS)',
      'AI COACHING FEEDBACK'
    ],
    
    architecture: [
      { name: 'Pose Estimation Stage', description: 'Utilizes RTMPose (MMPose framework) for real-time 2D skeletal keypoint detection across high-speed delivery frames.' },
      { name: 'Spatio-Temporal Graph CNN', description: 'STR-GCN processes spatial node topology (joints) and temporal edge frames to learn biomechanical delivery dynamics.' },
      { name: 'FAISS Embedding Retrieval', description: 'High-dimensional feature vectors are indexed using FAISS for low-latency similarity comparisons against reference bowling vectors.' }
    ],
    
    keyDecisions: [
      'Chosen RTMPose over standard OpenPose for superior inference speed on bowling action frames.',
      'Selected STR-GCN over traditional CNNs to preserve spatial joint relationships across time frames.',
      'Utilized FAISS vector embeddings to deliver instantaneous feedback comparisons.'
    ],

    gallery: [
      { url: '/assets/projects/cricket/pose-results/3.png', caption: 'Pose estimation keypoints overlay on bowling action frame', type: 'image' },
      { url: '/assets/projects/cricket/diagrams/2.png', caption: 'Deep neural network pipeline architecture & feature extraction flow', type: 'diagram' },
      { url: '/assets/projects/cricket/diagrams/4.png', caption: 'Spatio-temporal graph joint representations (STR-GCN)', type: 'diagram' },
      { url: '/assets/projects/cricket/reports/5.png', caption: 'AI Coaching evaluation report & performance metrics', type: 'chart' },
      { url: '/assets/projects/cricket/screenshots/6.png', caption: 'Interactive analytics dashboard interface', type: 'image' }
    ],

    github: 'https://github.com/srisubhash011',
    demo: null
  },
  {
    id: 'insurance-fraud',
    number: '02',
    title: 'End-to-End AI Insurance Claim & Fraud Detection',
    slug: 'ai-insurance-claim-fraud-detection',
    category: 'Computer Vision',
    subCategory: 'Computer Vision / Machine Learning / Risk Modeling',
    year: '2025',
    status: 'completed',
    featured: true,
    tagline: 'Automated vehicle damage localization with Faster R-CNN ResNet-50 FPN and Random Forest fraud risk evaluation.',
    resumeDescription: 'Developed a vehicle damage detection pipeline using Faster R-CNN with a ResNet-50 FPN backbone, localizing dents, cracks, scratches, and missing parts from insurance claim images. Engineered statistical damage descriptors from detected regions and used Random Forest for fraud risk prediction.',
    technologies: ['Python', 'PyTorch', 'Faster R-CNN', 'ResNet-50 FPN', 'Scikit-learn', 'OpenCV'],

    heroImage: '/assets/projects/insurance/diagrams/damage.png',
    
    problem: 'Manual inspection of vehicle insurance claims is prone to human error, slow turnaround times, and fraudulent claim inflations across insurance operations.',
    solution: 'Engineered a dual-stage vision & tabular risk system. Stage 1 localizes damage (dents, scratches, structural cracks) using Faster R-CNN with ResNet-50 Feature Pyramid Networks. Stage 2 extracts region bounding box statistical features into a Random Forest classification pipeline.',

    pipelineSteps: [
      'CLAIM IMAGE',
      'DAMAGE DETECTION (Faster R-CNN)',
      'REGION EXTRACTION',
      'DAMAGE DESCRIPTORS',
      'FRAUD RISK MODEL',
      'CLAIM INSIGHT'
    ],

    metrics: [
      { label: 'Model Accuracy', value: '98%', note: 'Documented model evaluation accuracy on damage classification test sets' },
      { label: 'ROC-AUC Score', value: '0.92', note: 'Fraud risk prediction ROC-AUC evaluation score' }
    ],

    architecture: [
      { name: 'Feature Pyramid Network (FPN)', description: 'Extracts multi-scale spatial features across vehicle body components to detect micro-scratches as well as large crash deformations.' },
      { name: 'Region Proposal Network (RPN)', description: 'Proposes candidate bounding boxes for candidate damaged areas with confidence score filtering.' },
      { name: 'Random Forest Risk Classifier', description: 'Evaluates structural damage area percentages and severity index to flag fraudulent claims.' }
    ],

    gallery: [
      { url: '/assets/projects/insurance/diagrams/damage.png', caption: 'Faster R-CNN vehicle damage localization bounding boxes', type: 'image' },
      { url: '/assets/projects/insurance/diagrams/fpn.png', caption: 'ResNet-50 FPN multi-scale feature pyramid network architecture', type: 'diagram' },
      { url: '/assets/projects/insurance/diagrams/rpn.png', caption: 'Region Proposal Network (RPN) anchor box processing', type: 'diagram' },
      { url: '/assets/projects/insurance/diagrams/roi.png', caption: 'ROI Pooling & feature alignment layout', type: 'diagram' },
      { url: '/assets/projects/insurance/dashboard/2dash.png', caption: 'Claim processing & fraud risk assessment dashboard', type: 'chart' },
      { url: '/assets/projects/insurance/dashboard/3dash.png', caption: 'Damage severity analytics UI', type: 'chart' }
    ],

    github: 'https://github.com/srisubhash011',
    demo: null
  },
  {
    id: 'supply-chain',
    number: '03',
    title: 'Supply Chain Analytics Dashboard',
    slug: 'supply-chain-analytics-dashboard',
    category: 'Data Analytics',
    subCategory: 'Data Analytics / Business Intelligence / SQL Engine',
    year: '2025',
    status: 'completed',
    featured: true,
    tagline: 'High-performance analytics engine processing 180K+ supply chain records with DuckDB and Streamlit.',
    resumeDescription: 'Analyzed 180K+ supply chain records. Performed SQL transformations and aggregations in DuckDB to derive sales, profit, customer, regional, and shipping insights. Developed an interactive dashboard with 12 visualizations using Streamlit and Plotly.',
    technologies: ['Python', 'SQL', 'DuckDB', 'Pandas', 'Streamlit', 'Plotly'],

    heroImage: '/assets/projects/supply-chain/dashboard/first.png',

    problem: 'Large enterprise supply chain datasets are often bottlenecked by slow relational database queries, preventing interactive executive decision making.',
    solution: 'Leveraged DuckDB columnar SQL execution inside Python to transform and aggregate over 180,000 transaction records in milliseconds, rendering dynamic Plotly charts across 12 analytical dimensions in a Streamlit web portal.',

    pipelineSteps: [
      'RAW DATA (180K+ RECORDS)',
      'DUCKDB SQL TRANSFORMATIONS',
      'PANDAS AGGREGATION',
      'ANALYTICS ENGINE',
      'PLOTLY VISUALIZATIONS',
      'STREAMLIT DASHBOARD'
    ],

    metrics: [
      { label: 'Records Analyzed', value: '180K+', note: 'Processed transactions with complex aggregation queries' },
      { label: 'Visualizations', value: '12', note: 'Interactive chart modules spanning regional & financial metrics' }
    ],

    architecture: [
      { name: 'DuckDB Engine', description: 'In-process columnar SQL database optimized for OLAP analytics over hundreds of thousands of CSV rows.' },
      { name: 'Plotly Visualization Suite', description: 'Dynamic interactive charts for profit distribution, shipping delays, and regional sales metrics.' }
    ],

    gallery: [
      { url: '/assets/projects/supply-chain/dashboard/first.png', caption: 'Supply Chain Executive Overview Dashboard', type: 'chart' },
      { url: '/assets/projects/supply-chain/screenshots/second.png', caption: 'Regional profitability & shipping analytics', type: 'chart' },
      { url: '/assets/projects/supply-chain/charts/third.png', caption: 'Customer segmentation & order fulfillment metrics', type: 'chart' },
      { url: '/assets/projects/supply-chain/charts/four.png', caption: 'Delivery performance distribution plot', type: 'chart' }
    ],

    github: 'https://github.com/srisubhash011',
    demo: null
  },
  {
    id: 'ticket-booking',
    number: '04',
    title: 'High-Concurrency Ticket Booking System',
    slug: 'high-concurrency-ticket-booking-system',
    category: 'Full Stack',
    subCategory: 'Full Stack / Backend Systems / DBMS',
    year: '2024',
    status: 'completed',
    featured: true,
    tagline: 'Scalable seat allocation application with Java REST APIs, MySQL transaction safety, and dynamic React UI.',
    resumeDescription: 'Developed a full-stack ticket booking application with real-time seat allocation and booking management. Designed and integrated REST APIs for booking confirmation and data retrieval. Built responsive frontend interfaces using React.js.',
    technologies: ['React.js', 'Java', 'MySQL', 'REST APIs', 'HTML/CSS'],

    heroImage: '/assets/projects/ticket-booking/ui/WhatsApp Image 2025-08-15 at 18.39.03_532d3cc0.jpg',

    problem: 'Ticket reservation platforms face race conditions when multiple concurrent users attempt to book identical seating assets simultaneously.',
    solution: 'Architected a robust Java backend with transactional MySQL integrity, coupled with an interactive React frontend that visualizes seat reservation states in real time.',

    pipelineSteps: [
      'USER SELECTION',
      'REACT FRONTEND',
      'REST API ENDPOINTS',
      'JAVA BACKEND CONTROLLER',
      'MYSQL TRANSACTIONAL DB',
      'SEAT CONFIRMATION'
    ],

    architecture: [
      { name: 'Java REST Backend', description: 'Modular MVC service layer handling seat validation, booking state transitions, and API responses.' },
      { name: 'MySQL Relational Schema', description: 'ACID-compliant relational database schema preventing duplicate seat reservations.' },
      { name: 'React UI Seat Map', description: 'Dynamic SVG/HTML seat layout with instant feedback on availability and selection.' }
    ],

    gallery: [
      { url: '/assets/projects/ticket-booking/ui/WhatsApp Image 2025-08-15 at 18.39.03_532d3cc0.jpg', caption: 'Interactive Seat Selection Interface', type: 'image' },
      { url: '/assets/projects/ticket-booking/architecture/1_Xd0jYhEMaH8ucX6P_Z5zdA.png', caption: 'System Architecture & Backend REST Flow', type: 'diagram' }
    ],

    github: 'https://github.com/srisubhash011',
    demo: null
  },
  {
    id: 'blockchain-fir',
    number: '05',
    title: 'Blockchain FIR Registration System',
    slug: 'blockchain-fir-registration-system',
    category: 'Blockchain',
    subCategory: 'Blockchain / Decentralized Applications / Smart Contracts',
    year: '2024',
    status: 'completed',
    featured: true,
    tagline: 'Decentralized first-information-report logger powered by Ethereum smart contracts and React.',
    resumeDescription: 'Developed a blockchain-based FIR registration platform using Ethereum smart contracts for tamper-proof record management. Implemented decentralized data storage mechanisms to ensure transparency and integrity. Built frontend modules for secure registration and record access workflows.',
    technologies: ['React.js', 'Java', 'Solidity', 'Ethereum', 'Smart Contracts'],

    heroImage: '/assets/projects/blockchain-fir/ui/WhatsApp Image 2025-07-11 at 02.15.09_a4cbfda1.jpg',

    problem: 'Law enforcement First Information Reports (FIRs) can be vulnerable to unauthorized record alterations or unauthorized deletion in traditional centralized databases.',
    solution: 'Engineered a tamper-proof decentralized ledger application where filed police reports are hashed and written onto Ethereum smart contracts, guaranteeing cryptographic immutability.',

    pipelineSteps: [
      'FIR RECORD ENTRY',
      'SMART CONTRACT VALIDATION',
      'ETHEREUM BLOCKCHAIN EVM',
      'IMMUTABLE CRYPTOGRAPHIC LEDGER'
    ],

    architecture: [
      { name: 'Solidity Smart Contracts', description: 'EVM contracts enforcing permissioned record addition and immutable hash persistence.' },
      { name: 'Decentralized Data Access', description: 'Cryptographic hashing mechanism ensuring transparent audit trails for legal integrity.' }
    ],

    gallery: [
      { url: '/assets/projects/blockchain-fir/ui/WhatsApp Image 2025-07-11 at 02.15.09_a4cbfda1.jpg', caption: 'Blockchain FIR Registration Dashboard & Record Workflow', type: 'image' },
      { url: '/assets/projects/blockchain-fir/blockchain/WhatsApp Image 2025-07-11 at 02.15.08_bbc5f6b6.jpg', caption: 'Decentralized Ledger & Transaction State Logs', type: 'image' },
      { url: '/assets/projects/blockchain-fir/architecture/1-s2.0-S209672092200029X-gr1.jpg', caption: 'Ethereum Smart Contract & System Topology Diagram', type: 'diagram' }
    ],

    github: 'https://github.com/srisubhash011',
    demo: null
  }
];
