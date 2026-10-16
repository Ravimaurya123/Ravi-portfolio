
"use client";

import { useEffect, useState } from "react";
import GitHubCalendarClient from "./GitHubCalendarClient";

type ContributionDay = {
  date: string;
  count: number;
  level?: number;
};

type GitHubStats = {
  username: string;
  year: number;
  totalContributions: number;
  activeDays: number;
  currentStreak: number;
  longestStreak: number;
  contributions: ContributionDay[];
};

const currentYear = new Date().getFullYear();

const years = Array.from(
  { length: currentYear - 2024 + 1 },
  (_, index) => 2024 + index
);

export default function GitHubContributions() {
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadStats() {
      setLoading(true);
      setError("");
      setStats(null);

      try {
        const response = await fetch(
          `/api/github-stats?year=${selectedYear}`,
          { signal: controller.signal }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error || "Unable to load GitHub stats."
          );
        }

        setStats(data);
      } catch (err) {
        if (
          err instanceof Error &&
          err.name === "AbortError"
        ) {
          return;
        }

        setError(
          err instanceof Error
            ? err.message
            : "Unable to load GitHub stats."
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadStats();

    return () => controller.abort();
  }, [selectedYear]);

  const statItems = [
    {
      label: "Total Contributions",
      value: stats?.totalContributions,
    },
    {
      label: "Active Days",
      value: stats?.activeDays,
    },
    {
      label: "Current Streak",
      value: stats?.currentStreak,
      suffix: "days",
    },
    {
      label: "Longest Streak",
      value: stats?.longestStreak,
      suffix: "days",
    },
  ];

  return (
    <div className="github-dashboard">
      <div className="github-dashboard-header">
        <div>
          <h3>GitHub Activity</h3>
        </div>

        <select
          value={selectedYear}
          onChange={(event) =>
            setSelectedYear(Number(event.target.value))
          }
          aria-label="Select contribution year"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="github-stats">
        {statItems.map((item) => (
          <div className="github-stat" key={item.label}>
            <span>{item.label}</span>
            <strong>
              {loading
                ? "Loading..."
                : error
                  ? "—"
                  : `${item.value ?? 0}${
                      item.suffix ? ` ${item.suffix}` : ""
                    }`}
            </strong>
          </div>
        ))}
      </div>

      {error && (
        <p role="alert" className="github-error">
          {error}
        </p>
      )}

      {!error && (
        <div className="github-calendar">
          <GitHubCalendarClient
            key={selectedYear}
            year={selectedYear}
          />
        </div>
      )}

      <a
        href="https://github.com/Ravimaurya123"
        target="_blank"
        rel="noopener noreferrer"
        className="contributions-link"
      >
        View GitHub Profile ↗
      </a>
    </div>
  );
}
