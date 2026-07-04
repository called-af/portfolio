import { StaticImageData } from "next/image";
import portfolioImg from "../assets/portfolio.png";
import dinamisImg from "../assets/dinamis.png";
import portScannerImg from "../assets/port_scanner.png";
import threatImg from "../assets/threat_detection.png";

export type ProjectType = {
  id: string;
  img: StaticImageData;
  title: string;
  desc: string;
  category: string;
  links: { label: string; url: string }[];
};

export const projects: ProjectType[] = [
  {
    id: "portfolio",
    img: portfolioImg,
    title: "Portfolio Website",
    desc: "Personal portfolio built with Next.js 15 and Tailwind CSS v4. Designed with a Minecraft-inspired pixel aesthetic — custom CSS variables, mc-button styles, and a dark/light theme system. Fully responsive with a fixed sidebar nav, smooth scroll detection, and zero external UI libraries.",
    category: "Web",
    links: [
      { label: "Demo",   url: "#" },
      { label: "GitHub", url: "#" },
    ],
  },
  {
    id: "dinamis",
    img: dinamisImg,
    title: "Dinamis App",
    desc: "A fullstack internal web application built for a client using Laravel as the backend API and Vue.js on the frontend with Inertia.js for seamless SPA navigation. Features role-based access control, dynamic form management, PDF report generation, and a MySQL database with complex relational queries.",
    category: "Web",
    links: [
      { label: "Demo",   url: "#" },
      { label: "GitHub", url: "#" },
    ],
  },
  {
    id: "port-scanner",
    img: portScannerImg,
    title: "Port Scanner",
    desc: "A lightweight network port scanning tool written for security auditing and reconnaissance purposes. Supports TCP/UDP scanning, customisable port ranges, banner grabbing, and concurrent threading for fast results. Built as a CLI tool with clean output formatting and exportable scan reports.",
    category: "Security",
    links: [
      { label: "GitHub", url: "#" },
    ],
  },
  {
    id: "threat-detection",
    img: threatImg,
    title: "Threat Detection",
    desc: "A security monitoring system that analyses network traffic and system logs to detect anomalies and potential intrusions in real time. Uses rule-based pattern matching and heuristic analysis to flag suspicious activity. Includes a dashboard for visualising threat events, alert history, and system health metrics.",
    category: "Security",
    links: [
      { label: "Demo",   url: "#" },
      { label: "GitHub", url: "#" },
      { label: "Docs",   url: "#" },
    ],
  },
];
