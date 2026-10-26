export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export interface Deployment {
  uid: string;
  id?: string;
  name: string;
  url: string | null;
  thumbnail: string | null;
  state: string;
  createdAt: string;
  target: string | null;
  provider: "vercel" | "render";
  type?: string;
  repo?: string | null;
  branch?: string | null;
}

export interface FeaturedProject {
  key: string;
  title: string;
  type: string;
  description: string;
  details: string;
  technologies: string[];
}

export interface TechnologyGroup {
  label: string;
  items: string[];
}

export interface PortfolioMetric {
  value: string;
  label: string;
}

export interface PortfolioData {
  site: {
    name: string;
    role: string;
    location: string;
    email: string;
    github: string;
    vercel: string;
    instagram: string;
    whatsapp: string;
  };
  portal: {
    welcome: string;
    headlineLines: string[];
    description: string;
    verticalNote: string;
    coordinate: string;
    coordinateCaption: string;
    stamp: string;
    messageEyebrow: string;
    messageLines: string[];
    businessChoice: {
      number: string;
      kicker: string;
      titleLines: string[];
      description: string;
      action: string;
    };
    technicalChoice: {
      number: string;
      kicker: string;
      titleLines: string[];
      description: string;
      action: string;
    };
    footerLeft: string;
    footerRight: string;
  };
  technical: {
    eyebrow: string;
    headlineLines: string[];
    headlineAccent: string;
    description: string;
    profileLabel: string;
    profileRole: string;
    profileTags: string[];
    aboutEyebrow: string;
    aboutTitleLines: string[];
    aboutParagraphs: string[];
    projectsEyebrow: string;
    projectsTitleLines: string[];
    projectsNote: string[];
    deploymentsEyebrow: string;
    deploymentsTitleLines: string[];
    stackEyebrow: string;
    stackTitleLines: string[];
    contactEyebrow: string;
    contactTitleLines: string[];
    contactDescription: string;
    footerLabel: string;
  };
  business: {
    eyebrow: string;
    title: string;
    accent: string;
    description: string;
    portraitLabel: string;
    productivityTitle: string;
    productivityDescription: string;
    organizationTitle: string;
    organizationDescription: string;
    manifestoNumber: string;
    manifestoText: string;
    manifestoDetail: string;
    solutionsEyebrow: string;
    solutionsTitle: string;
    solutionsAccent: string;
    solutionsDescription: string;
    solutions: Array<{
      title: string;
      description: string;
      message: string;
    }>;
    processEyebrow: string;
    processTitleLines: string[];
    processSteps: Array<{ title: string; description: string }>;
    contactEyebrow: string;
    contactTitleLines: string[];
    contactDescription: string;
    footerCaption: string;
  };
  featuredProjects: FeaturedProject[];
  technologyGroups: TechnologyGroup[];
  metrics: PortfolioMetric[];
}
