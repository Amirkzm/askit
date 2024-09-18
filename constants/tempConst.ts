import { NavigatorItem } from "@/types";

export const tempNavigatorItems: NavigatorItem[] = [
  {
    title: "Categories",
    value: 1,
    icon: "/icons/categories.png",
    route: "/categories",
  },
  {
    title: "Questions",
    value: 2,
    icon: "/icons/question.png",
    route: "/questions",
  },
  {
    title: "Community",
    value: 3,
    icon: "/icons/people.png",
    route: "/community",
  },
  { title: "Jobs", value: 4, icon: "/icons/job.png", route: "/jobs" },
  { title: "Tags", value: 5, icon: "/icons/tag.png", route: "/tags" },
  { title: "Badges", value: 6, icon: "/icons/badges.png", route: "/badges" },
  {
    title: "Unanswered",
    value: 7,
    icon: "/icons/unanswered.png",
    route: "/unanswered",
  },
];
