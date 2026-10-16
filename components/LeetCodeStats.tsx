
"use client";

import { useEffect, useState } from "react";
import {
  SiLeetcode,
} from "react-icons/si";

type LeetCodeData = {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  status?: string;
  message?: string;
};

const USERNAME = "lHukd8gKwR";

export default function LeetCodeStats() {
  const [stats, setStats] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          `https://leetcode-stats.tashif.codes/${USERNAME}`
        );

        if (!response.ok) {
          throw new Error("Unable to fetch LeetCode stats");
        }

        const data = await response.json();
        const result = data.data ?? data;

        if (
          data.status === "error" ||
          typeof result.totalSolved !== "number"
        ) {
          throw new Error("Invalid LeetCode response");
        }

        setStats(result);
      } catch (err) {
        console.error("LeetCode stats error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

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
        <p className="leetcode-message">
          Stats are temporarily unavailable. Please try again later.
        </p>
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
    </section>
  );
}
