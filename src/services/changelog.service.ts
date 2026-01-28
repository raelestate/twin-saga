import type { ChangeLogEntry } from "../types/changelog";

export const getChangeLog = async (): Promise<ChangeLogEntry[]> => {
  return Promise.resolve([
    {
      version: "v1.2.0",
      date: "2026-01-18",
      changes: [
        {
          id: "1",
          type: "feature",
          description: "Added ChangeLog page with version tracking",
        },
        {
          id: "2",
          type: "improvement",
          description: "Improved build performance using Vite optimizations",
        },
      ],
    },
    {
      version: "v1.1.1",
      date: "2026-01-10",
      changes: [
        {
          id: "3",
          type: "fix",
          description: "Fixed layout shifting on mobile devices",
        },
      ],
    },
  ]);
};
