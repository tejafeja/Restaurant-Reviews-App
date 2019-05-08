# Restaurant Reviews App Stage 1
---
## _Three Stage Course Material Project - Restaurant Reviews_
This project is implemented using JavaScript features, responsive design media queries and implemented accessibility features in HTML.

## Table of Contents

- [# Restaurant Reviews App Stage 1](#restaurant-reviews-app-stage-1)
- [_Three Stage Course Material Project - Restaurant Reviews_](#three-stage-course-material-project---restaurant-reviews)
- [Table of Contents](#table-of-contents)
- [Project Overview: Stage 1](#project-overview-stage-1)
- [Specification](#specification)
- [What to do from here?](#what-to-do-from-here)
- [Leaflet.js and Mapbox:](#leafletjs-and-mapbox)
- [Project Dependencies](#project-dependencies)

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, I have incrementally converted a static webpage to a mobile-ready web application. In **Stage One**, I took a static design that lacks accessibility and converted the design to be responsive on different sized displays and accessible for screen reader use. I have also added a service worker to begin the process of creating a seamless offline experience for my users.

## Specification

- All content is responsive and displays on a range of display sizes. 
- Content makes use of available screen real estate and displays correctly at all screen sizes.
- An image's associated title and text renders next to the image in all viewport sizes.
- Images in the site are sized appropriate to the viewport and do not crowd or overlap other elements in the browser, regardless of viewport size.
- On the main page, restaurants and images are displayed in all viewports. The detail page includes a map, hours and reviews in all viewports.
- All content-related images include appropriate alternate text that clearly describes the content of the image.
- Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.
- Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.
- When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.

## What to do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8080`. For Python 3.x, you can use `python3 -m http.server 8080`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8080`.
2. With your server running, visit the site: `http://localhost:8080`, and look around for a bit to see what the current experience looks like.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

## Project Dependencies
- Udacity "Mobile Web Specialist Restaurant Reviews App: Stage 1" Project [Starter code](https://github.com/udacity/mws-restaurant-stage-1);
- Google "Service Workers: an Introduction" [Service worker](https://developers.google.com/web/fundamentals/primers/service-workers/);
- Mozilla "The premise of service workers" [Set Service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers);
- Using ARIA [ARIA] (https://www.w3.org/TR/using-aria/);
- Mozilla ARIA [Mozilla ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA);
- CSS Tricks [MediaQueries] (https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)