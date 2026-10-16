
"use client";

import { useEffect, useState } from "react";
import { SiLeetcode } from "react-icons/si";

type LeetCodeData = {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
};

type Contribution = {
  date: string;
  count: number;
  level?: number | null;
};

type HeatmapData = {
  status?: string;
  message?: string;
  data?: HeatmapData;
  dailyContributions?: Contribution[];
  totalSubmissions?: number;
  totalActiveDays?: number;
  activeDays?: number;
  currentStreak?: number;
  longestStreak?: number;
};

const USERNAME = "lHukd8gKwR";
const API = "https://leetcode-stats.tashif.codes";

export default function LeetCodeStats() {
  const [stats, setStats] = useState<LeetCodeData | null>(null);
  const [days, setDays] = useState<Contribution[]>([]);
  const [heatmap, setHeatmap] = useState<HeatmapData | null>(null);
  const [loading, setLoading] = useState(true);
  const [graphLoading, setGraphLoading] = useState(true);
  const [error, setError] = useState("");
  const [graphError, setGraphError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadData() {
      try {
        const response = await fetch(`${API}/${USERNAME}`, {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Stats unavailable");

        const json = await response.json();
        const result = json.data ?? json;

        if (
          json.status === "error" ||
          typeof result.totalSolved !== "number"
        ) {
          throw new Error("Invalid stats response");
        }

        setStats(result);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        setError("LeetCode stats are temporarily unavailable.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    async function loadHeatmap() {
      try {
        const response = await fetch(
          `${API}/${USERNAME}/heatmap?view=last_365`,
          { signal: controller.signal }
        );

        if (!response.ok) throw new Error("Heatmap unavailable");

        const json: HeatmapData = await response.json();
        const result = json.data ?? json;

        if (
          result.status === "error" ||
          !Array.isArray(result.dailyContributions)
        ) {
          throw new Error("Invalid heatmap response");
        }

        setHeatmap(result);
        setDays(result.dailyContributions);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        setGraphError("Contribution graph temporarily unavailable.");
      } finally {
        if (!controller.signal.aborted) setGraphLoading(false);
      }
    }

    loadData();
    loadHeatmap();

    return () => controller.abort();
  }, []);

  const maxCount = Math.max(1, ...days.map((day) => day.count));

  function getColor(count: number) {
    if (count === 0) return "#252525";

    const level = Math.min(
      4,
      Math.ceil((count / maxCount) * 4)
    );

    return ["#3b2d18", "#79521d", "#c17b20", "#ffa116"][
      level - 1
    ];
  }

  return (
    <section className="leetcode-card">
      <div className="leetcode-header">
        <div className="leetcode-title">
          <SiLeetcode size={32} color="#FFA116" />
          <div>
            <h3>LeetCode Stats</h3>
            <p>@{USERNAME}</p>
          </div>
        </div>

        <a
          href={`https://leetcode.com/u/${USERNAME}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="leetcode-profile-link"
        >
          View Profile ↗
        </a>
      </div>

      {loading ? (
        <p className="leetcode-message">Loading LeetCode stats...</p>
      ) : error || !stats ? (
        <p className="leetcode-message">{error}</p>
      ) : (
        <>
          <div className="leetcode-total">
            <span>Total Problems Solved</span>
            <strong>
              {stats.totalSolved}
              <small> / {stats.totalQuestions}</small>
            </strong>
          </div>

          <div className="leetcode-progress">
            <div
              className="leetcode-progress-fill"
              style={{
                width: `${
                  stats.totalQuestions > 0
                    ? Math.min(
                        100,
                        (stats.totalSolved / stats.totalQuestions) * 100
                      )
                    : 0
                }%`,
              }}
            />
          </div>

          <div className="leetcode-difficulty-grid">
            <div className="leetcode-difficulty easy">
              <span>Easy</span>
              <strong>{stats.easySolved}</strong>
            </div>

            <div className="leetcode-difficulty medium">
              <span>Medium</span>
              <strong>{stats.mediumSolved}</strong>
            </div>

            <div className="leetcode-difficulty hard">
              <span>Hard</span>
              <strong>{stats.hardSolved}</strong>
            </div>
          </div>

          <div className="leetcode-acceptance">
            <span>Acceptance Rate</span>
            <strong>{stats.acceptanceRate}%</strong>
          </div>
        </>
      )}

      <div className="leetcode-heatmap">
        <div className="leetcode-heatmap-heading">
          <div>
            <h3>Submission Activity</h3>
            <p>Last 365 days</p>
          </div>
          <span className="leetcode-heatmap-brand">LeetCode</span>
        </div>

        {graphLoading ? (
          <p className="leetcode-message">Loading contribution graph...</p>
        ) : graphError ? (
          <p className="leetcode-message">{graphError}</p>
        ) : (
          <>
            <div className="leetcode-heatmap-scroll">
              <div className="leetcode-heatmap-grid">
                {days.map((day) => (
                  <div
                    key={day.date}
                    className="leetcode-heatmap-cell"
                    style={{ backgroundColor: getColor(day.count) }}
                    title={`${day.date}: ${day.count} submissions`}
                    aria-label={`${day.date}: ${day.count} submissions`}
                  />
                ))}
              </div>
            </div>

            <div className="leetcode-heatmap-legend">
              <span>Less</span>
              {[
                "#252525",
                "#3b2d18",
                "#79521d",
                "#c17b20",
                "#ffa116",
              ].map((color) => (
                <span
                  key={color}
                  className="leetcode-heatmap-cell"
                  style={{ backgroundColor: color }}
                />
              ))}
              <span>More</span>
            </div>

            <div className="leetcode-heatmap-summary">
              <span>
                {heatmap?.totalSubmissions ??
                  days.reduce((sum, day) => sum + day.count, 0)}{" "}
                submissions
              </span>
              <span>
                {heatmap?.totalActiveDays ??
                  heatmap?.activeDays ??
                  days.filter((day) => day.count > 0).length}{" "}
                active days
              </span>
              <span>Longest streak: {heatmap?.longestStreak ?? 0} days</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
