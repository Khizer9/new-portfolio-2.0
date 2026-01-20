import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'khizer358@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Khizer, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/~01170ce7ec510bb0da',
    resume: '/projects/resume/Khizer-Frontend-Engineer.pdf',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Khizer9' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/khizer-ali-2267a0213/',
    },
    { name: 'facebook', url: 'https://www.facebook.com/khizer.alii.1' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Angular',
            icon: '/logo/angular.png',
        },
        {
            name: 'HTML',
            icon: '/logo/html.png',
        },
        {
            name: 'CSS',
            icon: '/logo/css.png',
        },
        {
            name: 'GraphQL',
            icon: '/logo/graphql.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Github',
            icon: '/logo/github.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Expense Tracker',
        slug: 'expense-tracker',
        liveUrl: 'https://expense-tracker-neon-sigma-65.vercel.app/auth',
        year: 2025,
        description: `
    A distraction-free expense tracker built for fast, simple, and clear personal finance management. Designed over a weekend to fulfill a real personal need. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>💸 Quick Add/Edit: Instantly record, update, or delete expenses</li>
      <li>📊 Dashboard Overview: Total spending, recent transactions, and category-wise insights</li>
      <li>🔐 Auth & Roles: Supabase Auth with role-based access control</li>
      <li>📁 Export to CSV: Download expense data for offline analysis</li>
      <li>📱 Responsive Design: Fully usable across all device sizes</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Built with React and Tailwind CSS for a clean, responsive UI</li>
      <li>Integrated Supabase for authentication, data storage, and RLS (Row-Level Security)</li>
      <li>Designed reusable UI components for modals, forms, and tables</li>
      <li>Implemented CSV export feature using a client-side utility</li>
    </ul>
  `,
        role: `
    Solo Developer <br/>
    Owned the full development lifecycle:
    <ul>
      <li>✅ Backend: Configured Supabase database, Auth, and RLS policies</li>
      <li>🎨 Frontend: Built all components using React and Tailwind CSS</li>
      <li>🔄 State Management: Used React hooks and context for managing data</li>
      <li>📦 Data Export: Added export-to-CSV functionality</li>
      <li>🚀 Deployment: Deployed via Vercel with environment-based setup</li>
    </ul>
  `,
        techStack: ['React', 'Tailwind CSS', 'Supabase', 'Vite', 'Vercel'],
        thumbnail: '/projects/images/expense-tracker-1.png',
        longThumbnail: '/projects/images/expense-tracker-1.png',
        images: [
            '/projects/images/expense-tracker-1.png',
            '/projects/images/expense-tracker-2.png',
        ],
    },
    {
        title: 'Resal Legacy Boonus',
        slug: 'resal-legacy-boonus',
        liveUrl: 'https://app.boonus.app/auth/login',
        year: 2025,
        description: `
    Enhanced the legacy MERN platform at Resal, a leader in digital prepaid cards, rewards, and loyalty solutions. Focused on stabilizing key systems and delivering a major new feature to streamline campaign management. <br/><br/>

    Key Contributions:<br/>
    <ul>
      <li>🐛 Bug Fixes: Identified and resolved critical issues in existing campaign workflows</li>
      <li>✨ New Feature: Designed and implemented an "Auto‑Campaign Scheduler"—enabling marketers to schedule recurring loyalty campaigns with custom rules</li>
      <li>🔗 Third‑Party Integrations: Enhanced and troubleshooted API connections with Foodics and other partners</li>
      <li>🗄️ Data Consistency: Optimized database queries and fixed data‑sync issues across services</li>
      <li>🚀 Performance Tweaks: Reduced response times by refactoring slow endpoints</li>
    </ul>
  `,
        role: `
    Full‑Stack MERN Engineer <br/>
    As part of a small team, I: <br/>
    <ul>
      <li>✅ Refactored legacy React components and Node/Express services for reliability</li>
      <li>🔄 Updated MongoDB schemas and corrected data‑model inconsistencies</li>
      <li>🆕 Architected and built the Auto‑Campaign Scheduler feature, including UI, backend endpoints, and scheduling logic</li>
      <li>🛠️ Wrote unit and integration tests to ensure stability of both fixes and new features</li>
      <li>🤝 Coordinated with third‑party vendors to validate and improve API contracts</li>
    </ul>
  `,
        techStack: [
            'React',
            'MongoDB',
            'Node.js',
            'Express.js',
            'REST API Integration',
            'Cron Job (Job Scheduler)',
            'Jest',
        ],
        thumbnail: '/projects/images/resal-1.png',
        longThumbnail: '/projects/images/resal-1.png',
        images: [
            '/projects/images/resal-1.png',
            '/projects/images/resal-2.png',
        ],
    },
    {
        title: 'Meri Sehat',
        slug: 'meri-sehat',
        liveUrl: 'https://merisehat.pk/',
        year: 2024,
        description: `
    Meri Sehat is Pakistan’s first AI-powered healthcare platform, connecting patients with trusted doctors and managing health wallets seamlessly. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>🔍 Find A Doctor: Advanced search with filters for specialization, location, and ratings</li>
      <li>💼 Wallet Module: Secure balance view, top‑up, and transaction history</li>
      <li>⚡ AI Recommendations: Intelligent doctor suggestions based on user profile and symptoms</li>
      <li>📱 Fully Responsive: Optimized for mobile, tablet, and desktop</li>
      <li>🐞 Bug Fixes & Reviews: Ongoing code reviews and rapid bug resolution to maintain platform stability</li>
    </ul>
  `,
        role: `
    Frontend Engineer <br/>
    Focused on UI/UX and API integration:<br/>
    <ul>
      <li>🎨 Designed and implemented component architecture in React & Next.js</li>
      <li>🔗 Integrated REST APIs for doctor search, wallet transactions, and AI recommendations</li>
      <li>📐 Ensured cross‑device responsiveness using Tailwind CSS and custom media queries</li>
      <li>📝 Conducted code reviews, refactored legacy components, and fixed critical UI bugs</li>
      <li>⚙️ Collaborated with backend team to optimize data fetching and error handling</li>
    </ul>
  `,
        techStack: [
            'React',
            'Next.js',
            'Tailwind CSS',
            'REST API Integration',
            'Agora (Audio/Video call)',
            'Responsive Design',
            'ESLint & Prettier',
            'Jest',
        ],
        thumbnail: '/projects/images/meri-sehat-1.png',
        longThumbnail: '/projects/images/meri-sehat-1.png',
        images: [
            '/projects/images/meri-sehat-1.png',
            '/projects/images/meri-sehat-2.png',
        ],
    },
    {
        title: 'Bide Educator',
        slug: 'bide-educator',
        liveUrl: 'https://educator.ndnstaging.merisehat.pk/login',
        year: 2024,
        description: `
    Bide Educator is a ReactJS‑based health management platform with two separate portals—for doctors and for patients—enabling appointment scheduling and consultations via audio or video calls. Note: Not officially launched yet. <br/><br/>

    Demo Login:<br/>
    <ul>
      <li>Username: <code>educator@merisehat.pk</code></li>
      <li>Password: <code>0000</code></li>
    </ul><br/>

    Key Features:<br/>
    <ul>
      <li>🩺 Dual Portals: Separate React apps for educators to manage doctors/patients</li>
      <li>📅 Appointment Scheduling: Arrange and confirm appointments seamlessly</li>
      <li>🎥 Audio & Video Calls: Users choose preferred consultation mode via Agora</li>
      <li>🔐 Secure Auth: Role‑based access control with session management</li>
      <li>📱 Responsive UI: Consistent experience across desktop and mobile</li>
    </ul>
  `,
        role: `
    Frontend Engineer <br/>
    Led the React implementation and UI integration:<br/>
    <ul>
      <li>🔧 Architected component structure using React Router and Context API</li>
      <li>🔗 Integrated REST APIs for user management, scheduling, and call setup</li>
      <li>📹 Implemented WebRTC logic for audio/video session initialization</li>
      <li>🎨 Styled UI with Tailwind CSS and ensured full responsiveness</li>
      <li>🛠️ Conducted code reviews, debugged routing issues, and optimized performance</li>
    </ul>
  `,
        techStack: [
            'React',
            'React Router',
            'Ant Design',
            'Redux',
            'REST API Integration',
            'Context API',
            'Agora (Audio/Video call)',
            'Tailwind CSS',
            'React Hook Form',
        ],
        thumbnail: '/projects/images/educator-1.png',
        longThumbnail: '/projects/images/educator-1.png',
        images: [
            '/projects/images/educator-1.png',
            '/projects/images/eduactor-2.png',
        ],
    },
    {
        title: 'GoldPesa ($GPX)',
        slug: 'goldpesa',
        liveUrl: 'https://www.goldpesa.com/',
        year: 2023,
        description: `
    GoldPesa ($GPX) is an asset‑backed hybrid token where each token represents one gram of physical gold stored in secured vaults. It enables fractional ownership of gold bars alongside crypto market upside, distinguishing it from stablecoins. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>🏆 Asset Backing: 1 GPX = 1 gram of physical gold in audited vaults</li>
      <li>⚖️ Hybrid Upside: Participate in crypto market gains in addition to gold value</li>
      <li>🔄 Fractional Ownership: Trade and hold fractions of gold bars seamlessly</li>
      <li>🔗 Wallet Integration: Connect via MetaMask or WalletConnect for on‑chain transactions</li>
      <li>📈 Real‑Time Pricing: Live gold and GPX price feeds via Chainlink oracles</li>
    </ul>
  `,
        role: `
    Full‑Stack Engineer <br/>
    Led development of smart contracts and frontend integration:<br/>
    <ul>
      <li>🛠️ Smart Contracts: Authored GPX ERC‑20 token contract in Solidity using Hardhat</li>
      <li>🔗 Oracle Integration: Connected to Chainlink for real‑time gold price feeds</li>
      <li>🎨 Frontend: Built React/Next.js UI with Web3.js for minting, burning, and trading GPX</li>
      <li>🔐 Wallet Connect: Implemented MetaMask and WalletConnect workflows for user authentication</li>
      <li>🚀 Deployment & CI: Automated contract tests and deployments; deployed frontend on Vercel</li>
    </ul>
  `,
        techStack: [
            'React',
            'Next.js',
            'i18n',
            'Web3.js',
            'Tailwind CSS',
            'Vercel',
        ],
        thumbnail: '/projects/images/goldpesa.png',
        longThumbnail: '/projects/images/goldpesa.png',
        images: [
            '/projects/images/goldpesa.png',
            '/projects/images/goldpesa-2.png',
        ],
    },
    {
        title: 'Glowza Digital',
        slug: 'glowza-digital',
        liveUrl: 'https://glowzadigital.com/',
        year: 2023,
        description: `
    Glowza Digital is an animated video agency specializing in creating high‑impact animations for brand marketing. Serving both new and established brands, Glowza Digital delivers top‑quality videos that drive customer engagement and generate leads. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>🎥 Custom Animations: Tailored video content aligned with brand messaging</li>
      <li>🚀 Lead Generation: Animation-driven calls to action that convert viewers</li>
      <li>🌐 Multi‑Platform Delivery: Videos optimized for web, social media, and presentations</li>
      <li>⚡ Fast Turnaround: Agile production pipeline for quick delivery</li>
      <li>📱 Responsive Embeds: Player components adapt seamlessly to all device sizes</li>
    </ul>
  `,
        role: `
    Frontend Engineer <br/>
    Focused on responsive React integration:<br/>
    <ul>
      <li>🎨 Built reusable React components for video players and galleries</li>
      <li>📐 Ensured full responsiveness using Tailwind CSS and custom breakpoints</li>
      <li>🔗 Integrated REST APIs to fetch video metadata and analytics</li>
      <li>🛠️ Implemented lazy loading and debouncing for performance optimization</li>
      <li>🔍 Conducted code reviews and fixed UI bugs across different viewports</li>
    </ul>
  `,
        techStack: [
            'React',
            'Tailwind CSS',
            'Animations',
            'Responsive Design',
            'Lazy Loading',
        ],
        thumbnail: '/projects/images/glowza-1.png',
        longThumbnail: '/projects/images/glowza-1.png',
        images: [
            '/projects/images/glowza-1.png',
            '/projects/images/glowza-3.png',
        ],
    },
    {
        title: 'Amanrasoft',
        slug: 'amanrasoft',
        liveUrl: 'https://amanrasoft.com/',
        year: 2023,
        description: `
    Amanrasoft’s official portfolio site showcasing their IT services, case studies, and contact options. Built to highlight expertise in web and mobile app development with a clean, performant frontend. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>🌟 Service Showcase: Clear presentation of web, mobile & API solutions</li>
      <li>🖼️ Case Studies: Interactive project galleries with lightbox previews</li>
      <li>✉️ Contact Form: Custom form with validation and email integration</li>
      <li>📱 Responsive Design: Optimized for desktop, tablet, and mobile</li>
    </ul>
  `,
        role: `
    Frontend Developer <br/>
    Responsible for the entire portfolio site:<br/>
    <ul>
      <li>🎨 Designed and implemented UI in React & Next.js</li>
      <li>🔗 Set up MDX‑based content for easy updates to case studies</li>
      <li>📐 Styled with Tailwind CSS, ensuring responsive layouts</li>
      <li>⚙️ Integrated EmailJS for contact form submissions</li>
      <li>🚀 Deployed on Vercel with automatic CI/CD from GitHub</li>
    </ul>
  `,
        techStack: [
            'React',
            'SCSS',
            'React Hook Form',
            'Tailwind CSS',
            'EmailJS',
            'Vercel',
        ],
        thumbnail: '/projects/images/amanrasoft-1.png',
        longThumbnail: '/projects/images/amanrasoft-1.png',
        images: [
            '/projects/images/amanrasoft-1.png',
            '/projects/images/amanrasoft-2.png',
        ],
    },
    {
        title: 'YouTube Clone',
        slug: 'youtube',
        liveUrl: 'https://youtubeecloned.netlify.app/',
        year: 2023,
        description: `
    A personal project replicating core YouTube functionality with a familiar, intuitive interface. Built with ReactJS and Tailwind CSS for a fast, responsive experience across desktops, tablets, and mobile devices. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>🔍 Video Search: Integrated YouTube Data API for real-time search results</li>
      <li>▶️ Video Playback: Embedded player with related videos sidebar</li>
      <li>📃 Video Details: Display of title, description, view count, and comments</li>
      <li>❤️ Like/Dislike UI: Interactive buttons with state management</li>
      <li>📱 Responsive Design: Fluid layouts optimized for all screen sizes</li>
    </ul>
  `,
        role: `
    Solo Developer <br/>
    Owned the full frontend build:<br/>
    <ul>
      <li>🎨 Built UI components in React using Tailwind CSS for styling</li>
      <li>🔗 Integrated YouTube Data API via Axios for search and video details</li>
      <li>🔄 Managed global state with React Context and custom hooks</li>
      <li>⚙️ Implemented React Router for client-side routing between views</li>
      <li>🐛 Performed code reviews, debugging, and performance optimizations</li>
    </ul>
  `,
        techStack: [
            'React',
            'Tailwind CSS',
            'YouTube Data API',
            'Axios',
            'React Context API',
            'React Router',
            'Netlify',
        ],
        thumbnail: '/projects/images/youtube-1.png',
        longThumbnail: '/projects/images/youtube-1.png',
        images: [
            '/projects/images/youtube-1.png',
            '/projects/images/youtube-2.png',
        ],
    },
    {
        title: 'Simple Weather App',
        slug: 'weather-app',
        liveUrl: 'https://searchweatherapps.netlify.app/',
        year: 2022,
        description: `
    A personal project that provides real‑time weather information for any location. Built with ReactJS, this app features a search field to look up cities and displays current weather data fetched from multiple APIs. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>🌤️ City Search: Lookup weather by city name with autocomplete suggestions</li>
      <li>📊 Data Mapping: Display temperature, humidity, wind speed, and conditions</li>
      <li>🔄 Multiple API Integration: Combined data from OpenWeatherMap and WeatherAPI</li>
      <li>📍 Geolocation Fallback: Use browser location if no search query provided</li>
      <li>📱 Responsive UI: Optimized for desktop, tablet, and mobile screens</li>
    </ul>
  `,
        role: `
    Solo Developer <br/>
    Led the entire frontend build:<br/>
    <ul>
      <li>🎨 Designed and implemented UI components in ReactJS</li>
      <li>🔗 Integrated Fetch API calls to multiple weather service endpoints</li>
      <li>📐 Styled layouts with CSS Modules and ensured full responsiveness</li>
      <li>🛠️ Handled loading/error states and optimized API requests</li>
      <li>🐛 Debugged and tested across browsers for consistent behavior</li>
    </ul>
  `,
        techStack: [
            'ReactJS',
            'JavaScript (ES6+)',
            'CSS Modules',
            'Fetch API',
            'Responsive Design',
            'OpenWeatherMap API',
            'WeatherAPI.com',
        ],
        thumbnail: '/projects/images/weather-app.png',
        longThumbnail: '/projects/images/weather-app.png',
        images: [
            '/projects/images/weather-app.png',
            '/projects/images/weather-app-2.png',
        ],
    },
    {
        title: 'GitHub Clone',
        slug: 'github',
        liveUrl: 'https://your-github-clone.vercel.app', // Replace with deployed URL
        year: 2022,
        description: `
    A personal project that mimics core GitHub profile lookup functionality. Users can search for any GitHub username to view profile details and repositories. Built with React for a snappy UI and integrated directly with the GitHub REST API. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>🔍 Username Search: Fetch user data by entering a GitHub handle</li>
      <li>👤 Profile Display: Shows avatar, bio, followers/following counts, and more</li>
      <li>📦 Repo List: Lists public repositories with stars and fork counts</li>
      <li>🔗 Direct Links: Clickable links to GitHub profiles and repos</li>
      <li>📱 Responsive Design: Fluid layout for desktop, tablet, and mobile</li>
    </ul>
  `,
        role: `
    Solo Developer <br/>
    Responsible for the entire frontend implementation:<br/>
    <ul>
      <li>🎨 Built reusable React components for profile and repo cards</li>
      <li>🔗 Integrated GitHub REST API using Axios for data fetching</li>
      <li>🔄 Managed global state and loading/error states with React hooks</li>
      <li>⚙️ Implemented React Router for deep-linking to profiles</li>
      <li>📐 Styled the application with Tailwind CSS for a clean, responsive UI</li>
    </ul>
  `,
        techStack: [
            'React',
            'Tailwind CSS',
            'Axios',
            'React Router',
            'GitHub REST API',
            'Netlify',
        ],
        thumbnail: '/projects/images/github-1.png',
        longThumbnail: '/projects/images/github-1.png',
        images: [
            '/projects/images/github-1.png',
            '/projects/images/github-2.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer',
        company: 'Viabletree',
        duration: 'Oct 2024 - Present',
    },
    {
        title: 'Software Engineer (Frontend)',
        company: 'Meri Sehat',
        duration: 'Aug 2023 - Sep 2024',
    },
    {
        title: 'FRONTEND Developer',
        company: 'Amanrasoft',
        duration: 'May 2022 - Aug 2023',
    },
];
