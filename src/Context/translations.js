/**
 * Centralised translation dictionary for the portfolio.
 *
 * Structure:  translations.<section>.<key>  →  { en: "…", fr: "…" }
 *
 * To add a new language later, simply add a third property to each entry
 * (e.g. `es: "…"`) and update the toggle logic in LanguageContext.
 */

const translations = {
    /* ------------------------------------------------------------------ */
    /*  Navbar                                                             */
    /* ------------------------------------------------------------------ */
    navbar: {
        about: { en: "ABOUT", fr: "À PROPOS" },
        skills: { en: "SKILLS", fr: "COMPÉTENCES" },
        experiences: { en: "EXPERIENCE", fr: "EXPÉRIENCES" },
        projects: { en: "PROJECTS", fr: "PROJETS" },
        education: { en: "EDUCATION", fr: "FORMATIONS" },
        contact: { en: "CONTACT", fr: "CONTACT" },
    },

    /* ------------------------------------------------------------------ */
    /*  Home                                                               */
    /* ------------------------------------------------------------------ */
    home: {
        greeting: { en: "Hello There!", fr: "Bonjour !" },
        iAm: { en: "I'M", fr: "JE SUIS" },
        contactBtn: { en: "Contact Me", fr: "Me contacter" },
        downloadCV: { en: "Download CV", fr: "Télécharger CV" },
    },

    /* ------------------------------------------------------------------ */
    /*  Typewriter                                                         */
    /* ------------------------------------------------------------------ */
    typewriter: {
        strings: {
            en: [
                "Robotics Engineer",
                "Machine Learning & AI Expert",
                "Freelancer",
                "Software Architect",
                "Open Source Contributor",
            ],
            fr: [
                "Ingénieur Robotique",
                "Expert Machine Learning & IA",
                "Freelance",
                "Architecte Logiciel",
                "Contributeur Open Source",
            ],
        },
    },

    /* ------------------------------------------------------------------ */
    /*  About                                                              */
    /* ------------------------------------------------------------------ */
    about: {
        title: {
            en: "About",
            fr: "À Propos",
        },
        subtitle: {
            en: "« Who am I? »",
            fr: "« Qui suis-je ? »",
        },
        body: {
            en: (
                <>
                    Hybrid Robotics / Software engineer with 6 years of experience
                    in healthcare, industry, and transportation sectors, I turn
                    complex concepts into high-performance systems. At the
                    intersection of software architecture, advanced robotics, and
                    embedded intelligence, I work to ensure that technological
                    innovation translates into reliable operational reality.
                    <br /><br />
                    <strong>My various roles</strong>
                    <ul>
                        <li>
                            <strong>The Architect:</strong> I structure your
                            projects to build robust and maintainable systems. My
                            goal is to ensure software reliability from the design
                            phase to support the long-term evolution of your
                            solutions.
                        </li>
                        <li>
                            <strong>The Field &amp; Infrastructure Expert:</strong>{" "}
                            With an operational mindset, I support infrastructures
                            and CI/CD pipelines that streamline team workflows. I
                            rely on relevant simulation and solid observability to
                            secure the transition to real-world testing.
                        </li>
                        <li>
                            <strong>The Strategic Partner:</strong> From design to
                            deployment, I provide end-to-end expertise. Bilingual
                            and pedagogical, I lead teams using a cross-functional
                            language to turn your complex challenges into tangible
                            results, both in industry and research centers.
                        </li>
                    </ul>
                    My approach is based on an iterative methodology and a strong
                    ability to prioritize the most critical challenges. Beyond
                    technical expertise, I put my energy and proactivity at the
                    service of the collective. Let&apos;s work together to turn your
                    technological visions into lasting reality.
                </>
            ),
            fr: (
                <>
                    Ingénieur au profil hybride Robotique / Logiciel avec 6 ans d&apos;expérience
                    dans les secteurs de la santé, de l&apos;industrie et des transports,
                    je transforme des concepts complexes en systèmes performants. À
                    l&apos;intersection de l&apos;architecture logicielle, de la robotique
                    avancée et de l&apos;intelligence embarquée, j&apos;interviens pour
                    garantir que l&apos;innovation technologique se traduise par une
                    réalité opérationnelle fiable.
                    <br /><br />
                    <strong>Mes différentes casquettes</strong>
                    <ul>
                        <li>
                            <strong>L&apos;Architecte :</strong> Je structure vos projets
                            pour bâtir des systèmes robustes et maintenables. Mon
                            objectif est d&apos;assurer la fiabilité logicielle dès la
                            conception pour soutenir l&apos;évolution de vos solutions
                            sur le long terme.
                        </li>
                        <li>
                            <strong>L&apos;Expert Terrain &amp; Infrastructure :</strong>{" "}
                            Avec une vision opérationnelle, j&apos;apporte un soutien aux
                            infrastructures et pipelines CI/CD qui
                            facilitent le quotidien des équipes. Je m&apos;appuie sur une
                            simulation pertinente et une observabilité solide pour
                            sécuriser le passage aux tests en conditions réelles.
                        </li>
                        <li>
                            <strong>Le Partenaire Stratégique :</strong> De la conception
                            au déploiement, j&apos;apporte une expertise complète.
                            Bilingue et pédagogue, j&apos;anime les équipes en utilisant
                            un langage multi-métier pour transformer vos
                            enjeux complexes en résultats tangibles, en entreprise comme
                            en centre de recherche.
                        </li>
                    </ul>
                    Ma méthode repose sur une approche itérative et une
                    forte capacité à prioriser les défis les plus critiques. Au-delà de
                    l&apos;expertise technique, je mets mon énergie et ma proactivité au
                    service d&apos;un collectif. Avançons ensemble pour transformer vos
                    visions technologiques en une réalité durable.
                </>
            ),
        },
    },

    /* ------------------------------------------------------------------ */
    /*  Skills                                                             */
    /* ------------------------------------------------------------------ */
    skills: {
        title: {
            en: <>Professional <strong className="purple">Skillset</strong> & <strong className="purple">Tools</strong></>,
            fr: <>Compétences <strong className="purple">professionnelles</strong> & <strong className="purple">outils</strong></>,
        },
        valuePillarsTitle: {
            en: "What I bring to the table",
            fr: "Ma valeur apportée",
        },
        valuePillars: {
            delivery: {
                title: { en: "Deliver", fr: "Livrer" },
                description: {
                    en: "Meet your deadlines, clear the backlog, deliver the results.",
                    fr: "Respectez vos deadlines, dépilez le backlog, livrez les résultats.",
                },
            },
            leadership: {
                title: { en: "Facilitate", fr: "Animer" },
                description: {
                    en: "Foster communication and collaboration across disciplines.",
                    fr: "Favoriser la communication et la collaboration entre métiers.",
                },
            },
            expertise: {
                title: { en: "Drive", fr: "Porter" },
                description: {
                    en: "End-to-end expertise on your projects, from design to deployment.",
                    fr: "Une expertise complète sur vos projets, de la conception au déploiement.",
                },
            },
            knowledge: {
                title: { en: "Transfer", fr: "Transmettre" },
                description: {
                    en: "Preserve expertise and knowledge.",
                    fr: "Conservez le savoir-faire et les connaissances.",
                },
            },
        },
        categoriesTitle: {
            en: "Technical expertise",
            fr: "Expertise technique",
        },
        categories: {
            architecture: {
                title: { en: "Architecture & Software Development", fr: "Architecture et développement logiciel" },
                description: {
                    en: "Design of systems with modern, modular, robust and maintainable code, suited to production and deployment requirements.",
                    fr: "Conception de systèmes avec code moderne, modulaire, robuste et maintenable, adaptés aux exigences de production et du déploiement.",
                },
                tech: ["C++", "Python", "microservices", "API Rest", "FastAPI"],
            },
            robotics: {
                title: { en: "Robotics", fr: "Robotique" },
                description: {
                    en: "Navigation and control, sensor fusion, 2D/3D localization, mapping, path planning, obstacle detection and avoidance.",
                    fr: "Navigation et contrôle, fusion de capteurs, localisation 2D/3D, mapping, planification de trajectoires, détection et évitement d'obstacles.",
                },
                tech: ["ROS2", "Nav2", "SLAM Toolbox", "RTAB-Map", "Cartographer"],
            },
            computerVision: {
                title: { en: "Computer Vision & Edge\u00A0AI", fr: "Computer Vision & Edge\u00A0AI" },
                description: {
                    en: "Train, integrate, optimize and industrialize your perception / machine learning pipelines.",
                    fr: "Entraîner, intégrer, optimiser, industrialiser vos pipelines de perception / machine learning.",
                },
                tech: ["NVIDIA Jetson", "OpenCV", "PyTorch", "TensorFlow", "HuggingFace", "TensorRT"],
            },
            devops: {
                title: { en: "Automation & DevOps", fr: "Automatisation, DevOps" },
                description: {
                    en: "CI/CD, pipelines and infrastructure automation.",
                    fr: "CI/CD, pipelines et automatisation d'infrastructure.",
                },
                tech: ["GitLab CI", "GitHub Actions", "Docker"],
            },
            observability: {
                title: { en: "Observability", fr: "Observabilité" },
                description: {
                    en: "Monitoring, visualization and analysis of system data.",
                    fr: "Monitoring, visualisation et analyse des données système.",
                },
                tech: ["PlotJuggler", "FoxGlove", "Grafana"],
            },
            simulation: {
                title: { en: "Simulation", fr: "Simulation" },
                description: {
                    en: "Reducing the Sim-to-Real gap for robust deployment.",
                    fr: "Réduction du « Sim-to-Real gap » pour un déploiement robuste.",
                },
                tech: ["Gazebo", "Isaac Sim", "RViz"],
            },
            qa: {
                title: { en: "Q&A", fr: "Q&A" },
                description: {
                    en: "Unit and functional testing, non-regression.",
                    fr: "Tests unitaires et fonctionnels, non-régression.",
                },
                tech: ["Google Test", "Boost.test", "PyTest", "Robot Framework"],
            },
            strategy: {
                title: { en: "Strategy & Business Vision", fr: "Stratégie et vision business" },
                description: {
                    en: "Align teams and stakeholders through clear, bilingual (FR/EN) communication and shared vision.",
                    fr: "Aligner les métiers grâce à une communication claire, bilingue (FR/EN) et une vision partagée.",
                },
                tech: ["Agile", "Scrum", "Facilitation", "Roadmap"],
            },
        },
    },

    /* ------------------------------------------------------------------ */
    /*  AboutCard                                                          */
    /* ------------------------------------------------------------------ */
    aboutCard: {
        intro: {
            en: (
                <>
                    Hi everyone! I'm <span className="purple">Sébastien Fournier</span>{" "}
                    from <span className="purple">France</span>.
                </>
            ),
            fr: (
                <>
                    Bonjour à tous ! Je suis <span className="purple">Sébastien Fournier</span>{" "}
                    originaire de <span className="purple">France</span>.
                </>
            ),
        },
        job: {
            en: (
                <>
                    I'm currently working as a{" "}
                    <span className="purple">Software Developer</span>.
                </>
            ),
            fr: (
                <>
                    Je travaille actuellement en tant que{" "}
                    <span className="purple">développeur logiciel</span>.
                </>
            ),
        },
        activities: {
            en: "Outside of coding, I love engaging in activities that keep me creative and inspired:",
            fr: "En dehors du code, j'adore m'adonner à des activités qui stimulent ma créativité et mon inspiration :",
        },
        activityList: {
            en: ["Playing Games 🎮", "Writing Tech Blogs ✍️", "Traveling and Exploring New Places 🌍"],
            fr: ["Jouer aux jeux vidéo 🎮", "Écrire des articles tech ✍️", "Voyager et découvrir de nouveaux endroits 🌍"],
        },
        quote: {
            en: '"Strive to build things that make a difference!"',
            fr: '"Efforçons-nous de créer des choses qui font la différence !"',
        },
    },

    /* ------------------------------------------------------------------ */
    /*  Experiences / Clients                                              */
    /* ------------------------------------------------------------------ */
    experiences: {
        title: {
            en: <>Professional <strong className="purple">Experience</strong> & <strong className="purple">Clients</strong></>,
            fr: <>Expériences <strong className="purple">professionnelles</strong> & <strong className="purple">clients</strong></>,
        },
        subtitle: {
            en: "Key roles and collaborations.",
            fr: "Principaux postes et collaborations.",
        },
        labels: {
            project: { en: "Context", fr: "Contexte" },
            missions: { en: "Missions", fr: "Missions" },
            achievements: { en: "Key achievements", fr: "Réalisations" },
            results: { en: "Results", fr: "Résultats" },
            tools: { en: "Stack", fr: "Outils" },
            duration: { en: "Duration", fr: "Durée cumulée" },
            location: { en: "Location", fr: "Lieu" },
        },
        durationFormat: {
            month: { en: "month", fr: "mois" },
            months: { en: "months", fr: "mois" },
            year: { en: "year", fr: "an" },
            years: { en: "years", fr: "ans" },
        },
        ongoing: { en: "Ongoing", fr: "En cours" },
        entries: {
            en: [
                {
                    company: "Freelance",
                    role: "Robotics Engineer",
                    period: "May 2025 – Present",
                    startDate: "2025-05",
                    isCurrent: true,
                    location: "France",
                    project: "Robotics design, software architecture, development of perception and navigation algorithms under embedded constraints, Edge AI optimization and DevOps.",
                    missions: [
                        "Software architecture and development.",
                        "Robotics and Navigation: Sensor fusion, localization, trajectory planning, obstacle detection and avoidance.",
                        "Computer Vision & Edge AI: training, integration, optimization, industrialization of perception / machine learning pipelines.",
                        "Integration, continuous deployment, DevOps.",
                        "Observability.",
                        "Simulation: reducing the \"Sim-to-Real gap\".",
                        "Q&A: unit and functional testing, non-regression.",
                        "Strategy and business vision.",
                    ],
                    achievements: [
                        "Development of an autonomous navigation system for an exploration robot.",
                        "Creation of an optimized C++ library for image processing.",
                        "Design of a simplified programming interface for embedded systems.",
                        "Implementation of obstacle detection algorithms for autonomous vehicles.",
                        "Design of an autonomous rover for defect detection in solar farms.",
                    ],
                    results: [
                        "35% · Increase in execution performance of developed applications.",
                        "50% · Reduction in development time thanks to the libraries and tools created.",
                    ],
                    tags: [
                        "C++",
                        "Python",
                        "FastAPI",
                        "ROS2",
                        "Nav2",
                        "slam_toolbox",
                        "RTAB-Map",
                        "Linux",
                        "NVIDIA Jetson",
                        "OpenCV",
                        "PyTorch",
                        "TensorFlow",
                        "YOLOv8",
                        "HuggingFace",
                        "CI/CD",
                        "GitHub Actions",
                        "Docker",
                        "Gazebo",
                        "PlotJuggler",
                        "FoxGlove",
                        "GoogleTest",
                    ],
                },
                {
                    company: "Navya Mobility",
                    role: "Technical Project Manager",
                    period: "May 2024 – August 2024",
                    duration: "4 months",
                    location: "Villeurbanne, France",
                    project: "Management of the company's technical projects for the design and development of autonomous shuttles.",
                    missions: [
                        "Time and cost planning",
                        "Strategic arbitration",
                        "Product study",
                        "Functional requirements analysis",
                        "System specifications writing",
                    ],
                    achievements: [
                        "Client needs study for the vehicle supervision system (level 4 autonomy)",
                        "Product study and analysis for MVP development",
                        "MVP specifications writing",
                    ],
                    results: [
                        "1 · Marketable MVP",
                        "1 · Vehicle operating in level 4 autonomy (no human on board to supervise the vehicle)",
                        "1 · Implementation of business processes to synchronize project stakeholders",
                        "1 · Complete 1-year roadmap",
                    ],
                    tags: ["Project Management", "Specifications", "Autonomous Vehicles", "MVP"],
                },
                {
                    company: "GE HealthCare",
                    role: "Consultant - Lead Software Engineer",
                    period: "August 2023 – April 2024",
                    duration: "9 months",
                    location: "Versailles, France",
                    project: "Architecture and development of an application service for image generation and import in mammography.",
                    missions: [
                        "C++ application development in medical image acquisition (mammography)",
                        "Software architecture",
                        "Ensuring patient data integrity and security",
                        "Unit and functional testing, integration, validation",
                        "Agile planning",
                        "Support to other teams (other devs, DevOps, Validation, System)",
                        "Client reference",
                    ],
                    achievements: [
                        "Architectural design of the software service",
                        "Complete development and delivery of the software component",
                        "Development of a functional test suite with implementation of a new framework",
                        "Component tested and operational in real-world conditions",
                        "Improved robustness of the image acquisition system",
                    ],
                    results: [
                        "Enriched and reliable patient data",
                        "Import/export of images to imaging devices from other manufacturers",
                        "75% · Test coverage",
                        "95% · Faster execution of the functional test suite",
                        "50000 · Lines of code",
                    ],
                    tags: ["C++", "Functional testing", "Unit testing", "SonarQube", "Digital image processing", "Computer Vision", "Git", "Software solution architecture", "Linux", "Gherkin"],
                },
                {
                    company: "Up Technologies",
                    role: "Engineering Office - Robotics Engineer and Project Manager",
                    period: "March 2023 – August 2023",
                    duration: "6 months",
                    location: "Lyon, France",
                    project: "Delivery of robotics projects, firmware and applications on a time-and-materials basis.",
                    projects: [
                        {
                            title: "Project 1: Development of an embedded real-time voice recognition system",
                            missions: [
                                "Project management",
                                "Client pre-sales",
                                "System, firmware and software architecture",
                                "API development (Python)",
                                "Prototyping and development on electronic board (Embedded-C)",
                                "Firmware and application configuration and development",
                                "Audio encoding",
                            ],
                            achievements: [
                                "Electronic board porting",
                                "Memory optimization via DMA",
                                "Real-time development",
                                "Development, tuning and integration of the voice recognition neural network",
                                "Development of a display of detected voice commands on LCD screen",
                                "Development of a logging system",
                                "Project management and delivery from pre-sales to final handover to client",
                                "Writing of a business best practices booklet for new developers",
                            ],
                            results: [
                                "Functional voice control of the system",
                                "Robust voice recognition and control in the order of 1 millisecond",
                                "150% · Performance gain on a more powerful board",
                                "60% · Technical debt reduction",
                            ],
                        },
                        {
                            title: "Project 2: Electronic and firmware redesign of a reception robot (R2D2 type)",
                            missions: [
                                "Electronic and firmware development and architecture",
                                "Trajectory calculation and localization",
                                "Obstacle detection",
                                "Integration, testing and validation",
                            ],
                            achievements: [
                                "Development of the control system (propulsion, braking, rotation, odometry) and detection",
                                "System documentation of future computer vision features",
                                "Development of a motorized mockup for robot testing",
                                "3D printing of a complete full-scale functional prototype",
                            ],
                            results: [
                                "Robot operable remotely with obstacle detection and localization",
                                "200% · Time savings on debugging",
                                "2 · minutes to test the entire robot on mockup (vs 30 min before)",
                            ],
                        },
                    ],
                    tags: ["C++", "Python", "Embedded-C", "DMA", "Neural network", "Robotics", "3D printing", "Odometry"],
                },
            ],
            fr: [
                {
                    company: "Freelance",
                    role: "Ingénieur en robotique",
                    period: "mai 2025 – Aujourd'hui",
                    startDate: "2025-05",
                    isCurrent: true,
                    location: "France",
                    project: "Conception robotique, architecture logicielle, développement d'algorithmes de perception et de navigation sous contraintes embarquées, optimisation Edge AI et DevOps.",
                    missions: [
                        "Architecture et développement logiciel.",
                        "Robotique et Navigation : Fusion de capteurs, localisation, planification de trajectoires, détection et évitement d'obstacles.",
                        "Computer Vision & Edge AI : entraînement, intégration, optimisation, industrialisation des pipelines de perception / machine learning.",
                        "Intégration, déploiement continue, DevOps.",
                        "Observabilité.",
                        "Simulation : réduction du \"Sim-to-Real gap\".",
                        "Q&A : tests unitaires et fonctionnels, non-régression.",
                        "Stratégie et vision business.",
                    ],
                    achievements: [
                        "Développement d'un système de navigation autonome pour un robot d'exploration.",
                        "Création d'une bibliothèque C++ optimisée pour traitement d'images.",
                        "Conception d'une interface de programmation simplifiée pour systèmes embarqués.",
                        "Implémentation d'algorithmes de détection d'obstacles pour véhicules autonomes.",
                        "Conception d’un rover autonome de détection de défauts dans les fermes solaires.",
                    ],
                    results: [
                        "35% · Augmentation des performances d'exécution des applications développées.",
                        "50% · Réduction du temps de développement grâce aux bibliothèques et outils créés.",
                    ],
                    tags: [
                        "C++",
                        "Python",
                        "FastAPI",
                        "ROS2",
                        "Nav2",
                        "slam_toolbox",
                        "RTAB-Map",
                        "Linux",
                        "NVIDIA Jetson",
                        "OpenCV",
                        "PyTorch",
                        "TensorFlow",
                        "YOLOv8",
                        "HuggingFace",
                        "CI/CD",
                        "GitHub Actions",
                        "Docker",
                        "Gazebo",
                        "PlotJuggler",
                        "FoxGlove",
                        "GoogleTest",
                    ],
                },
                {
                    company: "Navya Mobility",
                    role: "Responsable de projets techniques",
                    period: "mai 2024 - août 2024",
                    duration: "4 mois",
                    location: "Villeurbanne, France",
                    project: "Gestion des projets techniques de l'entreprise pour la conception et le développement des navettes autonomes.",
                    missions: [
                        "Planification temps et coûts",
                        "Arbitrage stratégique",
                        "Etude produit",
                        "Etude fonctionnelle du besoin",
                        "Rédaction des spécifications systèmes",
                    ],
                    achievements: [
                        "Etude du besoin client du système de supervision des véhicules (autonomie lv4)",
                        "Etude et analyse produit pour élaboration d'un MVP",
                        "Rédaction des spécifications du MVP",
                    ],
                    results: [
                        "1 · MVP commercialisable",
                        "1 · Véhicule circulant en autonomie 4 (pas d'humain à bord pour superviser le véhicule)",
                        "1 · Mise en place de processus métiers pour synchroniser les parties prenantes du projet",
                        "1 · Roadmap complète sur 1 an",
                    ],
                    tags: ["Gestion de projet", "Spécifications", "Véhicules autonomes", "MVP"],
                },
                {
                    company: "GE HealthCare",
                    role: "Consultant - Lead Ingénieur logiciel",
                    period: "août 2023 - avril 2024",
                    duration: "9 mois",
                    location: "Versailles, France",
                    project: "Architecture et développement d'un service applicatif de génération et d'import d'images en mammographie.",
                    missions: [
                        "Développement applicatif C++ en acquisition d'images médicales (mammographie)",
                        "Architecture logicielle",
                        "Garantie de l'intégrité et sécurité des données patients",
                        "Tests unitaires et fonctionnels, intégration, validation",
                        "Planification Agile",
                        "Support aux autres équipes (autres dev, DevOps, Validation, Système)",
                        "Référent Client",
                    ],
                    achievements: [
                        "Design architectural du service logiciel",
                        "Développement et livraison complet de la brique logicielle",
                        "Développement d'une suite de tests fonctionnels avec mise en place d'un nouveau framework",
                        "Brique testée et opérationnelle en condition réelle d'utilisation",
                        "Amélioration de la robustesse du système d'acquisition d'images",
                    ],
                    results: [
                        "Enrichissement et fiabilité des data patients",
                        "Import/export d'images exportables sur les appareils d'imagerie d'autres fabricants",
                        "75% · Couverture de tests",
                        "95% · Exécution de la suite de tests fonctionnels plus rapide",
                        "50 000 · Lignes de code",
                    ],
                    tags: ["C++", "Tests fonctionnels", "Test unitaire", "SonarQube", "Traitement numérique des images", "Computer Vision", "Git", "Architecture de solutions logicielles", "Linux", "Langage Gherkin"],
                },
                {
                    company: "Up Technologies",
                    role: "Bureau d'Étude - Ingénieur robotique et chef de projet",
                    period: "mars 2023 - août 2023",
                    duration: "6 mois",
                    location: "Lyon, France",
                    project: "Réalisation de projets robotiques, firmwares et applicatifs au forfait temps.",
                    projects: [
                        {
                            title: "Projet 1 : Développement d'un système embarqué temps-réel de reconnaissance vocale",
                            missions: [
                                "Gestion de projet",
                                "Avant-vente client",
                                "Architecture système, firmware et logicielle",
                                "Développement d'APIs (Python)",
                                "Prototypage et développement sur carte électronique (Embedded-C)",
                                "Configuration et développement firmware et applicatif",
                                "Encodage audio",
                            ],
                            achievements: [
                                "Portage de carte électronique",
                                "Optimisation mémoire via DMA",
                                "Développement temps-réel",
                                "Développement, tuning et intégration du réseau neuronal de reconnaissance vocale",
                                "Développement d'un afficheur de commandes vocales détectées sur écran LCD",
                                "Développement d'un système de log",
                                "Gestion et réalisation du projet de l'avant-vente jusqu'à la livraison finale au client",
                                "Rédaction d'un livret métier de bonnes pratiques pour tout nouveau développeur",
                            ],
                            results: [
                                "Contrôle vocal fonctionnel du système",
                                "Reconnaissance et contrôle vocal robuste de l'ordre de 1 milli-seconde",
                                "150% · Gain de performance sur une carte plus puissante",
                                "60% · Dette technique réduite",
                            ],
                        },
                        {
                            title: "Projet 2 : Refonte électronique et firmware d'un robot d'accueil (type R2D2)",
                            missions: [
                                "Développement, architecture électronique et firmware",
                                "Calcul de trajectoire et localisation",
                                "Détection d'obstacles",
                                "Intégration, tests et validation",
                            ],
                            achievements: [
                                "Développement du système de contrôle (propulsion, freinage, rotation, odométrie) et détection",
                                "Rédaction système des fonctionnalités futures de vision par ordinateur",
                                "Développement d'une maquette motorisée pour les tests du robot",
                                "Impression 3D d'un prototype fonctionnel complet à échelle réelle",
                            ],
                            results: [
                                "Robot opérable à distance avec détection d'obstacles et localisation",
                                "200% · Gain de temps sur le debogage",
                                "2 · minutes pour tester l'ensemble du robot sur maquette (contre 30 min avant)",
                            ],
                        },
                    ],
                    tags: ["C++", "Python", "Embedded-C", "DMA", "Réseau neuronal", "Robotique", "Impression 3D", "Odométrie"],
                },
            ],
        },
    },

    /* ------------------------------------------------------------------ */
    /*  Education / Formation                                              */
    /* ------------------------------------------------------------------ */
    education: {
        title: {
            en: <>Academic <strong className="purple">Formation</strong> & <strong className="purple">Certifications</strong></>,
            fr: <>Formation <strong className="purple">académique</strong> & <strong className="purple">certifications</strong></>,
        },
        subtitle: {
            en: "Degrees, courses and certifications.",
            fr: "Diplômes, formations et certifications.",
        },
        entries: {
            en: [
                {
                    school: "School or University name",
                    degree: "Degree / Certification (e.g. Engineering degree, Master)",
                    period: "2018 – 2021",
                    description: "Describe your degree, main courses, thesis or major projects. Highlight robotics, software, AI or relevant fields.",
                    tags: ["Robotics", "Computer Vision", "Machine Learning"],
                },
                {
                    school: "Another institution",
                    degree: "Previous degree or certification",
                    period: "2015 – 2018",
                    description: "Another formation description. Adapt to your background.",
                    tags: ["C++", "Python", "Embedded"],
                },
            ],
            fr: [
                {
                    school: "École ou université",
                    degree: "Diplôme / Certification (ex. diplôme d'ingénieur, Master)",
                    period: "2018 – 2021",
                    description: "Décrivez votre diplôme, les cours principaux, le mémoire ou les projets majeurs. Mettez en avant robotique, logiciel, IA ou domaines pertinents.",
                    tags: ["Robotique", "Computer Vision", "Machine Learning"],
                },
                {
                    school: "Autre établissement",
                    degree: "Autre diplôme ou certification",
                    period: "2015 – 2018",
                    description: "Autre description de formation. Adaptez à votre parcours.",
                    tags: ["C++", "Python", "Embedded"],
                },
            ],
        },
    },

    /* ------------------------------------------------------------------ */
    /*  Projects                                                           */
    /* ------------------------------------------------------------------ */
    projects: {
        title: {
            en: <>My Recent <strong className="purple">Works</strong></>,
            fr: <>Mes <strong className="purple">projets</strong> récents</>,
        },
        subtitle: {
            en: "Here are a few projects I've worked on recently.",
            fr: "Voici quelques projets sur lesquels j'ai travaillé récemment.",
        },
    },

    /* ------------------------------------------------------------------ */
    /*  FindMeOn                                                           */
    /* ------------------------------------------------------------------ */
    findMeOn: {
        title: {
            en: <>Get In <strong className="purple">Touch</strong></>,
            fr: <>Me <strong className="purple">contacter</strong></>,
        },
        subtitle: {
            en: (
                <>
                    Whether you lead the{" "}
                    <strong className="purple">R&amp;D of a company</strong>{" "}
                    in full acceleration or drive{" "}
                    <strong className="purple">innovation</strong>{" "}
                    within a research center, I&apos;d be delighted to connect with you.
                    Contact me to turn your most complex concepts into real, robust, deployable solutions.
                    <br /><br />
                    Are you a{" "}
                    <strong className="purple">technology partner</strong> or an{" "}
                    <strong className="purple">engineering design office</strong>{" "}
                    looking for cutting-edge expertise in robotics, software architecture, or Computer Vision&nbsp;?
                    Let&apos;s meet and bring your most ambitious projects to life.
                </>
            ),
            fr: (
                <>
                    Que vous pilotiez la{" "}
                    <strong className="purple">R&amp;D d&apos;une entreprise</strong>{" "}
                    en pleine accélération ou que vous dirigiez l&apos;<strong className="purple">innovation</strong>{" "}
                    au sein d'un centre de recherche, je serais ravi d'échanger avec vous. Contactez-moi pour transformer vos concepts les plus complexes en solutions réelles, robustes et déployables.
                    <br /><br />
                    Vous êtes un{" "}
                    <strong className="purple">partenaire technologique</strong> ou un{" "}
                    <strong className="purple">bureau d&apos;études</strong>{" "}
                    à la recherche d'une expertise de pointe en robotique, architecture logicielle ou Computer Vision&nbsp;?
                    Rencontrons-nous pour donner vie à vos projets les plus ambitieux.
                </>
            ),
        },
    },

    /* ------------------------------------------------------------------ */
    /*  Footer                                                             */
    /* ------------------------------------------------------------------ */
    footer: {
        allRightsReserved: {
            en: "All rights reserved",
            fr: "Tous droits réservés",
        },
    },
};

export default translations;
