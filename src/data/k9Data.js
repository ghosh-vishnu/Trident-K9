/**
 * Trident K9 Training Center - Enterprise Data Repository
 */

export const HERO_DATA = {
  headline: "Expert Dog Training & K9 Security Services",
  subheadline: "Empowering dogs through precision obedience training and deploying elite K9 security squads for industrial plants, corporate campuses, and private estates.",
  heroImage: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=1600&q=80",
  imageAlt: "Trained Belgian Malinois K9 in alert posture"
};

export const ABOUT_DATA = {
  title: "Canine Mastery & Industrial Security Precision",
  badge: "About Trident K9",
  description: "Trident K9 Training Center is an elite tactical canine facility dedicated to professional dog training and high-vigilance industrial security. Our certified handlers combine positive reinforcement methods with structured boundary conditioning.",
  highlights: [
    {
      icon: "Shield",
      title: "Science-Backed Conditioning",
      desc: "Methodical training routines tailored to each dog's temperament, drive, and mental endurance."
    },
    {
      icon: "Zap",
      title: "Industrial Security Squads",
      desc: "K9 teams trained specifically for high-risk perimeter protection, intruder deterrence, and night vigilance."
    },
    {
      icon: "Award",
      title: "Handler Professionalism",
      desc: "Our handlers maintain strict ethics, physical readiness, and operational safety standards."
    },
    {
      icon: "Activity",
      title: "Working Breed Specialization",
      desc: "Specialized pathways for German Shepherds, Dobermans, Malinois, Rottweilers, and Labradors."
    }
  ]
};

export const TRAINING_SERVICES = [
  {
    id: "puppy-obedience",
    icon: "Dog",
    title: "Puppy Training & Basic Obedience",
    shortDesc: "Foundation conditioning for young dogs, covering leash manners, social conditioning, recall, and impulse control.",
    details: [
      "Leash tension management & heel walking",
      "Environmental socialization & handler focus",
      "Potty conditioning & crate discipline",
      "Essential commands: Sit, Stay, Down, Come"
    ],
    duration: "4 - 6 Weeks Program",
    badge: "Foundation Level"
  },
  {
    id: "advanced-obedience",
    icon: "Award",
    title: "Advanced Off-Leash Obedience",
    shortDesc: "Refining responsiveness under high distraction environments with reliable distance execution.",
    details: [
      "Total off-leash recall under distraction",
      "Distance command execution on the move",
      "Public space manners & impulse control",
      "Household boundaries & greeting etiquette"
    ],
    duration: "6 - 8 Weeks Program",
    badge: "Advanced Level"
  },
  {
    id: "obedience-demonstration",
    icon: "Sparkles",
    title: "Dog Obedience Demonstrations",
    shortDesc: "Live tactical and precision obedience displays for educational expos, corporate showcases, and public events.",
    details: [
      "Precision heelwork and synchronized drills",
      "Agility course navigation & obstacle mastery",
      "Public interaction and controlled demeanor",
      "Educational talks on canine body language"
    ],
    duration: "Custom Event Sessions",
    badge: "Public Showcase"
  }
];

export const SECURITY_SERVICES = [
  {
    id: "security-squads",
    icon: "ShieldAlert",
    title: "Dog Squads for Security",
    shortDesc: "Deployable mobile K9 units paired with professional handlers for high-vigilance asset protection.",
    features: [
      "Handler + K9 paired defense units",
      "Gate entry deterrence & crowd management",
      "Night shift vigilance & active threat detection",
      "Emergency tactical response ready"
    ],
    idealFor: "Commercial complexes, gated communities & VIP security"
  },
  {
    id: "plant-guarding",
    icon: "Building2",
    title: "Plant Guarding & Industrial Premises",
    shortDesc: "Specialized static and roving perimeter defense for factories, warehouses, power plants, and construction sites.",
    features: [
      "Intruder deterrence along vast perimeters",
      "Protection of high-value equipment & raw materials",
      "Scheduled yard sweeps and perimeter logging",
      "Weather-hardened working K9 teams"
    ],
    idealFor: "Manufacturing units, solar plants & warehouses"
  },
  {
    id: "patrolling",
    icon: "Footprints",
    title: "Perimeter Patrolling",
    shortDesc: "Systematic foot and vehicular patrols covering large geographical expanses with heightened canine sensory detection.",
    features: [
      "Early warning sensory detection (sight & scent)",
      "High visibility deterrent presence",
      "Regular checkpoint logging & patrol routines",
      "Integration with electronic CCTV security"
    ],
    idealFor: "Solar farms, rural property perimeters & industrial estates"
  },
  {
    id: "tracking",
    icon: "Search",
    title: "Tactical Scent & Area Tracking",
    shortDesc: "Specialized scent-following K9s trained to locate trespassers, lost items, or unauthorized breaches in open zones.",
    features: [
      "Ground scent trail tracking",
      "Open area search and perimeter sweeps",
      "Non-destructive bark-and-alert behavior",
      "Handler-guided tactical search patterns"
    ],
    idealFor: "Large estates, agricultural land & perimeter breaches"
  }
];

