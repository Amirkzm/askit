export interface SidebarLink {
  imgURL: string;
  route: string;
  label: string;
}

export interface NavigatorItem {
  title: string;
  value: number;
  icon: string;
  route: string;
}

export type User = {
  id: number;
  name: string;
  questions: number;
  answers: number;
  userName: string;
  avatar: string;
  bio: string;
  currentLevel: string;
  nextLevel: string;
  currentProgress: number;
  rank: number;
};
