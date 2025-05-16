import {
    RiGithubFill,
    RiGithubLine,
    RiLinkedinFill,
    RiLinkedinLine,
    RiMailLine,
    RiMailOpenFill,
} from 'react-icons/ri';
import {
    SiBootstrap,
    SiCss3,
    SiExpress,
    SiFastapi,
    SiHtml5,
    SiJquery,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiP5Dotjs,
    SiPython,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';

export const INFO = {
    name: {
        first: 'Samir',
        last: 'Ali',
    },
    title: "I'm a Computer Science Student.",
    socialLinks: [
        {
            name: 'GitHub',
            url: 'https://github.com/04Samir',
            icons: [RiGithubLine, RiGithubFill],
        },
        {
            name: 'Email',
            url: 'mailto:contact@samir.cx',
            icons: [RiMailLine, RiMailOpenFill],
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/04-Samir-Ali',
            icons: [RiLinkedinLine, RiLinkedinFill],
        },
    ],
    cv: 'https://cdn.samir.cx/CV.pdf',
};

export const PROJECTS = [
    {
        title: 'samir.cx (v2)',
        description:
            'A modern personal portfolio built with Next.js (App Router) and TailwindCSS (v4), showcasing advanced animations, SEO improvements, and a responsive design.',
        keyConcepts: [
            'Front-End Development',
            'UI/UX Design',
            'Responsive Design',
            'SEO Optimisation',
        ],
        techStack: [
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'Next.js', icon: SiNextdotjs },
            { name: 'TailWind CSS', icon: SiTailwindcss },
        ],
        image: '/projects/Portfolio-V2.png',
        github: 'https://github.com/04Samir/samir.cx',
        link: 'https://samir.cx',
    },
    {
        title: 'TradeTicker',
        description:
            'A real-time stock price tracker powered by Express + TypeScript and MySQL, featuring EJS templates, jQuery interactions, and Chart.js visualisations.',
        keyConcepts: [
            'Full-Stack Development',
            'API Integration',
            'Database Management',
            'Real-Time Data',
        ],
        techStack: [
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'Express.js', icon: SiExpress },
            { name: 'MySQL', icon: SiMysql },
            { name: 'HTML', icon: SiHtml5 },
            { name: 'TailWind CSS', icon: SiTailwindcss },
            { name: 'jQuery', icon: SiJquery },
        ],
        image: '/projects/TradeTicker.png',
        github: 'https://github.com/04Samir/TradeTicker',
        link: 'https://projects.samir.cx/TradeTicker',
    },
    {
        title: 'Hello-World',
        description:
            'A coding-tutorial platform built with React and FastAPI, offering beginner-friendly courses and a MySQL-backed API layer.',
        keyConcepts: [
            'Full-Stack Development',
            'API Integration',
            'Database Management',
            'User Authentication',
        ],
        techStack: [
            { name: 'React', icon: SiReact },
            { name: 'BootStrap', icon: SiBootstrap },
            { name: 'Python', icon: SiPython },
            { name: 'FastAPI', icon: SiFastapi },
            { name: 'MySQL', icon: SiMysql },
        ],
        image: '/projects/Hello-World.png',
        github: 'https://github.com/04Samir/Hello-World',
        link: 'https://projects.samir.cx/Hello-World',
    },
    {
        title: 'PostIt',
        description:
            'A Reddit-style forum that uses Node.js, Express, and MySQL for user discussions, session handling, and EJS-based rendering.',
        keyConcepts: [
            'Full-Stack Development',
            'Database Management',
            'User Authentication',
            'Server-Side Templating',
        ],
        techStack: [
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'Express.js', icon: SiExpress },
            { name: 'MySQL', icon: SiMysql },
            { name: 'HTML', icon: SiHtml5 },
            { name: 'BootStrap', icon: SiBootstrap },
        ],
        image: '/projects/PostIt.png',
        github: 'https://github.com/04Samir/PostIt',
        link: 'https://projects.samir.cx/PostIt',
    },
    {
        title: 'Drawing Application',
        description:
            'An interactive p5.js canvas for freehand sketches, custom brushes, and real-time rendering.',
        keyConcepts: [
            'Client-Side Rendering',
            'Canvas Manipulation',
            'Interactive Tools',
            'Custom Brush Logic',
        ],
        techStack: [
            { name: 'HTML', icon: SiHtml5 },
            { name: 'CSS', icon: SiCss3 },
            { name: 'p5.js', icon: SiP5Dotjs },
        ],
        image: '/projects/Drawing-Application.png',
        github: 'https://github.com/04Samir/Drawing-Application',
        link: 'https://projects.samir.cx/Drawing-Application',
    },
    {
        title: 'Penguin Platformer',
        description:
            'A single-level platformer built with p5.js, featuring sprite animations, collision detection, and a playful winter environment.',
        keyConcepts: [
            'Front-End Development',
            'Game Mechanics',
            'Sprite Animation',
            'Collision Detection',
        ],
        techStack: [
            { name: 'HTML', icon: SiHtml5 },
            { name: 'CSS', icon: SiCss3 },
            { name: 'p5.js', icon: SiP5Dotjs },
        ],
        image: '/projects/Penguin-Platformer.png',
        github: 'https://github.com/04Samir/Penguin-Platformer',
        link: 'https://projects.samir.cx/Penguin-Platformer',
    },
    {
        title: 'samir.cx (v1)',
        description:
            'My very first personal portfolio, crafted with HTML, SCSS, and jQuery, introducing dynamic effects and mobile-friendly layouts.',
        keyConcepts: [
            'Front-End Development',
            'jQuery Enhancements',
            'SCSS Workflow',
            'Responsive Design',
        ],
        techStack: [
            { name: 'HTML', icon: SiHtml5 },
            { name: 'CSS', icon: SiCss3 },
            { name: 'jQuery', icon: SiJquery },
        ],
        image: '/projects/Portfolio-V1.png',
        github: 'https://github.com/04Samir/v1.samir.cx',
        link: 'https://v1.samir.cx',
    },
];

export const CERTIFICATIONS = [
    {
        title: 'GitHub: Foundations',
        description:
            'Validated my skills in GitHub basics, including repositories, commits, branching, markdown and project management.',
        thumbnail: '/img/github.png',
        link: '/certs/github-foundations.pdf',
        year: '2025',
    },
];
