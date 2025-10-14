---
title: spark and prepper
date: 2025-02-02
summary: building an ai-powered study app that turns your notes into interactive learning tools.
---
![sparkandprepper](/assets/sparkandprepper.png)

# *project deep dive: spark and prepper*
<br /><br />
during gdsc hacks 2025 at the university of guelph, i teamed up with youseph el khouly and ahmed aly to build **spark and prepper** — an ai-powered study app designed to make studying more organized, efficient, and interactive.<br /><br />

## **the problem**
as students, we all deal with scattered notes, endless slides, and last-minute cramming.  
it’s easy to feel lost in all the material and not know where to start.  
we wanted to build something that would make that process simpler, an all-in-one platform to organize, summarize, and personalize your study experience.<br /><br />
our goal was straightforward: make studying smarter, not harder.<br /><br />

## **the solution**
**spark and prepper** lets students upload their notes, syllabi, or slides, and automatically turns them into interactive study tools such as condensed study guides, flashcards, mock exams, cheat sheets, and even an ai tutor chatbot all powered by google’s gemini api.<br /><br />
the idea was to create something practical and immediate — a tool that could take what you already have and turn it into something you can actually learn from.<br /><br />

![sparkandprepperhome](/assets/s&phome.jpg)
# *a mock exam based on slides for "Intro to Software Development using Java".*

<br /><br />

## **the tech stack**
**frontend:** react, vite, tailwind css, react router  
**backend:** node.js, express.js, firebase (storage & auth)  
**ai engine:** google’s gemini api<br /><br />
we divided our work naturally.  
i focused on full-stack development and ai integration, connecting the backend and frontend.  
youseph worked on firebase and gemini integration.  
ahmed designed the interface and handled the frontend structure.  
we built and shipped the entire prototype in a less than 24 hours<br /><br />

## **how it works**
1. a user uploads their study materials (pdfs, docs, or slides)  
2. the backend sends those files to gemini for processing  
3. the ai generates study guides, flashcards, and other learning resources  
4. firebase stores everything, and the frontend displays it interactively  
5. users can then study, test themselves, or chat with the ai tutor<br /><br />

## **challenges faced**
integrating the gemini api across different file types wasn’t easy.  
handling file uploads securely with firebase storage took trial and error.  
and building a responsive, intuitive interface under hackathon pressure tested our design instincts.  
git merge conflicts - lost progress work multiple times due to lack of experience with git
each challenge forced us to think about balance — between function and simplicity, speed and polish.<br /><br />

## **what i learned**
i learned how to connect frontend and backend logic in a way that feels seamless to the user.  
i got more comfortable with firebase and cloud file handling.  
i saw how generative ai can be applied to real academic workflows.  
git, git and more git.
and i learned that building under pressure means focusing on what matters most - clarity, teamwork, and shipping something that works.<br /><br />

## **the outcome**
by the end of the weekend, we had a working prototype that impressed students and mentors alike.  
it reaffirmed my interest in building ai tools for learning, and reminded me that the best products often start as small, scrappy ideas.  
<br /><br />

**links**  

[source code](https://github.com/seifotefa/sparkandprepper)
