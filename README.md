# Next.js14 API Routes App

This is a solution to the [Step-by-Step Guide: Create a Next.js 13 CRUD App with MongoDB from Scratch Project](https://www.youtube.com/watch?v=wNWyMsrpbz0). I'm practicing and developing my coding competency by building projects after projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The Challenge/User Stories

Welcome to this comprehensive tutorial where you'll learn how to build a fully functional CRUD (Create, Read, Update, Delete) application using Next.js 13 and MongoDB. In this step-by-step guide, we'll start from scratch and take you through the entire process of developing a powerful web application with Next.js 13, a popular React framework, and integrating it with MongoDB, a flexible and scalable NoSQL database.

Throughout the video, you'll gain hands-on experience as we cover all aspects of building a CRUD app. We'll explore topics such as setting up the development environment, creating routes and components, and performing database operations. By the end of this tutorial, you'll have a solid understanding of Next.js 13 and MongoDB.

### Screenshot

![](/publicTrae/images/screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/traez/nextjs14-api-routes-app](https://github.com/traez/nextjs14-api-routes-app)
- Live Site URL: [https://nextjs14-api-routes-app.vercel.app/](https://nextjs14-api-routes-app.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox and CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- Tailwind CSS
- Typescript
- Nodejs (with/without Expressjs)
- MongoDB
- GraphQL  
- React Native  

### What I learned

- Resolving `Parsing error: Cannot find module 'next/babel'` in Next.js. To do so, Update `.eslintrc.json` with the following configuration: `"extends": ["next/babel","next/core-web-vitals"]`  
- Using `"@/*"` imports for project-wide paths. In `jsconfig.json`, the `"@/*": ["./src/*"]` mapping allows imports starting with "`@/"` to locate files within the `"./src/"` directory.
- Confirmation dialog boxes with `window.confirm()`. Use the `window.confirm()` method to display a confirmation message and get a user's decision (true for "OK", false for "Cancel").
- Handling form submissions with `onSubmit`. Utilize the `onSubmit` event handler within HTML forms to execute code when a form is submitted.
- Disabling caching for fresh data. Employ `cache: 'no-store'` and `next: { revalidate: 0 }` to prevent data caching and ensure up-to-date information. 
- Understanding Next.js API routes and server actions. API routes create server-side endpoints (accessible at /api paths) for various data interactions. While Server actions (introduced in Next.js 13) are a higher-level approach for handling server-side logic and mutations, often used for form submissions and data updates. 

### Continued development

- More projects; increased competence!

### Useful resources

Stackoverflow  
YouTube  
Google  
ChatGPT

## Author

- Website - [Trae Zeeofor](https://github.com/traez)
- Twitter - [@trae_z](https://twitter.com/trae_z)

## Acknowledgments

-Jehovah that keeps breath in my lungs
