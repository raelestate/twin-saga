export type ChangeType = "feature" | "fix" | "improvement" | "breaking";

export interface ChangeItem {
  id: string;
  type: ChangeType;
  description: string;
}

export interface ChangeLogEntry {
  version: string;
  date: string;
  changes: ChangeItem[];
}
