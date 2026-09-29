// ✏️ Edit this file to personalise your portfolio. Everything on the site comes from here.

export const profile = {
  name: 'Darshan N',
  role: 'Senior Software Engineer',
  tagline: 'Senior Software Engineer who designs scalable software and test architectures, and builds robust automation for web, mobile and desktop.',
  location: 'Bangalore, India',
  email: 'darshanynvfx@gmail.com',
  resumeUrl: '', // e.g. './resume.pdf' (put the file in /public)
  avatar: 'https://avatars.githubusercontent.com/u/120182223?v=4', // or './avatar.jpg' (put the file in /public)
  about: [
    "I'm a Senior Software Engineer at Fireflink with deep expertise in designing both software architecture and test architecture — from scalable, maintainable systems to automation frameworks that teams can rely on.",
    "I'm passionate about building robust automation across web, mobile and desktop, and exploring the depths of reverse engineering apps and APIs.",
    "I'm always eager to solve challenging problems and make tech accessible to everyone. I love working with cutting-edge tools, collaborating on open-source projects and sharing what I learn with the community.",
    "Beyond software, I build home automation projects with ESP32 and Raspberry Pi, create 3D models, and spend a lot of time behind the camera doing photography.",
    "When I'm not making things, you'll find me trekking scenic trails, riding my bike across open roads, go-karting, or playing badminton and football.",
  ],
  socials: {
    github: 'https://github.com/darshanyn04',
    linkedin: 'https://www.linkedin.com/in/darshan-n-760530354/',
    artstation: 'https://www.artstation.com/darshan_yn',
    instagram: 'https://www.instagram.com/jack_0f_all_trade5/',
    twitter: '',
  },
}

export const stats = [
  { value: '14', label: 'Public repositories' },
  { value: '3', label: 'Platforms automated' },
  { value: '2022', label: 'Building on GitHub since' },
]

export const skills = [
  { group: 'Architecture & Design', items: ['Software Architecture', 'Test Architecture', 'System Design', 'Design Patterns', 'Framework Design'] },
  { group: 'Languages', items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'Swift'] },
  { group: 'Test Automation', items: ['Selenium', 'Appium', 'Playwright', 'Rest Assured', 'PyAutoGUI'] },
  { group: 'Frameworks', items: ['Spring', 'Node.js', 'Express', 'Flutter', 'Android'] },
  { group: 'AI & Tools', items: ['Ollama', 'Vision-language models', 'Git', 'Gradle', 'AppleScript'] },
  { group: 'Hardware & IoT', items: ['ESP32', 'Raspberry Pi', 'MQTT', 'C/C++', 'Sensors & Relays'] },
  { group: '3D & Creative', items: ['3ds Max', 'Maya', 'V-Ray', 'Photoshop', 'Photography'] },
]

// Rotating titles typed out in the hero
export const roles = ['Senior Software Engineer', 'Software & Test Architect', 'Automation Engineer', 'Home Automation Maker', '3D Modeller', 'Photographer']

// ✏️ Example entries — replace with your real ESP32 / Raspberry Pi builds
export const hardwareProjects = [
  {
    title: 'Smart Home Hub',
    description: 'A Raspberry Pi acting as the brain of the house — collects sensor data, runs automations and exposes a dashboard to control devices from any phone.',
    tags: ['Raspberry Pi', 'MQTT', 'Node.js'],
    icon: '🏠',
    github: '',
  },
  {
    title: 'ESP32 Smart Switches',
    description: 'Wi-Fi relay modules built on ESP32 that turn ordinary lights and appliances into remotely controllable, schedulable smart devices.',
    tags: ['ESP32', 'C++', 'Relays'],
    icon: '💡',
    github: '',
  },
  {
    title: 'Room Climate Sensors',
    description: 'Low-power ESP32 nodes that report temperature and humidity, triggering fans and alerts automatically when thresholds are crossed.',
    tags: ['ESP32', 'Sensors', 'MQTT'],
    icon: '🌡️',
    github: '',
  },
]

