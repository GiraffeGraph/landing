import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Download, FileText } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const assignments = {
  "meeting-1": {
    title: "Meeting #1",
    description: "CSE 491 supervisor meeting report.",
    file: "meeting-1.pdf",
  },
  "meeting-2": {
    title: "Meeting #2",
    description: "CSE 491 supervisor meeting report.",
    file: "meeting-2.docx",
  },
  "project-proposal": {
    title: "Project Proposal",
    description: "GiraffeGraph CSE 491 project proposal.",
    file: "project-proposal.pdf",
  },
  "tubitak-2209a": {
    title: "TÜBİTAK 2209-A Application Evidence",
    description: "GiraffeGraph TÜBİTAK 2209-A application document.",
    file: "tubitak-2209a.pdf",
  },
  "meeting-3": {
    title: "Meeting #3",
    description: "CSE 491 supervisor meeting report.",
    file: "meeting-3.pdf",
  },
  "midterm-report": {
    title: "Midterm Report",
    description: "GiraffeGraph CSE 491 midterm report.",
    file: "midterm-report.pdf",
  },
  "meeting-4": {
    title: "Meeting #4",
    description: "CSE 491 supervisor meeting report.",
    file: "meeting-4.pdf",
  },
  "meeting-5": {
    title: "Meeting #5",
    description: "CSE 491 supervisor meeting report.",
    file: "meeting-5.pdf",
  },
} as const;

type AssignmentSlug = keyof typeof assignments;

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(assignments).map((assignment) => ({ assignment }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ assignment: string }>;
}): Promise<Metadata> {
  const { assignment } = await params;
  const item = assignments[assignment as AssignmentSlug];

  if (!item) return {};

  return {
    title: `${item.title} — GiraffeGraph`,
    description: item.description,
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    },
  };
}

export default async function AssignmentPage({
  params,
}: {
  params: Promise<{ assignment: string }>;
}) {
  const { assignment } = await params;
  const item = assignments[assignment as AssignmentSlug];

  if (!item) notFound();

  return (
    <main className="mesh-grid min-h-screen bg-[#0B1624] text-white">
      <header className="border-b border-[#1A2F44] bg-[rgba(11,22,36,0.92)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center px-4 sm:px-6">
          <a href="/" aria-label="GiraffeGraph home">
            <Logo size={30} />
          </a>
        </div>
      </header>

      <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden px-4 py-16 sm:px-6">
        <div className="absolute inset-x-0 top-0 mx-auto h-[420px] max-w-4xl bg-[radial-gradient(circle,rgba(233,174,63,0.14),transparent_68%)]" />

        <div className="relative mx-auto w-full max-w-3xl">
          <p className="label mb-5 text-[#E9AE3F]">CSE 491 · GiraffeGraph</p>
          <h1 className="heading-xl mb-5">{item.title}</h1>
          <p className="body-l max-w-2xl text-[#A7ADB3]">{item.description}</p>

          <div className="mt-10 rounded-[20px] border border-[#253D5A] bg-gradient-to-br from-[#1D2E47] to-[#15243A] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[rgba(233,174,63,0.3)] bg-[rgba(233,174,63,0.12)]">
                  <FileText className="text-[#E9AE3F]" size={23} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-[#A7ADB3]">
                    {item.file.endsWith(".docx") ? "Word document" : "PDF document"}
                  </p>
                </div>
              </div>

              <a
                href={`/downloads/${item.file}`}
                download
                className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-gradient-to-br from-[#E9AE3F] to-[#C4893A] px-6 py-3 font-semibold text-[#1D2E47] shadow-[0_0_24px_rgba(233,174,63,0.3)] transition hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(233,174,63,0.45)]"
              >
                <Download size={18} aria-hidden="true" />
                Download report
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
