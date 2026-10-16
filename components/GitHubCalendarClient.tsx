
"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then(
      (module) => module.GitHubCalendar
    ),
  {
    ssr: false,
    loading: () => (
      <p className="github-calendar-loading">
        Loading contribution calendar...
      </p>
    ),
  }
);

type GitHubCalendarClientProps = {
  year: number;
};

export default function GitHubCalendarClient({
  year,
}: GitHubCalendarClientProps) {
  return (
    <GitHubCalendar
      username="Ravimaurya123"
      year={year}
      colorScheme="dark"
      blockSize={12}
      blockMargin={4}
      fontSize={12}
    />
  );
}
