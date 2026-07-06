export type Language = "en" | "fr";

export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  details: string;
  technologies: string[];
  highlights: string[];
  image: string;
  screenshots?: string[];
};

export const projectsByLanguage: Record<Language, Project[]> = {
  en: [
    {
      id: 1,
      title: "MindCare-AI",
      category: "AI / Mobile / Full-Stack",
      description:
        "A mobile mental health companion app with rPPG-based heart rate estimation, emotion recognition, and an adaptive AI chatbot.",
      details:
        "MindCare-AI is a mobile mental health companion application designed to combine real-time physiological monitoring, emotion recognition, and conversational AI support in one platform. It analyzes live facial video from a smartphone camera to estimate heart rate using rPPG, signal filtering, and FFT-based processing, while also detecting emotional state through trained machine learning models. The application includes an adaptive chatbot that responds according to the user’s emotional and physiological context, helping provide personalized mental health support. The project also integrates a React Native (Expo) frontend, a secure Node.js/Express/JWT backend, MongoDB for data storage, and Python AI services exposed through REST APIs.",
      technologies: [
        "Python",
        "React Native",
        "Expo",
        "Flask",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "NLP",
        "Computer Vision",
        "rPPG",
      ],
      highlights: [
        "Real-time heart rate estimation from smartphone camera",
        "Emotion classification with trained AI models",
        "Adaptive chatbot based on emotional and physiological context",
        "Python AI services exposed through REST APIs",
      ],
      image: "/project/MindCare-AI/1.png",
      screenshots: [
        "/project/MindCare-AI/1.png",
        "/project/MindCare-AI/2.png",
        "/project/MindCare-AI/3.png",
        "/project/MindCare-AI/4.png",
        "/project/MindCare-AI/5.png",
      ],
    },
    {
      id: 2,
      title: "Hybrid Cloud DevOps Platform",
      category: "DevOps / Cloud",
      description:
        "A hybrid cloud infrastructure with CI/CD, monitoring, automation, and deployment orchestration.",
      details:
        "Designed and implemented a hybrid cloud solution with automated deployment workflows, code quality checks, monitoring, and container orchestration. The platform integrates AWS with on-premises infrastructure, Ansible automation, GitHub Actions CI/CD pipelines, Nexus artifact management, SonarQube analysis, and Grafana/Prometheus observability.",
      technologies: [
        "AWS",
        "Ansible",
        "Kubernetes",
        "GitHub Actions",
        "Nexus",
        "SonarQube",
        "Grafana",
        "Prometheus",
      ],
      highlights: [
        "Hybrid cloud integration with AWS and on-prem infrastructure",
        "Automated CI/CD pipelines",
        "Real-time monitoring and alerting",
        "Containerized deployment orchestration",
      ],
      image: "/projects/devops.png",
      screenshots: [
        "/project/devops/ALERTS.png",
        "/project/devops/CI_CD EKS.drawio.png",
        "/project/devops/GLOBALAWS.png",
      ],
    },
    {
      id: 3,
      title: "Moovi",
      category: "Mobile Development",
      description:
        "A React Native and Firebase app to browse trending films and save favorite movies.",
      details:
        "Developed a mobile application with React Native and Firebase that lets users browse trending films and manage a personal favorites list.",
      technologies: ["React Native", "Firebase", "JavaScript"],
      highlights: [
        "Trending movies list",
        "Favorites management",
        "Mobile-first UI",
      ],
      image: "/projects/dot-it.png",
      screenshots: [
        "/project/moovi/1.png",
        "/project/moovi/2.png",
        "/project/moovi/3.png",
      ],
    },
    {
      id: 4,
      title: "Academic Experience Website Project",
      category: "Web Development",
      description:
        "A web application for resource management, recruitment, and event coordination for academic clubs.",
      details:
        "Built a full-stack platform for academic clubs with resource management, recruitment portal, event tracking, and structured data storage.",
      technologies: ["Django", "Python", "HTML", "CSS", "JavaScript", "MySQL"],
      highlights: [
        "Resource management system",
        "Recruitment and member onboarding",
        "Event creation and attendance tracking",
        "Database-driven platform",
      ],
      image: "/projects/academic-website.png",
    },
    {
      id: 5,
      title: "Heart Disease Prediction Model",
      category: "Machine Learning",
      description:
        "A classification model to predict heart disease risk using clinical and demographic data.",
      details:
        "Built a machine learning classification system trained on 319,795 patient records with 18 medical features to predict heart disease risk. The project included preprocessing, feature scaling, missing-value handling, feature selection, hyperparameter tuning, and comparison of multiple algorithms to improve precision and robustness.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
      ],
      highlights: [
        "Compared Random Forest, Logistic Regression, SVM, and Gradient Boosting",
        "Feature selection and hyperparameter tuning",
        "90% precision on the test dataset",
      ],
      image: "/projects/heart-disease.png",
      screenshots: [
        "/project/heartdisease/1.png",
        "/project/heartdisease/2.png",
        "/project/heartdisease/3.png",
        "/project/heartdisease/4.png",
      ],
    },
    {
      id: 6,
      title: "Twitter Sentiment Analysis",
      category: "Data Science",
      description:
        "A sentiment analysis project to study opinion patterns in social media data.",
      details:
        "Analyzed tweets to understand public opinion and attitudes toward specific topics or brands. The project focused on sentiment exploration, data cleaning, and visualization to reveal opinion patterns in social media data.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
      ],
      highlights: [
        "Sentiment exploration",
        "Social media analysis",
        "Data visualization",
      ],
      image: "/projects/twitter-sentiment.png",
      screenshots: [
        "/project/twitter/1.png",
        "/project/twitter/2.png",
        "/project/twitter/3.png",
        "/project/twitter/4.png",
      ],
    },
    {
      id: 7,
      title: "EDA of US Accident",
      category: "Data Analysis",
      description:
        "An exploratory data analysis project on traffic accidents to find patterns and hotspots.",
      details:
        "Studied traffic accident data to identify patterns related to road conditions, weather, and time of day. The analysis highlighted accident hotspots and contributing factors using exploratory data analysis and visualization.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
      ],
      highlights: [
        "Accident hotspots",
        "Weather and road analysis",
        "Time-based patterns",
      ],
      image: "/projects/us-accident.png",
      screenshots: [
        "/project/us_accident/1.png",
        "/project/us_accident/2.png",
        "/project/us_accident/3.png",
      ],
    },
  ],
  fr: [
    {
      id: 1,
      title: "MindCare-AI",
      category: "IA / Mobile / Full-Stack",
      description:
        "Une application mobile d’accompagnement en santé mentale avec estimation du rythme cardiaque via rPPG, reconnaissance des émotions et chatbot IA adaptatif.",
      details:
        "MindCare-AI est une application mobile d’accompagnement en santé mentale qui combine la surveillance physiologique en temps réel, la reconnaissance des émotions et l’assistance conversationnelle par IA dans une seule plateforme. Elle analyse un flux vidéo facial capturé par caméra smartphone afin d’estimer le rythme cardiaque à l’aide de techniques rPPG, de filtrage et de traitement fréquentiel FFT, tout en détectant l’état émotionnel grâce à des modèles de machine learning entraînés. L’application inclut aussi un chatbot adaptatif qui ajuste ses réponses selon le contexte émotionnel et physiologique de l’utilisateur, afin de proposer un soutien personnalisé. Le projet intègre également une interface React Native (Expo), un backend sécurisé Node.js/Express/JWT, MongoDB pour la persistance des données et des services IA en Python exposés via des API REST.",
      technologies: [
        "Python",
        "React Native",
        "Expo",
        "Flask",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "NLP",
        "Vision par ordinateur",
        "rPPG",
      ],
      highlights: [
        "Estimation du rythme cardiaque en temps réel via caméra smartphone",
        "Classification des émotions avec des modèles IA",
        "Chatbot adaptatif selon le contexte émotionnel et physiologique",
        "Services IA Python exposés via API REST",
      ],
      image: "/project/MindCare-AI/1.png",
      screenshots: [
        "/project/MindCare-AI/1.png",
        "/project/MindCare-AI/2.png",
        "/project/MindCare-AI/3.png",
        "/project/MindCare-AI/4.png",
        "/project/MindCare-AI/5.png",
      ],
    },
    {
      id: 2,
      title: "Plateforme DevOps Cloud Hybride",
      category: "DevOps / Cloud",
      description:
        "Une infrastructure cloud hybride avec CI/CD, monitoring, automatisation et déploiement.",
      details:
        "Conception et mise en place d’une solution cloud hybride avec automatisation des déploiements, contrôle qualité du code, supervision et orchestration de conteneurs. La plateforme intègre AWS avec une infrastructure locale, Ansible pour l’automatisation, GitHub Actions pour les pipelines CI/CD, Nexus pour la gestion des artefacts, SonarQube pour l’analyse de qualité, ainsi que Grafana et Prometheus pour l’observabilité.",
      technologies: [
        "AWS",
        "Ansible",
        "Kubernetes",
        "GitHub Actions",
        "Nexus",
        "SonarQube",
        "Grafana",
        "Prometheus",
      ],
      highlights: [
        "Intégration cloud hybride avec AWS et infrastructure locale",
        "Pipelines CI/CD automatisés",
        "Monitoring et alerting en temps réel",
        "Déploiement conteneurisé",
      ],
      image: "/projects/devops.png",
      screenshots: [
        "/project/devops/ALERTS.png",
        "/project/devops/CI_CD EKS.drawio.png",
        "/project/devops/GLOBALAWS.png",
      ],
    },
    {
      id: 3,
      title: "moovi",
      category: "Développement Mobile",
      description:
        "Application React Native et Firebase pour voir les films tendance et gérer les favoris.",
      details:
        "Développement d’une application mobile avec React Native et Firebase permettant de consulter les films tendance et de gérer une liste personnelle de favoris.",
      technologies: ["React Native", "Firebase", "JavaScript"],
      highlights: [
        "Liste des films tendance",
        "Gestion des favoris",
        "Interface mobile",
      ],
      image: "/projects/dot-it.png",
      screenshots: [
        "/project/moovi/1.png",
        "/project/moovi/2.png",
        "/project/moovi/3.png",
      ],
    },
    {
      id: 4,
      title: "Projet Web Expérience Académique",
      category: "Développement Web",
      description:
        "Application web pour la gestion des ressources, le recrutement et la coordination des événements des clubs académiques.",
      details:
        "Plateforme full-stack pour les clubs académiques avec gestion des ressources, portail de recrutement, suivi des événements et stockage structuré des données.",
      technologies: ["Django", "Python", "HTML", "CSS", "JavaScript", "MySQL"],
      highlights: [
        "Système de gestion des ressources",
        "Recrutement et intégration des membres",
        "Création d’événements et suivi de présence",
        "Plateforme pilotée par base de données",
      ],
      image: "/projects/academic-website.png",
    },
    {
      id: 5,
      title: "Modèle de prédiction des maladies cardiaques",
      category: "Machine Learning",
      description:
        "Un modèle de classification pour prédire le risque de maladie cardiaque à partir de données cliniques et démographiques.",
      details:
        "Développement d’un système de classification entraîné sur 319 795 dossiers patients avec 18 variables médicales pour prédire le risque de maladie cardiaque. Le projet inclut le prétraitement, la mise à l’échelle, la gestion des valeurs manquantes, la sélection de variables, le réglage d’hyperparamètres et la comparaison de plusieurs algorithmes afin d’améliorer la précision et la robustesse.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
      ],
      highlights: [
        "Comparaison de Random Forest, Logistic Regression, SVM et Gradient Boosting",
        "Sélection de variables et réglage d’hyperparamètres",
        "90 % de précision sur le jeu de test",
      ],
      image: "/projects/heart-disease.png",
      screenshots: [
        "/project/heartdisease/1.png",
        "/project/heartdisease/2.png",
        "/project/heartdisease/3.png",
        "/project/heartdisease/4.png",
      ],
    },
    {
      id: 6,
      title: "Analyse de sentiment Twitter",
      category: "Data Science",
      description:
        "Projet d’analyse de sentiment pour étudier les opinions dans les données des réseaux sociaux.",
      details:
        "Analyse de tweets pour comprendre l’opinion publique et les attitudes envers des sujets ou marques spécifiques. Le projet s’est concentré sur l’exploration des sentiments, le nettoyage des données et la visualisation pour faire ressortir les tendances d’opinion.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
      ],
      highlights: [
        "Analyse des sentiments",
        "Étude des réseaux sociaux",
        "Visualisation des données",
      ],
      image: "/projects/twitter-sentiment.png",
      screenshots: [
        "/project/twitter/1.png",
        "/project/twitter/2.png",
        "/project/twitter/3.png",
        "/project/twitter/4.png",
      ],
    },
    {
      id: 7,
      title: "EDA des accidents aux États-Unis",
      category: "Analyse de données",
      description:
        "Projet d’analyse exploratoire des accidents de la route pour identifier les motifs et les zones à risque.",
      details:
        "Étude des données d’accidents de la route pour identifier les tendances liées aux conditions routières, à la météo et aux horaires. L’analyse met en évidence les zones à risque et les facteurs contribuant aux accidents à l’aide de l’analyse exploratoire et de la visualisation.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
      ],
      highlights: [
        "Zones à risque",
        "Analyse météo et route",
        "Patterns temporels",
      ],
      image: "/projects/us-accident.png",
      screenshots: [
        "/project/us_accident/1.png",
        "/project/us_accident/2.png",
        "/project/us_accident/3.png",
      ],
    },
  ],
};

