
import { NextResponse } from "next/server";

const USERNAME = "Ravimaurya123";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const year = Number(
      searchParams.get("year") ?? new Date().getFullYear()
    );
    const currentYear = new Date().getFullYear();

    if (
      !Number.isInteger(year) ||
      year < 2008 ||
      year > currentYear
    ) {
      return NextResponse.json(
        { error: "Invalid contribution year." },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=${year}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Unable to fetch GitHub contributions." },
        { status: 502 }
      );
    }

    const data = await response.json();

    const contributions: {
      date: string;
      count: number;
    }[] = Array.isArray(data.contributions)
      ? data.contributions
      : [];

    const days = contributions
      .filter((day) => day.date <= new Date().toISOString().slice(0, 10))
      .sort((a, b) => a.date.localeCompare(b.date));

    const totalContributions = days.reduce(
      (total, day) => total + (Number(day.count) || 0),
      0
    );

    const activeDays = days.filter(
      (day) => Number(day.count) > 0
    ).length;

    let longestStreak = 0;
    let currentStreak = 0;
    let runningStreak = 0;
    let previousDate = "";

    for (const day of days) {
      const date = new Date(`${day.date}T12:00:00Z`);

      if (Number(day.count) > 0) {
        const previous = previousDate
          ? new Date(`${previousDate}T12:00:00Z`)
          : null;

        const consecutive =
          previous &&
          (date.getTime() - previous.getTime()) ===
            24 * 60 * 60 * 1000;

        runningStreak = consecutive ? runningStreak + 1 : 1;
        longestStreak = Math.max(longestStreak, runningStreak);
        previousDate = day.date;
      } else {
        runningStreak = 0;
        previousDate = day.date;
      }
    }

    // Current streak counts consecutive active days ending today,
    // or yesterday if today has no contributions yet.
    const activeDates = new Set(
      days
        .filter((day) => Number(day.count) > 0)
        .map((day) => day.date)
    );

    const today = new Date();
    const todayString = today.toISOString().slice(0, 10);

    const yesterday = new Date(today);
    yesterday.setUTCDate(yesterday.getUTCDate() - 1);
    const yesterdayString = yesterday.toISOString().slice(0, 10);

    let cursor = activeDates.has(todayString)
      ? today
      : yesterday;

    if (!activeDates.has(cursor.toISOString().slice(0, 10))) {
      currentStreak = 0;
    } else {
      while (activeDates.has(cursor.toISOString().slice(0, 10))) {
        currentStreak++;
        cursor = new Date(cursor);
        cursor.setUTCDate(cursor.getUTCDate() - 1);
      }
    }

    return NextResponse.json({
      username: USERNAME,
      year,
      totalContributions,
      activeDays,
      currentStreak,
      longestStreak,
      contributions: days,
    });
  } catch (error) {
    console.error("GitHub stats error:", error);

    return NextResponse.json(
      { error: "Something went wrong fetching GitHub stats." },
      { status: 500 }
    );
  }
}
