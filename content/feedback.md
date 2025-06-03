---
title: Feedback App
description: A simple app for collecting customer feedback, built with Nuxt 3 and deployed on Cloudflare Pages.
date: 2025-06-02
tags: [nuxt, saas, sqlite, drizzle, feedback]
cover: /images/feedback-cover.png
---

# Feedback App – A Simple Feedback Collection Tool

::SectionTitle
What is this?
::

::Paragraph
This is a simple app built to collect customer feedback about products.
::

::SectionTitle
Why did I create this app?
::
::Paragraph
Initially, I created this app to gather feedback from my own customers. My goal was to keep it as simple as possible to ship quickly. However, as I worked on it, I realized the potential to turn it into a SaaS product. That’s when I began exploring different architectures and tech stacks to find the best fit for my goals.
::
::SectionTitle
Architecture & Tech Stack
::
::Paragraph
At first, I used **PocketBase** as the backend. It offers out-of-the-box features like a database, storage, and authentication, making it easy to get started quickly. I paired it with **Nuxt 3** and **Nitro**, using Nitro as a Backend For Frontend (BFF). At that point, it seemed like all I needed.
::
::Paragraph
Later, I reconsidered the deployment strategy. Deploying PocketBase and Nuxt separately didn’t feel efficient. So, I decided to remove PocketBase and instead implement all core services directly within Nitro. Here's what I used:
::
::Paragraph

1. **SQLite** – A lightweight, file-based relational database that fits this project well.
2. **Drizzle ORM** – Since SQLite may become less performant as the user base grows, I wanted an ORM to abstract the database and make migrations easier. I considered both Prisma and Drizzle (I've used both before) and found Drizzle more suitable for this project.
3. **unstorage** – Since I'm using Nuxt, I was already familiar with the UnJS ecosystem. `unstorage` was a natural fit for handling storage.
4. **better-auth** – For now, this library provides the best balance of flexibility and simplicity for authentication.
   ::
   ::SectionTitle
   Deployment
   ::
   ::Paragraph
   For the demo, I deployed the app on **Cloudflare Pages** (a free hosting platform). Due to its limitations, I had to make a few adjustments:

   1. Switched to **Cloudflare D1** for the database and implemented custom "transaction-like" logic, as D1 doesn’t support real transactions yet.

   2. Used **Bunny.net** for external file storage, which provides a performant and affordable solution.
      ::

      ::SectionTitle
      What’s Next?
      ::
      ::Paragraph
      There’s still plenty of room for improvement:

- Add unit and end-to-end testing to improve maintainability
- Refactor parts of the codebase to improve reusability
- Build and ship additional features like response analysis and better dashboard tools
  ::
  ::SectionTitle
  Key Features
  ::
  ::Paragraph
- Support for multiple merchants and products
- Social login
- Ability to ask customers for ratings
- Clean dashboard interface
- (More features coming soon…)
  ::
  ::SectionTitle
  Challenges I Faced
  ::
  ::Paragraph
- Replacing PocketBase’s full suite of features with minimal tools while maintaining simplicity
- Implementing transaction-like behavior in Cloudflare D1
- Handling file uploads and ensuring compatibility with Cloudflare Pages
  ::
  ::SectionTitle
  Try the App
  ::
  ::Paragraph
  🧪 **Live Demo**: [https://feedback-demo.pages.dev](https://feedback-demo.pages.dev)  
  🛠️ **Source Code**: [https://github.com/choliddnr/feedback](https://github.com/choliddnr/feedback)
  ::
