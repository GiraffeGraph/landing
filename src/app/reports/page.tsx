import type { Metadata } from "next";
import { ArrowUpRight, FileText } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Project Reports — GiraffeGraph",
  description: "GiraffeGraph project report archive.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

const reports = [
  {
    title: "Meeting #1",
    type: "Supervisor meeting report",
    href: "/meeting-1/",
  },
  {
    title: "Meeting #2",
    type: "Supervisor meeting report",
    href: "/meeting-2/",
  },
  {
    title: "Project Proposal",
    type: "CSE 491 project proposal",
    href: "/project-proposal/",
  },
  {
    title: "TÜBİTAK 2209-A",
    type: "Application evidence",
    href: "/tubitak-2209a/",
  },
];

export default function ReportsPage() {
  return (
    <main className="mesh-grid min-h-screen bg-[#0B1624] text-white">
      <header className="border-b border-[#1A2F44] bg-[rgba(11,22,36,0.92)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center px-4 sm:px-6">
          <a href="/" aria-label="GiraffeGraph home">
            <Logo size={30} />
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
        <div className="absolute inset-x-0 top-0 mx-auto h-[420px] max-w-4xl bg-[radial-gradient(circle,rgba(233,174,63,0.14),transparent_68%)]" />

        <div className="relative mx-auto max-w-5xl">
          <p className="label mb-5 text-[#E9AE3F]">CSE 491 · GiraffeGraph</p>
          <h1 className="heading-xl mb-5">Project Reports</h1>
          <p className="body-l max-w-2xl text-[#A7ADB3]">
            Public-safe copies of submitted project documents. Personal identifiers and signatures are removed.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {reports.map((report, index) => (
              <a
                key={report.href}
                href={report.href}
                className="group rounded-[18px] border border-[#253D5A] bg-gradient-to-br from-[#1D2E47] to-[#15243A] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#E9AE3F] hover:shadow-[0_18px_48px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(233,174,63,0.25)] bg-[rgba(233,174,63,0.1)]">
                    <FileText className="text-[#E9AE3F]" size={21} aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs text-[#5A6A7E]">0{index + 1}</span>
                </div>

                <h2 className="mt-8 text-xl font-semibold text-white">{report.title}</h2>
                <p className="mt-2 text-sm text-[#A7ADB3]">{report.type}</p>

                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#E9AE3F]">
                  Open report
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