export const skillsByLanguage: Record<
  Language,
  { category: string; skills: string[] }[]
> = {
  en: [
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS",
        "Kubernetes",
        "Ansible",
        "GitHub Actions",
        "Nexus",
        "SonarQube",
        "Grafana",
        "Prometheus",
      ],
    },
    {
      category: "Programming",
      skills: ["Python", "JavaScript", "Java", "YAML", "MySQL", "HTML", "CSS"],
    },
    {
      category: "Data Science",
      skills: [
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
      ],
    },
  ],
  fr: [
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS",
        "Kubernetes",
        "Ansible",
        "GitHub Actions",
        "Nexus",
        "SonarQube",
        "Grafana",
        "Prometheus",
      ],
    },
    {
      category: "Programmation",
      skills: ["Python", "JavaScript", "Java", "YAML", "MySQL", "HTML", "CSS"],
    },
    {
      category: "Data Science",
      skills: [
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
      ],
    },
  ],
};

export const projectIntroByLanguage: Record<Language, string> = {
  en: "Selected work combining AI, full-stack development, cloud, and practical problem-solving.",
  fr: "Une sélection de projets mêlant IA, développement full-stack, cloud et résolution de problèmes concrets.",
};

export const socialLinks = [
  {
    id: "linkedin",
    href: "https://linkedin.com/in/rayen-ben-cheikh-062a291bb",
    external: true,
  },
  { id: "github", href: "https://github.com/RayenBenCheikh", external: true },
  { id: "email", href: "mailto:bencheikhrayen2001@gmail.com", external: false },
] as const;
