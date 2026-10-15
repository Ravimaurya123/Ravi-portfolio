
"use client";

import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link href="#home" className="footer-logo">
          Ravi<span>.</span>
        </Link>

        <p className="footer-text">
          Building digital experiences with passion and code.
        </p>

        <div className="footer-socials">
          <a
            href="https://github.com/Ravimaurya123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer-social-link"
          >
            <svg
              viewBox="0 0 24 24"
              width="21"
              height="21"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.08 3.05 1.58.1-.73.39-1.22.7-1.5-2.48-.28-5.09-1.24-5.09-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.27-2.61 5.21-5.1 5.49.4.34.75 1 .75 2.02V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/ravi-kant-singh-a039ab321/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-social-link"
          >
            <svg
              viewBox="0 0 24 24"
              width="21"
              height="21"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM8.05 18.5H5.1V9h2.95v9.5ZM6.57 7.7a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42ZM18.5 18.5h-2.94v-4.62c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.2-1.79 2.44v4.7H9.3V9h2.82v1.3h.04c.39-.74 1.35-1.52 2.78-1.52 2.97 0 3.56 1.95 3.56 4.49v5.23Z" />
            </svg>
          </a>

          <a
            href="#contact"
            aria-label="Contact"
            className="footer-social-link"
          >
            <Heart size={21} />
          </a>
        </div>

        <button
          type="button"
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Ravikant Singh. All rights reserved.
        </p>
        <p>Made with <Heart size={14} className="footer-heart" /> by Ravi</p>
      </div>
    </footer>
  );
}
