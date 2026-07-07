import { StaticImageData } from "next/image";
import TropisFishImg from "../assets/TropisFishImg.png";
import DoofusImg from "../assets/DoofusImg.png";

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
    id: "tropisfish",
    img: TropisFishImg,
    title: "Tropis Fish Indonesia",
    desc: "A company profile and product catalog website for an ornamental fish exporter, built with Laravel 12, Livewire, and Tailwind CSS. Features dynamic category and fish management, searchable collections, responsive design, and an admin dashboard for managing website content.",
    category: "Web",
    links: [
      { label: "View Website", url: "https://tropisfish.com/" },
    ],
  },
  {
    id: "doofus",
    img: DoofusImg,
    title: "Doofus",
    desc: "A Minecraft-inspired voxel engine written in modern C++ using OpenGL. Features chunk-based world generation, greedy meshing, procedural terrain with biome generation, texture arrays, GLSL shaders, first-person camera controls, frustum culling, and a modular rendering architecture built from scratch without a game engine.",
    category: "Game",
    links: [
      { label: "GitHub", url: "https://github.com/called-af/doofus.git" },
    ],
  },
];