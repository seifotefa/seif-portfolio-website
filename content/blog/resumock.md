---
title: ResuMock
date: 2025-11-06
tags: hackathon, ai, interview-prep, gemini, web-dev
summary: AI-powered mock interview coach generating tailored behavioral questions from resumes.
---

*Building an AI-powered mock interview coach that turns your resume into tailored behavioral interview practice in under 2 hours.*

[devpost](https://devpost.com/software/resumock) · [github](https://github.com/seifotefa/deltahackslite)

![ResuMock interface](/assets/resumock.png)

During DeltaHacks Lite 2025, I teamed up with Ahmed Aly, Youseph E., and Omar Mzyan to create ResuMock, an AI-powered mock interview coach that helps users prepare for behavioral job interviews. We built it in just an hour and a half.

## The Problem

Preparing for behavioral interviews is tough. Most people rely on generic questions online that don't reflect their real experiences. We wanted to make something more personal—a tool that tailors practice questions directly from your own resume.

Our goal: make interview prep smarter, faster, and more relevant to *you*.

## The Solution

ResuMock lets users upload their resume and enter the company and role they're applying for. Using Google's Gemini API, the app generates custom behavioral interview questions based on their personal experiences.

Users can type short answers to each question, and the AI instantly gives feedback on clarity, confidence, and structure, helping them refine their responses in real time.

It's like having a personal interview coach, available anytime, helping you spin and understand your own story.

## Demo

[Demo video](/assets/resumock-demo.mp4)

## The Tech Stack

React, Tailwind CSS, and Vite on the frontend; Node.js and Express on the backend; and Google's Gemini API for the AI integration. Total development time: 90 minutes.

## How It Works

1. Users upload their resume (PDF or text)
2. They input the target company and role
3. The backend sends this info to the Gemini API
4. The AI generates behavioral interview questions tailored to the resume
5. Users type responses and get instant AI feedback on performance

## Challenges Faced

Of course, time was our biggest constraint. Implementing audio response support was on our roadmap but didn't make it into the MVP.

We also had to balance generating useful questions while keeping AI calls efficient and the UI responsive. Debugging Express routes and aligning frontend-backend responses took some quick teamwork under pressure.

## What I Learned

This project reinforced the importance of building lean and shipping fast. I learned how to structure AI-based feedback loops efficiently, improved my teamwork speed during a hackathon, and gained confidence working with the Gemini API for real-world AI integrations.

And maybe most importantly, that great ideas don't need a whole weekend. Sometimes 90 minutes is enough to prove what's possible.

## The Outcome

By the end of the hackathon, ResuMock worked exactly as we envisioned: users could upload their resumes and instantly start an interactive AI-powered interview session. Mentors loved the idea's simplicity and real-world potential.

Next up: adding voice-based answers so users can practice speaking naturally, not just typing—turning ResuMock into a full simulation experience.
