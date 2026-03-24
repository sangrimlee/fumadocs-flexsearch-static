import { defineI18nUI } from "fumadocs-ui/i18n";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { i18n } from "@/lib/i18n";

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: "sangrimlee",
  repo: "fumadocs-flexsearch-static",
  branch: "i18n",
};

export const i18nUI = defineI18nUI(i18n, {
  en: {
    displayName: "English",
  },
  ko: {
    displayName: "Korean",
    search: "검색",
    searchNoResult: "검색 결과가 없습니다.",
    toc: "목차",
    tocNoHeadings: "표시할 목차가 없습니다.",
    lastUpdate: "최종 수정일",
    chooseLanguage: "언어 선택",
    nextPage: "다음 페이지",
    previousPage: "이전 페이지",
    chooseTheme: "테마 선택",
    editOnGithub: "GitHub에서 수정하기",
  },
});

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    nav: {
      title: "My App",
      url: `/${locale}`,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
