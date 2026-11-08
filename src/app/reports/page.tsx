import type { Metadata } from "next";
import { ArrowUpRight, Clock3, FileText } from "lucide-react";
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
    href: "/downloads/meeting-1-2026-10-02-b4dfe63fdb.pdf",
  },
  {
    title: "Meeting #2",
    type: "Supervisor meeting report",
    href: "/downloads/meeting-2-2026-10-16-156b47b4a6.pdf",
  },
  {
    title: "Project Proposal",
    type: "CSE 491 project proposal",
    href: "/downloads/project-proposal.pdf",
  },
  {
    title: "TÜBİTAK 2209-A",
    type: "Application evidence",
    href: "/downloads/tubitak-2209a.pdf",
  },
  {
    title: "Meeting #3",
    type: "Supervisor meeting report",
    href: "/downloads/meeting-3-2026-10-30-9eff6e25c6.pdf",
  },
  {
    title: "Midterm Report",
    type: "CSE 491 midterm report",
    href: "/downloads/midterm-report-2026-11-08-7fe35d5178.pdf",
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
            Public copies of project documents and supervisor meeting reports.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {reports.map((report, index) => {
              const content = (
                <>
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border ${
                      report.href
                        ? "border-[rgba(233,174,63,0.25)] bg-[rgba(233,174,63,0.1)]"
                        : "border-[#253D5A] bg-[#17263A]"
                    }`}
                  >
                    <FileText
                      className={report.href ? "text-[#E9AE3F]" : "text-[#5A6A7E]"}
                      size={19}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h2 className={`truncate text-base font-semibold ${report.href ? "text-white" : "text-[#718096]"}`}>
                        {report.title}
                      </h2>
                      <span className="font-mono text-[10px] text-[#5A6A7E]">0{index + 1}</span>
                    </div>
                    <p className={`mt-0.5 truncate text-xs ${report.href ? "text-[#A7ADB3]" : "text-[#4B5D72]"}`}>
                      {report.type}
                    </p>
                  </div>

                  {report.href ? (
                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-[#E9AE3F] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  ) : (
                    <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-[#5A6A7E]">
                      <Clock3 size={14} aria-hidden="true" />
                      Pending
                    </span>
                  )}
                </>
              );

              return report.href ? (
                <a
                  key={report.title}
                  href={report.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-[14px] border border-[#253D5A] bg-gradient-to-br from-[#1D2E47] to-[#15243A] p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[#E9AE3F] hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={report.title}
                  aria-disabled="true"
                  className="flex cursor-not-allowed items-center gap-4 rounded-[14px] border border-[#1D3048] bg-[#132136] p-4 opacity-70"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
