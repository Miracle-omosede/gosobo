// import { BookOpenText, FolderSearch, Newspaper, PencilRuler, Trophy,  BookOpen, LayoutGrid, Pencil, Star, Users, FileText, Video, Tools  } from "lucide";
import { BookOpen, Pencil, Users, Video, BookOpenText, FolderSearch, Newspaper, PencilRuler, Trophy} from "lucide-react";

export const Menus = [
  {
    name: "Home",
  },
  {
    name: "About Us",
  },
  {
    name: "Bookstore",
    gridCols: 4,
    subMenuHeading: [
        { name: "Books", icon: BookOpenText, desc: "Browse a wide collection of digital and print books" },
        { name: "Self-Publish", icon: Pencil, desc: "Empower your writing with publishing services" },
        { name: "Events", icon: Trophy, desc: "Engage with exciting literary events and competitions" },
        { name: "Reading Lounge", icon: Users, desc: "Explore resources, tips, and videos for readers and writers" },
      ],
    subMenu: [
      {
        heading: "Books",
        icon: BookOpen,
        desc: "Browse a wide collection of digital and print books",
        items: [
          { name: "E-books", desc: "Digital book collection" },
          { name: "Best Sellers", desc: "Top-selling titles" },
        ],
      },
      {
        heading: "Self-Publish",
        icon: Pencil,
        desc: "Empower your writing with publishing services",
        items: [
          { name: "Publishing", desc: "Get your book published" },
          { name: "Editing & Proofreading", desc: "Perfect your manuscript" },
          { name: "Formatting & Cover Design", desc: "Create stunning visuals" },
          { name: "Adverts & Promotions", desc: "Promote your book effectively" },
        ],
      },
      {
        heading: "Events",
        icon: Trophy,
        desc: "Engage with literary events and competitions",
        items: [
          { name: "Writing Competition", desc: "Showcase your skills" },
          { name: "Book Personality of the Week", desc: "Recognize top talent" },
          { name: "Book of the Month", desc: "Featured monthly selection" },
          { name: "Upcoming Events", desc: "Stay updated" },
        ],
      },
      {
        heading: "Reading Lounge",
        icon: Users,
        desc: "tips and videos for readers and writers",
        items: [
          { name: "Free Downloads & Resources", desc: "Access free materials" },
          { name: "Writing Tips & Resources", desc: "Enhance your skills" },
          { name: "Featured Authors", desc: "Meet top authors" },
          { name: "Tutorials & Videos", desc: "Learn from experts" },
        ],
      },
    ],
    icon: BookOpenText,
  },
  {
    name: "Resources",
    gridCols: 1,
    subMenuHeading: [],
    subMenu: [
      { name: "Blogs & Articles", desc: "Insights and news", icon: Newspaper },
      { name: "Tutorials & Videos", desc: "Learn and grow", icon: Video },
      { name: "Free Tools", desc: "Handy resources", icon: PencilRuler },
    ],
    icon: FolderSearch,
  },
  {
    name: "Pricing & Payments",
  },
];