export const FEATURED_BREEDS = [
  {
    id: "german-shepherd",
    name: "German Shepherd",
    country: "Germany",
    category: "Working & Guard Breed",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=800&q=80",
    description: "Renowned worldwide for unmatched intelligence, versatility, and loyalty in both high-tier obedience and tactical guarding.",
    traits: ["High Trainability", "Intelligent", "Protective Instinct", "Loyal Companion"],
    roles: ["Personal Protection", "Plant Guarding", "Tracking", "Obedience"],
    scores: {
      intelligence: 95,
      guardDrive: 90,
      agility: 88,
      temperament: 92
    }
  },
  {
    id: "doberman",
    name: "Doberman Pinscher",
    country: "Germany",
    category: "Perimeter Patrol Breed",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80",
    description: "Sleek, powerful, and exceptionally fast. Dobermans excel in perimeter patrolling, swift threat response, and commanding presence.",
    traits: ["Alert & Vigilant", "Fearless", "High Speed", "Focused Guarding"],
    roles: ["Perimeter Patrolling", "Industrial Security", "Tactical Squads"],
    scores: {
      intelligence: 92,
      guardDrive: 96,
      agility: 95,
      temperament: 85
    }
  },
  {
    id: "rottweiler",
    name: "Rottweiler",
    country: "Germany",
    category: "Heavy Asset Guard Breed",
    image: "https://images.unsplash.com/photo-1567752881298-894bb81f9379?auto=format&fit=crop&w=800&q=80",
    description: "Robust physical build with an unwavering protective nature. Ideal for static plant guarding and asset deterrence.",
    traits: ["Formidable Strength", "Self-Assured", "Devoted Guard", "High Endurance"],
    roles: ["Plant Guarding", "Static Defense", "Asset Protection"],
    scores: {
      intelligence: 88,
      guardDrive: 95,
      agility: 80,
      temperament: 90
    }
  },
  {
    id: "belgian-shepherd",
    name: "Belgian Shepherd (Malinois)",
    country: "Belgium",
    category: "Elite Tactical K9 Breed",
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80",
    description: "The gold standard for modern police and military working K9 units worldwide. Driven, athletic, and infinitely capable.",
    traits: ["Unrivaled Drive", "Agile & Fast", "Extreme Focus", "Tactical Precision"],
    roles: ["Tactical Squads", "Tracking", "Demonstrations", "High-Risk Security"],
    scores: {
      intelligence: 98,
      guardDrive: 98,
      agility: 99,
      temperament: 88
    }
  },
  {
    id: "labrador",
    name: "Labrador Retriever",
    country: "Canada",
    category: "Obedience & Scent Detection",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
    description: "Eager to please, gentle-natured yet possessing a world-class olfactory sense perfect for specialized tracking and public obedience.",
    traits: ["Gentle Temperament", "Superior Olfactory Sense", "Eager Learner", "Family Friendly"],
    roles: ["Basic & Advanced Obedience", "Scent Tracking", "Demonstrations"],
    scores: {
      intelligence: 90,
      guardDrive: 40,
      agility: 85,
      temperament: 99
    }
  }
];

export const GALLERY_IMAGES = [
  {
    id: "g1",
    title: "Tactical Obedience & Focus Drill",
    category: "Obedience",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80",
    caption: "German Shepherd handler practicing precision heelwork and eye-contact focus during routine morning training."
  },
  {
    id: "g2",
    title: "K9 Dusk Perimeter Patrol",
    category: "Security",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=1200&q=80",
    caption: "Handler with Belgian Malinois performing scheduled dusk perimeter check along security boundaries."
  },
  {
    id: "g3",
    title: "Doberman Vigilance Posture",
    category: "Breeds",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=1200&q=80",
    caption: "Purebred Doberman showcasing disciplined stance and high environmental alertness."
  },
  {
    id: "g4",
    title: "Puppy Socialization & Leash Training",
    category: "Obedience",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=80",
    caption: "Early foundation training: establishing positive reinforcement and leash confidence."
  },
  {
    id: "g5",
    title: "Field Scent Tracking Exercise",
    category: "Security",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
    caption: "Scent tracking K9 navigating open terrain to trace specific scent lines."
  },
  {
    id: "g6",
    title: "Obedience Demonstration Showcase",
    category: "Obedience",
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=1200&q=80",
    caption: "Synchronized distance command drill during public obedience showcase."
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Assessment & Temperament Evaluation",
    desc: "Every dog or security deployment begins with a structured evaluation of drive, nerve clarity, and baseline responsiveness."
  },
  {
    step: "02",
    title: "Customized Training Blueprint",
    desc: "We formulate a tailored progression path matching the specific needs of pet owners or industrial security clients."
  },
  {
    step: "03",
    title: "Disciplined Execution & Conditioning",
    desc: "Rigorous daily training sessions with experienced handlers in real-world environmental conditions."
  },
  {
    step: "04",
    title: "Handler Transfer & Ongoing Support",
    desc: "We train the dog's owner or facility guard handlers to seamlessly maintain commands and tactical protocols."
  }
];

export const FAQS = [
  {
    q: "At what age should puppy training begin?",
    a: "Puppy training can begin as early as 8 to 12 weeks for basic socialization, crate discipline, and gentle leash introducing. Formal obedience programs usually start around 16 weeks."
  },
  {
    q: "What types of industrial properties can Trident K9 security squads protect?",
    a: "Our K9 squads are trained for manufacturing plants, solar farms, warehouses, construction zones, logistics hubs, and private estates needing 24/7 high-vigilance protection."
  },
  {
    q: "Are security K9s safe around authorized personnel and staff?",
    a: "Yes. Our security K9s undergo rigorous control training. They respond exclusively to designated handler commands and do not act aggressively without a verified security threat or command."
  },
  {
    q: "How can I replace placeholder images with actual facility photos?",
    a: "All image paths in Trident K9's codebase are stored in src/data/k9Data.js. You can simply replace the image URLs with paths to your local image files stored in public/images/."
  }
];
