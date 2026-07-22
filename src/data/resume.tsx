import type { ReactNode, SVGProps } from "react";
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
    work: { order: 2, enabled: false, heading: "Work Experience", presentLabel: "Present" },
  // Enable education section and set order to 2 later in the code
    education: { order: 2, enabled: true, heading: "Education" },
    skills: { order: 3, enabled: true, heading: "Skills" },
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
    { src: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQgMZvQNOE6XUxmgZJ6XejBJqhwz8ElMSCQK__vAtOGV5W9NL6QgVFVLuTBvZCnoNGe6umM2bMh6XxB7FIbecak7QA&s=19", alt: "Photo 1" },
    { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWklzUh-xqt3DjMPErYaZYJnNBhfPV83qxsKgGFs7c5ewEJnlIZUJegrMyNexgv-Mj58w_gu9pwvsTMcfPtm8IflVZdAykFvhwxM2OoJsZ4iXW5eRrJCktCVZB_sIpRnU4GWIhUN=w1080-h624-n-k-no", alt: "Photo 2" },
    { src: "https://cdn2.setur.com.tr/image/tour/large/yurt-disi-392cfeff-6045-46f4-aa29-c02769e7b2a3.jpg", alt: "Photo 3" },
    { src: "https://wise.com/imaginary-v2/7fb41a2de63ac87465c5903d4f7084cf.jpg?width=1200", alt: "Photo 4" },
// Additional photos can be added here if needed 
//    { src: "", alt: "Photo 5" },
//   { src: "", alt: "Photo 6" },
//   { src: "", alt: "Photo 7" },
  ],
  skills: [
    { name: "Arduino", icon: (props: SVGProps<SVGSVGElement>) => <SimpleIcon icon={siArduino} {...props} /> },
    { name: "Html", icon: (props: SVGProps<SVGSVGElement>) => <SimpleIcon icon={siHtml5} {...props} /> },
    { name: "Python", icon: (props: SVGProps<SVGSVGElement>) => <SimpleIcon icon={siPython} {...props} /> },
    { name: "Arch Linux", icon: (props: SVGProps<SVGSVGElement>) => <SimpleIcon icon={siArchlinux} {...props} /> },
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
      school: "Bilnet Schools",
      href: "https://bilnetschools.com",
      degree: "Middle School",
      logoUrl: "https://www.google.com/s2/favicons?domain=bilnetschools.com&sz=128",
      start: "2015",
      end: "2019",
    }
  ],
  projects: [
    {
      title: "Lego Sumo Robot",
      href: "https://github.com/yigit-kilicaslandev/2026-legosumo",
      dates: "March 2024 - Present",
      active: true,
      description:
        "A Lego Sumo Robot designed and built for competition in 2026. The robot is programmed to push other robots out of the ring using sensors and motors. It is a fun and challenging project that combines robotics, programming, and teamwork. I learned a lot about designing and building robots, as well as programming them to perform specific tasks. The robot is built using Lego Mindstorms and is programmed using block-based programming (Scratch) and Python. I am proud of the robot and the skills I developed during the project. I hope to participate in more robotics competitions in the future and continue to improve my skills. I also want to thank my team member for their support and collaboration throughout the project. It was a great learning experience and I am excited to apply what I learned to future projects.",
      technologies: [
        "Block-based (Scratch)",
        "Python",
        "Lego Mindstorms",
        "Icon-based (Legacy/NXT/EV3)"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/yigit-kilicaslandev/2026-legosumo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/photos/Lego_sumo.png",
      video: "",
    },
    {
      title: "My Website",
      href: "https://github.com/yigit-kilicaslandev/websiteing/tree/master",
      dates: "October 2023 - February 2024",
      active: true,
      description: `A website made by me using Astro, TypeScript, and MDX. The website is designed to showcase my projects, skills, and experience. It is a personal portfolio website that I built to demonstrate my web development skills and to provide a platform for sharing my work with others. The website is built using modern web technologies and follows best practices for performance, accessibility, and SEO. I am proud of the website and the skills I developed during the project. I hope to continue improving the website and adding new features in the future. I also want to thank my mentors and peers for their support and feedback throughout the project. It was a great learning experience and I am excited to apply what I learned to future web development projects. I also want to thank the open-source community for their contributions to the tools and libraries I used in building the website. Their work has been invaluable in helping me create a high-quality website. I am always looking for ways to improve my web development skills and stay up-to-date with the latest trends and technologies in the field. I plan to continue learning and experimenting with new tools and frameworks to enhance my website and create even more engaging user experiences. I also want to share my knowledge and experiences with others in the web development community, whether through blog posts, tutorials, or open-source contributions. Overall, building this website has been a rewarding experience that has allowed me to grow as a developer and showcase my abilities to potential employers and collaborators. Plus, it has given me the opportunity to reflect on my journey as a software engineer and the skills I have acquired along the way. I am excited to see where this project will take me in the future and how it will continue to evolve as I learn and grow in my career.`,
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
      title: "Lego Sumo Robotex Robot Competition",
      dates: "2026",
      location: "Marmara İstanbul",
      description: "Made a Lego Sumo Robot that can push other robots out of the ring. It was a fun and challenging experience to design and program the robot to compete against other teams. I learned a lot about robotics, programming, and teamwork. I also won the competition and received a trophy for my achievement. I was proud of my robot and the skills I developed during the competition. I hope to participate in more robotics competitions in the future and continue to improve my skills. I also want to thank my team members for their support and collaboration throughout the project. It was a great learning experience and I am excited to apply what I learned to future projects.",
      image: "https://1000logos.net/wp-content/uploads/2017/03/Lego-Logo-1972.png",
      win: "Best Infrastructure Hack",
      links: [] as { href: string; title: string; icon: ReactNode }[],
    },
  ],
} as const;
