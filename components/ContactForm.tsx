"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Email could not be sent.");
      }

      setStatus("Message sent successfully! Thank you.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Send a Message</h3>

      <label htmlFor="contact-name">Your Name</label>
      <input
        id="contact-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        required
      />

      <label htmlFor="contact-email">Your Email</label>
      <input
        id="contact-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />

      <label htmlFor="contact-subject">Subject</label>
      <input
        id="contact-subject"
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Enter subject"
        required
      />

      <label htmlFor="contact-message">Message</label>
      <textarea
        id="contact-message"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message..."
        required
      />

      <button
        type="submit"
        className="contact-submit"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message →"}
      </button>

      {status && (
        <p role="status" aria-live="polite">
          {status}
        </p>
      )}
    </form>
  );
}