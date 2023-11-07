export interface IUserData {
  bio: string;
  email: string;
  image?: string;
  token: string;
  username: string;
}

export interface IUserRO {
  user: IUserData;
}

export interface UserStats {
  name: string;
  profileLink: string;
  totalLikes: number;
  totalArticles: number;
  firstArticleDate: string | null;
}

export interface RosterResponse {
  roster: UserStats[];
}
