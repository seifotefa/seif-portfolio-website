---
title: resumock  
date: 2025-11-06  
summary: building an ai-powered mock interview coach that turns your resume into tailored behavioral interview practice in UNDER 2 HOURS.
---  
![resumock](/assets/resumock.png)  

# *project deep dive: resumock*  
<br /><br />  
 during **deltahacks lite 2025**, i teamed up with **ahmed aly, youseph e., and omar mzyan** to create **resumock**, an ai-powered mock interview coach that helps users prepare for behavioral job interviews. we built it in just an hour and a half. <br /><br />  

## **the problem**  
preparing for behavioral interviews is tough. most people rely on generic questions online that don’t reflect their real experiences. we wanted to make something more personal, a tool that tailors practice questions directly from your own resume.<br /><br />  
our goal: make interview prep smarter, faster, and more relevant to *you*.<br /><br />  

## **the solution**  
**resumock** lets users upload their resume and enter the company and role they’re applying for. using **google’s gemini api**, the app generates custom behavioral interview questions based on their personal experiences.  
<br /><br />  
users can type short answers to each question, and the ai instantly gives feedback on **clarity**, **confidence**, and **structure**, helping them refine their responses in real time.  
<br /><br />  
it’s like having a personal interview coach, available anytime, helping you spin and understand your own story.<br /><br />  
<br /><br />  
<br /><br />  
<br /><br />  

## 🎬 **demo video** 
<video controls width="100%">
  <source src="/assets/resumock-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<br /><br />  
<br /><br />  
<br /><br />  


## **the tech stack**  
**frontend:** react, tailwind css, vite  
**backend:** node.js, express  
**ai integration:** google gemini api  
<br /><br />  

## **how it works**  
1. users upload their resume (pdf or text)  
2. they input the target company and role  
3. the backend sends this info to the gemini api  
4. the ai generates behavioral interview questions tailored to the resume  
5. users type responses and get instant ai feedback on performance  
<br /><br />  

## **challenges faced**  
of course, time was our biggest constraint, implementing audio response support was on our roadmap but didn’t make it into the mvp.  
we also had to balance generating useful questions while keeping ai calls efficient and the ui responsive. debugging express routes and aligning frontend-backend responses took some quick teamwork under pressure.<br /><br />  

## **what i learned**  
this project reinforced the importance of **building lean and shipping fast**. i learned how to structure ai-based feedback loops efficiently, improved my teamwork speed during a hackathon, and gained confidence working with the **gemini api** for real-world ai integrations.  
and maybe most importantly, that great ideas don’t need a whole weekend. sometimes 90 minutes is enough to prove what’s possible.<br /><br />  

## **the outcome**  
by the end of the hackathon, **resumock** worked exactly as we envisioned: users could upload their resumes and instantly start an interactive ai-powered interview session. mentors loved the idea’s simplicity and real-world potential.  
<br /><br />  

**next steps:** we plan to add **voice-based answers** so users can practice speaking naturally, not just typing to turn resumock into a full simulation experience.  
<br /><br />  


**built in 1.5 hours at deltahacks lite 2025.**
