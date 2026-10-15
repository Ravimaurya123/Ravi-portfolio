import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        if (
            !name?.trim() ||
            !email?.trim() ||
            !subject?.trim() ||
            !message?.trim()
        ) {
            return NextResponse.json(
                { error: "Please fill in all fields." },
                { status: 400 }
            );
        }

        const recipient = process.env.CONTACT_EMAIL;

        if (!process.env.RESEND_API_KEY || !recipient) {
            return NextResponse.json(
                { error: "Email service is not configured." },
                { status: 500 }
            );
        }


        const { data, error } = await resend.emails.send({
            from: "Ravikant Singh | Portfolio <onboarding@resend.dev>",
            to: [recipient],
            replyTo: email.trim(),
            subject: `🤝 New Connection from ${name.trim()} | ${subject.trim()}`,

            text: `
Hello Ravikant! 👋

Great news! Someone has reached out to you through your portfolio website.

CONTACT DETAILS 👤 
━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${name.trim()}
Email: ${email.trim()}
Subject: ${subject.trim()}

MESSAGE:${message.trim()}

CONNECTION SUMMARY

You have received a new message from ${name.trim()}.

📩 Want to connect?
Simply reply to this email to respond directly to ${name.trim()}.

Thank you for building meaningful connections through your portfolio!

Best regards,
Ravikant Singh
Full Stack Web Developer
                                        Thank You
  `.trim(),
        });



        if (error) {
            console.error("Resend error:", error);

            return NextResponse.json(
                { error: "Email could not be sent. Please try again." },
                { status: 502 }
            );
        }

        return NextResponse.json(
            { success: true, id: data?.id },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact API error:", error);

        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}