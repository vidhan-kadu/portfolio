import type { OtherProject, Project } from "../../types/types";

const projectContent: Project[] = [
 {
    title: "Wanderlust",
    subTitle: "Full-Stack Travel Accommodation Platform ",
    github: "https://github.com/vidhan-kadu/wanderlust-travel-app",
    live: "https://wanderlust-kbm0.onrender.com/",
    description: (
      <ul className=" text-xl list-disc pl-5 space-y-2 text-primary">
        <li>
          Built a modular MVC-based backend using Node.js, Express.js, and
          MongoDB with fully structured CRUD operations.
        </li>
        <li>
          Implemented secure user authentication and session management using
          Passport.js (Local Strategy).
        </li>

        <li>
          Integrated Cloudinary for cloud-based image storage and Leaflet.js
          with OpenStreetMap for dynamic location-based visualization.
        </li>
        <li>
          Responsive and accessible UI built for consistent experience across
          all devices.
        </li>
      </ul>
    ),
    badge: "Full-Stack",
    image: "/assets/project/wanderlust.png",
    stack: ["Node.js", "Express.js", "MongoDB","EJS", "BootStrap","Passport.js","Cloudinary","Leaflet.js + OpenStreetMap"],
  },
  {
    title: "ThinkBot AI",
    subTitle: "AI-Powered Web Assistant",
    github: "https://github.com/vidhan-kadu/thinkbot-ai",
    live: "https://thinkbot-ai-nine.vercel.app/",
    description: (
      <ul className=" text-xl list-disc pl-5 space-y-2 text-primary">
        <li>
          Designed RESTful APIs using Node.js and Express.js to securely process
          AI prompts and persist conversation history in MongoDB.
        </li>
        <li>
          Implemented JWT-based authentication with user-specific chat thread
          management.
        </li>
        <li>
          Developed a dynamic, fully responsive chat interface with Markdown
          rendering and real-time typing effects.
        </li>
        <li>
          Deployed production-ready architecture using Vercel (frontend) and
          Render (backend) with environment-based configuration management
        </li>
      </ul>
    ),
    badge: "Full-Stack",
    image: "/assets/project/thinkbotAI.png",
    stack: ["React", "Node.js", "Express.js","GrokAI API","JWT Authentication","RESTFul APIs","Tailwind.css" ,"MongoDB"],
  },
 
    {
    title: "MeetSphere",
    subTitle: "Real-Time Video Conferencing Platform",
    github: "https://github.com/vidhan-kadu/meetsphere-video-conferencing-app",
    live: "https://meetsphere-video-conferencing-app.vercel.app/",
    description: (
      <ul className=" text-xl list-disc pl-5 space-y-2 text-primary">
        <li>
          Engineered peer-to-peer video, audio, and screen sharing using WebRTC
          for low-latency real-time communication.
        </li>
        <li>
          Implemented real-time signaling, room management, and live chat using
          Socket.io for seamless multi-user synchronization.
        </li>
        <li>
          Designed secure authentication using token-based access control with
          bcrypt and crypto-based password hashing.
        </li>
        <li>
          Architected a scalable full-stack system using React.js (frontend) and
          Node.js + Express.js (backend) with structured API communication.
        </li>
      </ul>
    ),
    badge: "Full-Stack",
    image: "/assets/project/meetsphere.png",
    stack: ["React", "Node.js", "Express.js", "WebRTC","Socket.io", "JWT","bcrypt & crypto (Password security)", "MongoDB"],
  },
];

const moreProjectContent: OtherProject[] = [
  {
    name: "SkyCast — Real-Time Weather Forecast Application",
    url: "https://weather-app235.netlify.app/",
  },
    {
    name: "Music Streaming UI (Spotify Inspired)",
    url: "https://vidhan-kadu.github.io/music-streaming-ui-spotify-inspired./",
  },
  {
    name: "Simon Says Game",
    url: "https://vidhan-kadu.github.io/simon-game-js/",
  },
];

export { projectContent, moreProjectContent };
