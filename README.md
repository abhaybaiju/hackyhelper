# HackyHelper - A Hackathon Management Platform By The Hackers For The Hackers

## Inspiration

While participating in various virtual hackathons and collaborating with folks remotely over the summer has been extremely exciting, there are certain issues that we have faced while developing and managing our projects. In the past hackathons that we have attended or organized, we have generally seen that out of the total registered participants, **even if 75% of the folks show up for the final event, only about 30% are actually able to complete their projects and submit for judging**. A major reason for this is that while hackathons can be a ton of fun, they can be quite chaotic for teams, especially for those with rookie hackers.

There are some extremely common issues that we have noticed while developing the project. **Issues** such as **haywire management of notes during ideation**, **lapses in project planning**, **creating quality documentation**, etc., can hamper the productivity of a team significantly in the overall hackathon process. Even for this hackathon, we contemplated using a project management tool like Trello, Jira, or GitHub Projects, however, we realized that they facilitated long term planning and supported only the development process. They were also not very user-friendly inexperienced hackers in mind.

At this point, **we have not yet discovered a project management tool that has dedicatedly been made keeping ease-of-use for beginners in mind**. Therefore, we decided to create a hackathon management platform created from the hacker’s perspective to aid.

### And thus, HackyHelper was born :D

## What it does

**HackyHelper** is a hackathon project management platform designed for hackers to assist them in streamlining their development process from ideation to demo. With various functionalities that include (but are not limited to) sticky notes for ideation, Figma embeds for easy access of wireframes, to-do lists to keep track of pending work, a Markdown editor to manage documentation, GitHub integration to manage the team members, and a nice little Spotify playlist to groove along with, HackyHelper is the Operations Control Center that hackers need to manage their projects. It is truly a tool **by the hackers, for the hackers**!

## How we built it

* The web application has been built using **React**.
* We used the Grommet design library for styling our web application.
* We have used **Google Firebase** to manage our back-end for this project.
* Authentication in this app has been done using **Github OAuth** tokens. These are stateful and persist in the browser.
* State management in the app is managed by the **React Context API**.
* A music playlist has also been embedded using the **Spotify** widget.

## Challenges we ran into

* Initially, we faced a lot of issues figuring out how GitHub API and OAuth work. The OAuth process was largely simplified by the use of Firebase. Understanding the Github API, its capabilities and utility, took a thorough study of its documentation and code samples.
* Since none of our team members specializes in UI design, design and styling of components was a challenge. After some time of trying to work with CSS, followed by an intense exploration of various libraries, we finally found the Grommet design library/framework which helped ease out the process.

## Accomplishments that we're proud of

* This was our first time working with Firebase and Github API, which we are pretty pleased to have figured out.
* While looking for the right resources to embed and implement the various functionalities was a challenging task, we were able to orchestrate a seamless experience with the functionalities we deemed essential for the MVP of the project.
* We implemented principles of customer development to create a more meaningful user experience for our audience.
* Keeping in mind the summer celebratory theme in mind, we are proud to have added a splash of that with a Spotify summer playlist via an embedded music player.

## What we learned

We learned how to:

* use Firebase to manage the back-end of the web app
* use the GitHub API for authentication and to fetch project data
* embed the Spotify music player in our web app 
* embed Figma artboards in our web app

## What's next for HackyHelper

We have various ideas that we do intend to implement in HackyHelper: 

* Internal chat messaging functionality
* Project boards in the web app
* Support for multiple hackathons and projects
* Create Chrome and Firefox extensions that create a project for the user whenever they register for a hackathon on DevPost, Devfolio, HackerEarth, etc.
* Add Progress Bar to gamify the project development process
* Recommender for the hackers for various open-source frameworks and projects based on the technologies they intend to use