// 3D modelling work, pulled from ArtStation (https://www.artstation.com/darshan_yn)
export const artstation = {
  url: 'https://www.artstation.com/darshan_yn',
  software: ['3ds Max', 'Maya', 'V-Ray', 'Keyshot', 'Marvelous Designer', 'Photoshop', 'Illustrator', 'After Effects'],
  artworks: [
    {
      title: "Little hut",
      description: "Modelling in Maya and Texturing in Photoshop",
      url: "https://www.artstation.com/artwork/4bd8oq",
      cover: "https://cdna.artstation.com/p/assets/videos/images/017/933/670/small_square/darshan-n-780464083-295x166.jpg?1557904051",
      year: "2019"
    },
    {
      title: "Post Apocalyptic Car",
      description: "Game asset",
      url: "https://www.artstation.com/artwork/L2xOJK",
      cover: "https://cdnb.artstation.com/p/assets/images/images/017/704/025/small_square/darshan-n-car-colour0020.jpg?1557038829",
      year: "2019"
    },
    {
      title: "XLR 8",
      description: "This is character in Ben 10",
      url: "https://www.artstation.com/artwork/A9Q20y",
      cover: "https://cdnb.artstation.com/p/assets/covers/images/015/478/537/small_square/darshan-n-1-1.jpg?1548498614",
      year: "2019"
    },
    {
      title: "BG Design",
      description: "Bg designed for movie",
      url: "https://www.artstation.com/artwork/L2RayR",
      cover: "https://cdnb.artstation.com/p/assets/images/images/014/477/763/small_square/darshan-n-24799495-2028431237438483-4539951720050347267-o.jpg?1544110261",
      year: "2018"
    },
    {
      title: "Gun",
      description: "Gun made for making games",
      url: "https://www.artstation.com/artwork/VdgBwR",
      cover: "https://cdna.artstation.com/p/assets/covers/images/013/854/778/small_square/darshan-n-untitled-2.jpg?1541394355",
      year: "2018"
    },
    {
      title: "Wind mill",
      description: "Game art",
      url: "https://www.artstation.com/artwork/ZN6nR",
      cover: "https://cdnb.artstation.com/p/assets/images/images/012/757/863/small_square/darshan-n-untitled-1.jpg?1536347378",
      year: "2018"
    },
    {
      title: "Bus",
      description: "Bus",
      url: "https://www.artstation.com/artwork/Ln1Ql",
      cover: "https://cdnb.artstation.com/p/assets/images/images/012/757/811/small_square/darshan-n-untitled-168.jpg?1536347177",
      year: "2018"
    },
    {
      title: "Star Wars Space ship",
      description: "Space ship",
      url: "https://www.artstation.com/artwork/YmDlP",
      cover: "https://cdna.artstation.com/p/assets/images/images/012/757/706/small_square/darshan-n-space-ship-2.jpg?1536346822",
      year: "2018"
    },
    {
      title: "Container",
      description: "Next gen game asset",
      url: "https://www.artstation.com/artwork/gkX9L",
      cover: "https://cdnb.artstation.com/p/assets/images/images/012/316/357/small_square/darshan-n-untitled-133.jpg?1534175429",
      year: "2018"
    },
    {
      title: "Digital portfolio",
      description: "",
      url: "https://www.artstation.com/artwork/1AYbe",
      cover: "https://cdna.artstation.com/p/assets/videos/images/012/316/276/small_square/darshan-n-719263955-640.jpg?1534175202",
      year: "2018"
    },
    {
      title: "Cap car (Game asset)",
      description: "This is game asset designed in 3DS Max. Which is ready for all kinds of road but its meant only to run on dirt. It is a low-poly model.",
      url: "https://www.artstation.com/artwork/DgD2E",
      cover: "https://cdna.artstation.com/p/assets/images/images/012/106/108/small_square/darshan-n-untitled-140.jpg?1533065450",
      year: "2018"
    },
    {
      title: "Character design",
      description: "This character has been designed in Maya.",
      url: "https://www.artstation.com/artwork/zaee6",
      cover: "https://cdnb.artstation.com/p/assets/images/images/012/045/053/small_square/darshan-n-messi-1-130.jpg?1532722336",
      year: "2018"
    },
    {
      title: "Game asset",
      description: "This is the panzer which is useful in war games.",
      url: "https://www.artstation.com/artwork/6Wggw",
      cover: "https://cdna.artstation.com/p/assets/images/images/012/045/030/small_square/darshan-n-tank-121.jpg?1532722091",
      year: "2018"
    },
    {
      title: "Game asset",
      description: "These are the game assets designed in 3ds max",
      url: "https://www.artstation.com/artwork/zaPYw",
      cover: "https://cdnb.artstation.com/p/assets/images/images/011/888/887/small_square/darshan-n-img-20180719-003532-850.jpg?1531940892",
      year: "2018"
    },
    {
      title: "Ambara Chumbana (clock tower)",
      description: "This is the monument which is located in Bangalore IT center of india",
      url: "https://www.artstation.com/artwork/JxGVR",
      cover: "https://cdnb.artstation.com/p/assets/images/images/011/736/723/small_square/darshan-n-ambara-chumbana-48.jpg?1531149127",
      year: "2018"
    },
    {
      title: "Monster Truck",
      description: "I made my own sketch to create a model of this beast.",
      url: "https://www.artstation.com/artwork/KqZkx",
      cover: "https://cdnb.artstation.com/p/assets/images/images/011/736/187/small_square/darshan-n-untitled-84.jpg?1531147368",
      year: "2018"
    },
    {
      title: "3D weapons",
      description: "This is the weapon which was used in wars. Now this has become history.",
      url: "https://www.artstation.com/artwork/x1Rxr",
      cover: "https://cdnb.artstation.com/p/assets/images/images/011/736/129/small_square/darshan-n-untitled-80.jpg?1531147075",
      year: "2018"
    },
    {
      title: "Costume",
      description: "This is textured 3d model",
      url: "https://www.artstation.com/artwork/nrEVE",
      cover: "https://cdnb.artstation.com/p/assets/images/images/011/563/267/small_square/darshan-n-drees7-68.jpg?1530210497",
      year: "2018"
    },
    {
      title: "3D asset",
      description: "This is the model of UB tower in Bangalore.",
      url: "https://www.artstation.com/artwork/rgv2E",
      cover: "https://cdna.artstation.com/p/assets/images/images/011/306/722/small_square/darshan-n-ub.jpg?1528905633",
      year: "2018"
    },
    {
      title: "3D asset for 3D short movie",
      description: "These are the assets made for short movie.",
      url: "https://www.artstation.com/artwork/rgvz5",
      cover: "https://cdna.artstation.com/p/assets/images/images/011/305/830/small_square/darshan-n-2-38.jpg?1528902508",
      year: "2018"
    },
    {
      title: "3D modeling in 3DS Max",
      description: "This is the model made in 3DS Max. it is totally modified automobile",
      url: "https://www.artstation.com/artwork/zg0Pd",
      cover: "https://cdna.artstation.com/p/assets/images/images/011/305/406/small_square/darshan-n-untitled-11.jpg?1528900990",
      year: "2018"
    }
  ],
}

