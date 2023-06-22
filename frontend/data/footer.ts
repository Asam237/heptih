import { FooterLinkConditionType, FooterLinkType } from "../types";
import { GithubImg, TwitterImg } from "./icons";

export const footerlink: FooterLinkType[] = [
  {
    icon: GithubImg,
    path: "https://github.com/Asam237/usefull-link",
  },
  // {
  //     icon: TwitterImg,
  //     path: "/"
  // },
];

export const footerlinkCondition: FooterLinkConditionType[] = [
  {
    name: "Offres Pro",
    path: "#offrespro",
  },
  {
    name: "FAQs",
    path: "#faq",
  },
  {
    name: "Blog",
    path: "#blog",
  },
];
