import type { ChangelogCard } from "../../types";

// Helper to generate unique IDs (UUID alternative for small dataset)
const generateId = (prefix: string, index: number) => `${prefix}-${index}-${Date.now()}`;

export const changelogCards: ChangelogCard[] = [
 {
    id: generateId("changelog", 1),
    image: "src/assets/images/LargerResLogo.png",
    title: "Changelog 0.0.1",
    description: "Initial release of the game. Introduced core classes, first dungeon, and basic PvP functionality.",
    buttonLabel: "View Details",
    buttonHref: "#",
  },
  {
    id: generateId("changelog", 2),
    image: "src/assets/images/LargerResLogo.png",
    title: "Changelog 0.0.2",
    description: "Added new weapons, improved AI for mobs, and fixed several minor bugs in combat system.",
    buttonLabel: "View Details",
    buttonHref: "#",
  },
  {
    id: generateId("changelog", 3),
    image: "src/assets/images/LargerResLogo.png",
    title: "Changelog 0.1.0",
    description: "Major update! Introduced guilds, trading system, and first seasonal event with exclusive rewards.",
    buttonLabel: "View Details",
    buttonHref: "#",
  },
  {
    id: generateId("changelog", 4),
    image: "src/assets/images/LargerResLogo.png",
    title: "Changelog 0.1.1",
    description: "Bug fixes and performance improvements. Adjusted balance for ranged classes and dungeon drops.",
    buttonLabel: "View Details",
    buttonHref: "#",
  },
  {
    id: generateId("changelog", 5),
    image: "src/assets/images/LargerResLogo.png",
    title: "Changelog 0.2.0",
    description: "Added new dungeon, crafting system, and quality-of-life updates for party formation and matchmaking.",
    buttonLabel: "View Details",
    buttonHref: "#",
  },
  {
    id: generateId("changelog", 5),
    image: "src/assets/images/LargerResLogo.png",
    title: "Changelog 0.2.0",
    description: "Added new dungeon, crafting system, and quality-of-life updates for party formation and matchmaking.",
    buttonLabel: "View Details",
    buttonHref: "#",
  },
  {
    id: generateId("changelog", 5),
    image: "src/assets/images/LargerResLogo.png",
    title: "Changelog 0.2.0",
    description: "Added new dungeon, crafting system, and quality-of-life updates for party formation and matchmaking.",
    buttonLabel: "View Details",
    buttonHref: "#",
  },
  {
    id: generateId("changelog", 5),
    image: "src/assets/images/LargerResLogo.png",
    title: "Changelog 0.2.0",
    description: "Added new dungeon, crafting system, and quality-of-life updates for party formation and matchmaking.",
    buttonLabel: "View Details",
    buttonHref: "#",
  },
];

export default changelogCards;
