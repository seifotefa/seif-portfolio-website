---
title: Spark and Prepper
date: 2025-02-02
tags: hackathon, ai, education, react, gemini
summary: AI study platform turning notes into guides, flashcards, exams, and an AI tutor.
---

*Building an AI-powered study app that turns your notes into interactive learning tools.*

[devpost](https://devpost.com/software/sparkandprepper) · [github](https://github.com/seifotefa/sparkandprepper)

![Spark and Prepper interface](/assets/sparkandprepper.png)

During GDSC Hacks 2025 at the University of Guelph, I teamed up with Youseph El Khouly and Ahmed Aly to build Spark and Prepper—an AI-powered study app designed to make studying more organized, efficient, and interactive.

## The Problem

As students, we all deal with scattered notes, endless slides, and last-minute cramming. It's easy to feel lost in all the material and not know where to start.

We wanted to build something that would make that process simpler—an all-in-one platform to organize, summarize, and personalize your study experience.

Our goal was straightforward: make studying smarter, not harder.

## The Solution

Spark and Prepper lets students upload their notes, syllabi, or slides, and automatically turns them into interactive study tools:

- Condensed study guides
- Flashcards
- Mock exams
- Cheat sheets
- An AI tutor chatbot

All powered by Google's Gemini API.

The idea was to create something practical and immediate—a tool that could take what you already have and turn it into something you can actually learn from.

![Mock exam example](/assets/s&phome.jpg)

*A mock exam based on slides for "Intro to Software Development using Java"*

## The Tech Stack

React, Vite, Tailwind CSS, and React Router on the frontend; Node.js and Express on the backend with Firebase for storage and auth; and Google's Gemini API as the AI engine.

We divided our work naturally: I focused on full-stack development and AI integration, connecting the backend and frontend; Youseph worked on Firebase and Gemini integration; and Ahmed designed the interface and handled the frontend structure.

We built and shipped the entire prototype in less than 24 hours.

## How It Works

1. A user uploads their study materials (PDFs, docs, or slides)
2. The backend sends those files to Gemini for processing
3. The AI generates study guides, flashcards, and other learning resources
4. Firebase stores everything, and the frontend displays it interactively
5. Users can then study, test themselves, or chat with the AI tutor

## Challenges Faced

Integrating the Gemini API across different file types wasn't easy.

Handling file uploads securely with Firebase storage took trial and error.

Building a responsive, intuitive interface under hackathon pressure tested our design instincts.

Git merge conflicts—we lost progress multiple times due to lack of experience with Git.

Each challenge forced us to think about balance—between function and simplicity, speed and polish.

## What I Learned

I learned how to connect frontend and backend logic in a way that feels seamless to the user.

I got more comfortable with Firebase and cloud file handling.

I saw how generative AI can be applied to real academic workflows.

Git, Git, and more Git.

And I learned that building under pressure means focusing on what matters most—clarity, teamwork, and shipping something that works.

## The Outcome

By the end of the weekend, we had a working prototype that impressed students and mentors alike. It reaffirmed my interest in building AI tools for learning, and reminded me that the best products often start as small, scrappy ideas.
