import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Python } from "@/components/ui/svgs/python";
import { Arduino } from "@/components/ui/svgs/Arduino";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Html } from "@/components/ui/svgs/Html";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { ArchLinux } from "@/components/ui/svgs/ArchLinux";

export const DATA = {
  name: "Yiğit Kılıçaslan - Software Engineer",
  initials: "YK",
  url: "https://yigitkilicaslan.com",
  location: "Türkiye İstanbul",
  locationLink: "https://www.google.com/maps/place/%C4%B0stanbul/",
  description:
    "Full time Robotex & Ai Developer",
  summary:
    "In early 2023, I left a senior engineering role to go all-in on building my own SaaS products. Before that, [I completed a double degree in computer science and business](/#education), [interned at companies like Stripe and Cloudflare](/#work), and [competed in 18+ hackathons](/#hackathons). I also spent a summer in San Francisco as part of a founder residency focused on shipping fast and finding early customers.",
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
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    photos: {
      order: 6, enabled: true,
      heading: "My Recent Travels",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Just shoot me a dm with a direct question on twitter and I'll respond whenever I can. I will ignore all soliciting.",
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
    { name: "Arduino", icon: Arduino },
    { name: "Html", icon: Html },
    { name: "Python", icon: Python },
    { name: "Arch Linux", icon: ArchLinux },
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
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:contact@yigitkilicaslan.com",
        icon: Icons.email,
        navbar: false,
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
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },    
  ],
  hackathons: [
    {
      title: "StormHacks 2019",
      dates: "March 2nd - 3rd, 2019",
      location: "Burnaby, BC",
      description: "Built a network latency heatmap tool that visualises CDN performance across regions using real user data injected via a lightweight JS snippet.",
      image: "https://avatar.vercel.sh/stormhacks-2019?size=40",
      win: "Best Infrastructure Hack",
      links: [],
    },
  ],
} as const;
