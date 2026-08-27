---
title: Frontline
date: 2026-01-11
tags: hackathon, ai, computer-vision, healthcare, emergency-response
summary: AI-powered emergency triage system using camera-based vitals monitoring and real-time injury detection.
---

*AI-powered emergency triage system using camera-based vitals monitoring and real-time injury detection with voice-guided first aid instructions.*

[devpost](https://devpost.com/software/frontline-noyxp0) · [github](https://github.com/seifotefa/deltahacks-12)

![Frontline dashboard showing patient vitals and triage information](/assets/frontline.png)

Frontline won Best Use of Presage SDK at DeltaHacks12, and was recognized by the CEO of Presage as a featured project. It combines computer vision, vital signs monitoring, and AI guidance to help first responders make faster decisions during emergencies.

## The Problem

First responders face critical challenges: limited patient information, decision paralysis under pressure, difficult resource allocation in mass casualties, and communication barriers with unconscious or shocked victims. Traditional triage relies on manual assessment which is time-consuming and error-prone.

## The Solution

[Demo of Frontline in action](/assets/frontlinedemo.mp4)

### SmartSpectra (Presage SDK)

Camera-based vital signs monitoring measuring heart rate, respiratory rate, blood pressure, and oxygen saturation in real-time—no physical contact needed.

### Gemini Vision AI

Analyzes camera feed to detect visible injuries (burns, lacerations, fractures) and assesses severity based on appearance and vital signs correlation.

### ElevenLabs Voice Assistant

AI-powered conversational agent providing step-by-step first aid instructions, answering questions, and guiding responders through procedures hands-free.

## Tech Stack

React and Tailwind CSS on the frontend with real-time data visualization; Node.js and Express on the backend with C++ for the Presage SDK integration; and the Presage SmartSpectra SDK, Google Gemini Vision API, and ElevenLabs API for the AI layer.

## Impact

Built in under 36 hours at DeltaHacks12, Frontline won Best Use of Presage SDK and demonstrated how camera-based vitals monitoring combined with AI can transform emergency medical response. The project showed the practical potential of these technologies in high-pressure scenarios where every second counts.
