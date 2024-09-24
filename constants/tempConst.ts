import { NavigatorItem } from "@/types";
import PopularTags from "../components/shared/rightSidebar/PopularTags";

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

export const tempLatestQuestions = [
  {
    id: 1,
    title: "How to make a website?",
    votes: 10,
    answers: 5,
    views: 100,
    tags: ["html", "css", "javascript"],
  },
  {
    id: 2,
    title:
      "Why my wisedom teeth are paining? What should I do? and this is a very long question",
    votes: 10,
    answers: 5,
    views: 100,
    tags: ["html", "css", "javascript"],
  },
  {
    id: 3,
    title:
      "I need a new car, which one should I buy? so this is a very long question and it can be even longer than this",
    votes: 10,
    answers: 5,
    views: 100,
    tags: ["html", "css", "javascript"],
  },
  {
    id: 4,
    title:
      "Where to find the best coffee in town? lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit",
    votes: 10,
    answers: 5,
    views: 100,
    tags: ["html", "css", "javascript"],
  },
];

export const popularCatgories = [
  {
    id: 1,
    name: "Computer",
    questions: 100,
    followers: 200,
  },
  {
    id: 2,
    name: "health & fitness",
    questions: 100,
    followers: 200,
  },
  {
    id: 3,
    name: "Science",
    questions: 100,
    followers: 200,
  },
  {
    id: 4,
    name: "Engineering",
    questions: 100,
    followers: 200,
  },
  {
    id: 5,
    name: "Politics",
    questions: 100,
    followers: 200,
  },
  {
    id: 6,
    name: "Religion",
    questions: 100,
    followers: 200,
  },
  {
    id: 7,
    name: "Technology",
    questions: 100,
    followers: 200,
  },
];

export const tempPopularTags = [
  {
    id: 1,
    name: "html",
    questions: 100,
    followers: 200,
  },
  {
    id: 2,
    name: "css",
    questions: 100,
    followers: 200,
  },
  {
    id: 3,
    name: "javascript",
    questions: 100,
    followers: 200,
  },
  {
    id: 4,
    name: "react",
    questions: 100,
    followers: 200,
  },
  {
    id: 5,
    name: "angular",
    questions: 100,
    followers: 200,
  },
  {
    id: 6,
    name: "vue",
    questions: 100,
    followers: 200,
  },
  {
    id: 7,
    name: "node",
    questions: 100,
    followers: 200,
  },
  {
    id: 8,
    name: "express",
    questions: 100,
    followers: 200,
  },
  {
    id: 9,
    name: "mongodb",
    questions: 100,
    followers: 200,
  },
  {
    id: 10,
    name: "sql",
    questions: 100,
    followers: 200,
  },
  {
    id: 11,
    name: "mysql",
    questions: 100,
    followers: 200,
  },
  {
    id: 12,
    name: "python",
    questions: 100,
    followers: 200,
  },
  {
    id: 13,
    name: "java",
    questions: 100,
    followers: 200,
  },
];
