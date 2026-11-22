import type { Metadata } from "next";
import About from "@/components/About";
import Experience from "@/components/Experience";
import PageHeading from "@/components/PageHeading";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "About",
  description: "Biography, software engineering experience, and education of Phạm Đăng Khôi.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeading title="About" emphasis="me." />
      <About />
      <Skills />
      <Experience />
    </>
  );
}
