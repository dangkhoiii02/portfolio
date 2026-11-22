import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Backend systems, Vietnamese speech recognition, and embedded projects by Phạm Đăng Khôi.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeading title="Selected" emphasis="projects." description="Backend systems, Vietnamese speech recognition, and embedded software." />
      <Projects />
    </>
  );
}
