import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";

export default async function Layout({
  params,
  children,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  return (
    <HomeLayout
      {...baseOptions(lang)}
      links={[
        {
          type: "main",
          text: lang === "ko" ? "문서" : "Documentation",
          url: `/${lang}/docs`,
        },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
