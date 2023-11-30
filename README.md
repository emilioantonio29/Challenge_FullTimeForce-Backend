# [FullTimeForce](https://www.fulltimeforce.com/) BACK END CHALLENGE

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Instructions

In the project directory, you can run:

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Structure: 

This application has two modules, one corresponding to the user domain and another corresponding to the GitHub domain.

## User Domain: 

The user module allows logging in by sending an email and password via a POST request to the /user/login endpoint.

POST example:

```bash
{
    "email": "user1@exampsle.com",
    "password": "password1"
}
```

## Github Domain: 

The GitHub module allows querying the commit history of a public GitHub repository by sending a GET request to the /github/commits endpoint and providing the GitHub repository URL as query parameters.

GET example:

```bash
http://localhost:3001/github/commits?url=https://github.com/emilioantonio29/Challenge_FullTimeForce-Backend
```

## Challenge Instructions

The goal of this test will be to create an app that shows git commit history on the same public repository you are working on. You need to do well-stated and defined commits while working on this test and regularly push them up. No need to make the app able to access a private repository.

You will need to sign up for a free GitHub account if you do not already have one, then create a public repository to store your work so that we will be able to see and review it. You can find documentation on the GitHub API here: https://developer.github.com/v3/.

Choose the frontend and backend technologies that best suit your skill set in order to build the solution, Angular, Vue, or React frameworks or even Flutter, Swift or Android, if you like Mobile development. Pair them up with NodeJS, Python, or .Net, to create the perfect backbone. Use all the technologies and skills that you want to showcase, but don't forget you must show on UI the methods that were worked on the backend.

## Requirements

1. You must use the GitHub API - while you could make a scraper or devise another method to get the git commit history of your project, we would like to see how you work with an existing API.
2. Your GitHub repository must be public - this will allow us to look at it and verify the accuracy of your code. Once you complete this project, you will need to send over the link of the project to me (take-home-test@fulltimeforce.com).
3. The style of the page is up to you. Typically we use something like Tailwind CSS for a lot of our projects, then style it to meet the business want or need later on.
4. The framework we usually use for the backend is NestJS. You can use any other framework if you want but avoid Express.
5. The page does not need to be a real-time view (it’s okay for us to refresh it to get the latest commits on your repository).
6. You MUST provide instructions in the README on how to install and run your project. We will not infer anything, and if you do not include these instructions, we will reject your submission.
7. We measure the results based on completeness, code cleanliness, technology assortment, software design, use of testing and instructions quality given by the developer.
8. You might want to use complex technologies when building this solution as we need to see what you are capable of.