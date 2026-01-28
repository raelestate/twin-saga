export interface ChangelogCard {
  id: string;
  image: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export interface ChangelogResponse {
  data: ChangelogCard[];
  nextCursor: string | null;
}

export interface ChangelogItem {
  id: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
}

export interface AuthCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
}
