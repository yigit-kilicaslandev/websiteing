import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { siArduino, siHtml5, siPython, siArchlinux } from "simple-icons/icons";

const SimpleIcon = ({ icon, className }: { icon: { svg: string }; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    dangerouslySetInnerHTML={{ __html: icon.svg }}
  />
);

export const DATA = {
  name: "Yiğit Kılıçaslan - Software Engineer",
  initials: "YK",
  url: "https://yigitkilicaslan.com",
  location: "Türkiye İstanbul",
  locationLink: "https://www.google.com/maps/place/%C4%B0stanbul/",
  description:
    "Full time Robotex & Ai Developer",
  summary:
    "Hi, I'm Yiğit Kılıçaslan, a software engineer with a passion for building innovative solutions. I have experience in web development, robotics, and AI. I enjoy working on challenging projects that push the boundaries of technology. I am always eager to learn new skills and stay up-to-date with the latest trends in the tech industry. In my free time, I like to contribute to open-source projects and spend my time in github. I am currently looking for new opportunities to grow and make an impact in the tech world. If you're interested in collaborating or just want to say hi, feel free to reach out to me via email. Also, I am open to freelance work and consulting opportunities.",
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    },
    hackathons: {
      order: 7, enabled: true,
      label: "Competitions",
      heading: "My Recent Competitions",
      text: "I've participated in several robot and coding competitions, where I've had the opportunity to collaborate with talented individuals and develop innovative solutions. Here are some of my recent achievements.",
    },
    photos: {
      order: 6, enabled: true,
      heading: "My Recent Travels",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "contact@yigitkilicaslan.com",
      text: "Want to chat? Just shoot me an email with a direct question and I'll respond whenever I can. I will ignore all soliciting.",
    },
  },
  photos: [
    { src: "/photos/photo1.jpg", alt: "Photo 1" },
    { src: "/photos/photo2.jpg", alt: "Photo 2" },
    { src: "/photos/photo3.jpg", alt: "Photo 3" },
    { src: "/photos/photo4.jpg", alt: "Photo 4" },
    { src: "/photos/photo5.jpg", alt: "Photo 5" },
    { src: "/photos/photo6.jpg", alt: "Photo 6" },
    { src: "/photos/photo7.jpg", alt: "Photo 7" },
    { src: "/photos/photo8.jpg", alt: "Photo 8" },
    { src: "/photos/photo9.jpg", alt: "Photo 9" },
  ],
  skills: [
    { name: "Arduino", icon: (props) => <SimpleIcon icon={siArduino} {...props} /> },
    { name: "Html", icon: (props) => <SimpleIcon icon={siHtml5} {...props} /> },
    { name: "Python", icon: (props) => <SimpleIcon icon={siPython} {...props} /> },
    { name: "Arch Linux", icon: (props) => <SimpleIcon icon={siArchlinux} {...props} /> },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "contact@yigitkilicaslan.com",
    tel: "+90 545 910 16 20",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yigit-kilicaslandev",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
          name: "LinkedIn",
          url: "https://linkedin.com",
          icon: Icons.linkedin,
          navbar: false,

        },
      X: {
          name: "X",
          url: "https://x.com",
          icon: Icons.x,            
          navbar: false,

        },
      Youtube: {
          name: "Youtube",
          url: "https://youtube.com",            
          icon: Icons.youtube,
          navbar: false,
        },
      email: {
        name: "Send Email",
        url: "mailto:contact@yigitkilicaslan.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Meridian Labs",
      href: "https://meridian.so",
      badges: ["Founder"],
      location: "Austin, TX",
      title: "Co-founder & Engineer",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "January 2023",
      end: undefined,
      description:
        "Building a suite of developer productivity tools focused on local-first architecture and offline sync. Grew to 1,200 paying customers within the first year. Responsible for the full stack - product, engineering, and growth.",
    },
    {
      company: "Stripe",
      href: "https://stripe.com",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=stripe.com&sz=128",
      start: "May 2022",
      end: "August 2022",
      description:
        "Worked on the Payments Infrastructure team. Built an internal load-testing framework in Go that reduced regression testing time by 60%. Contributed to the migration of legacy billing logic to a new event-driven architecture using Kafka.",
    },
    {
      company: "Cloudflare",
      href: "https://cloudflare.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=cloudflare.com&sz=128",
      start: "September 2021",
      end: "December 2021",
      description:
        "Joined the Workers team during a co-op term. Implemented a new dashboard UI for monitoring Worker invocation metrics using React and D3. Added support for custom error boundaries in the Workers runtime sandbox.",
    },
    {
      company: "Datadog",
      href: "https://datadoghq.com",
      badges: [],
      location: "New York, NY",
      title: "Software Engineer Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=datadoghq.com&sz=128",
      start: "January 2021",
      end: "April 2021",
      description:
        "Built new alert correlation features in the Incidents product using Python and React. Improved p99 query latency on the metrics explorer by 40% through query plan optimizations in PostgreSQL.",
    },
    {
      company: "Benchling",
      href: "https://benchling.com",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=benchling.com&sz=128",
      start: "May 2020",
      end: "August 2020",
      description:
        "Worked on the scientific data platform team. Implemented a bulk import pipeline for lab instrument data using TypeScript and AWS Lambda, reducing manual data entry time for research teams by over 80%.",
    },
    {
      company: "Relay Labs",
      href: "https://relay.app",
      badges: [],
      location: "Vancouver, BC",
      title: "Software Engineer Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=relay.app&sz=128",
      start: "September 2019",
      end: "December 2019",
      description:
        "Early-stage startup building workflow automation tools. Shipped core integrations with Slack, Notion, and GitHub. Designed the initial webhook delivery system in Node.js that handled over 500k events per day at peak.",
    },
  ],
  education: [
    {
      school: "Founder Fellowship SF",
      href: "https://foundersfellowship.io",
      degree: "Cohort 4 - Founder in Residence",
      logoUrl: "https://avatar.vercel.sh/founder-fellowship?size=40",
      start: "2023",
      end: "2023",
    },
    {
      school: "University of British Columbia",
      href: "https://ubc.ca",
      degree: "Bachelor of Science, Computer Science",
      logoUrl: "https://www.google.com/s2/favicons?domain=ubc.ca&sz=128",
      start: "2018",
      end: "2023",
    },
    {
      school: "Simon Fraser University",
      href: "https://sfu.ca",
      degree: "Bachelor of Business Administration",
      logoUrl: "https://www.google.com/s2/favicons?domain=sfu.ca&sz=128",
      start: "2018",
      end: "2023",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "https://www.google.com/s2/favicons?domain=ibo.org&sz=128",
      start: "2014",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Stackwise",
      href: "https://stackwise.dev",
      dates: "March 2024 - Present",
      active: true,
      description:
        "Built an AI-powered code review tool that integrates with GitHub PRs and provides context-aware feedback based on your team's codebase conventions. Used by 300+ engineering teams.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "OpenAI API",
      ],
      links: [
        {
          type: "Website",
          href: "https://stackwise.dev",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/example-website.webp",
      video: "",
    },
    {
      title: "My Website",
      href: "https://github.com/yigit-kilicaslandev/websiteing/tree/master",
      dates: "October 2023 - February 2024",
      active: true,
      description:
        "A website made by me when I was 10 years old without any help using Astro, TypeScript, and TailwindCSS. It features a blog, and portfolio. The website is fully responsive and optimized for performance.",
      technologies: [
        "TypeScript",
        "Astro",
        "MDX",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/yigit-kilicaslandev/websiteing",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yigit-kilicaslandev/websiteing",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "photos/Website.png",
      video: "",
    },    
  ],
  hackathons: [
    {
      title: "Lego Sumo Robot Competition",
      dates: "2026",
      location: "Marmara İstanbul",
      description: "Made a Lego Sumo Robot that can push other robots out of the ring. It was a fun and challenging experience to design and program the robot to compete against other teams. I learned a lot about robotics, programming, and teamwork. I also won the competition and received a trophy for my achievement. I was proud of my robot and the skills I developed during the competition. I hope to participate in more robotics competitions in the future and continue to improve my skills. I also want to thank my team members for their support and collaboration throughout the project. It was a great learning experience and I am excited to apply what I learned to future projects.",
      image: "https://1000logos.net/wp-content/uploads/2017/03/Lego-Logo-1972.png",
      win: "Best Infrastructure Hack",
      links: [],
    },
  ],
} as const;
