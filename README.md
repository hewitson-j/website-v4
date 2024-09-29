# Portfolio Website

This is the source code for my portfolio website. It is a React/Typescript project using React Router DOM and EmailJS.

Users enter into [jacobhewitson.com](http://jacobhewitson.com)'s home page and from there they can choose the navbar to be redirected to:

- [Projects](http://jacobhewitson.com/#/projects)
- [Other Services](http://jacobhewitson.com/#/other-services)
- [Contact](http://jacobhewitson.com/#/contact)

If they click on my photo on the home page they will be redirected to an [About Me](http://jacobhewitson.com/#/about) page.

## Projects
The Projects page uses a modal component from Material-UI. Users can click on the button of each project image to be brought to a closable modal with a summary of the project, GitHub repo link, (if live or hosted) a link to the project, and a list of the technologies used in it. Users are also able to sort through several categories of projects entries/images.

## Other Services
This section provides information on other services I am able to perform outside of my software engineering services. This has a simple flex container to hold the different paragraphs and summaries of services provided.

## Contact
This section is set apart for users to input their information into a form where they can send me an email. This uses the EmailJS library to handle requests and send the form data as an email.

## About
From the home page, users can click on my profile picture and be redirected to [About](http://jacobhewitson.com/#/about) which has some information about who I am and the kinds of work I've done. It has a section for my Education and Work History.

## Tests