// ✏️ Photography: just drop images (jpg/png/webp) into src/photos/ — they appear in the gallery automatically,
// captioned from the file name (e.g. "sunrise-trek.jpg" → "Sunrise trek").
// The placeholders below are only shown while that folder is empty.
export const photos = [
  { src: '', caption: 'Mountain trails' },
  { src: '', caption: 'Open roads' },
  { src: '', caption: 'Street' },
  { src: '', caption: 'Golden hour' },
  { src: '', caption: 'Night sky' },
  { src: '', caption: 'Portraits' },
]

export const experience = [
  {
    company: 'Fireflink',
    role: 'Senior Software Engineer',
    period: 'Present',
    points: [
      'Working on Fireflink — a blazing fast and flexible test automation solution.',
      'Designing software and test architecture for the platform, shaping how features are built, tested and scaled.',
      'Building robust automation frameworks spanning web, mobile and desktop platforms.',
      'Contributing to open-source automation tooling in the Appium ecosystem, including Appium Inspector and the UiAutomator2 driver.',
    ],
  },
]

export const projects = [
  {
    title: 'Automation Visual Agent',
    description: 'A screenshot-driven computer-use agent that runs a vision-language model (Qwen3-VL) locally through Ollama. It acts purely from pixels — no DOM selectors — driving the mouse, keyboard and scrolling in a browser or on the full desktop.',
    tags: ['Python', 'Ollama', 'Playwright', 'PyAutoGUI'],
    github: 'https://github.com/darshanyn04/automation-visual-agent',
    live: '',
  },
  {
    title: 'Desktop Manager',
    description: 'A Node.js library and CLI for desktop automation, screen capture and live screen streaming (MJPEG / WebSocket), with an Express HTTP API designed to integrate with Appium and native desktop workflows.',
    tags: ['Node.js', 'Express', 'Swift', 'Appium'],
    github: 'https://github.com/darshanyn04/desktop-manager',
    live: '',
  },
  {
    title: 'Playwright Launcher',
    description: 'A Node.js library and API server that launches Chromium, Firefox or WebKit over HTTP and returns the WebSocket endpoint for remote automation — similar to how Appium works.',
    tags: ['Node.js', 'Playwright', 'REST API'],
    github: 'https://github.com/darshanyn04/playwright-launcher',
    live: '',
  },
  {
    title: 'Browser Controll',
    description: 'An npm package and CLI to control Safari, Chrome and Firefox on macOS using Node.js and AppleScript.',
    tags: ['Node.js', 'AppleScript', 'macOS', 'CLI'],
    github: 'https://github.com/darshanyn04/browser-controll',
    live: '',
  },
  {
    title: 'Benchmark Tool',
    description: 'A full-stack benchmarking tool with a separate frontend and backend, built for measuring automation performance.',
    tags: ['TypeScript', 'Full-stack'],
    github: 'https://github.com/darshanyn04/benchmark-tool',
    live: '',
  },
  {
    title: 'Appium Inspector',
    description: 'Open-source contribution to the GUI inspector for mobile apps, powered by Appium — magnifying the world of mobile automation.',
    tags: ['JavaScript', 'Appium', 'Open Source'],
    github: 'https://github.com/darshanyn04/appium-inspector',
    live: 'https://appium.github.io/appium-inspector/',
  },
]
