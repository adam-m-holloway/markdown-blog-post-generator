# Markdown Blog Post Generator

> CLI tool using [plop.js](https://plopjs.com/) which generates a blog post in markdown based on a series of questions which you answer. Ideal for [Gatsby](https://www.gatsbyjs.org/) or other [JAMstack](https://jamstack.org/) sites, this can easily be dropped into your existing site.

## Table of Contents
  * [🌩 Install](#-install)
  * [🛠 Configuration](#-configuration)
  * [🕹 Usage](#-usage)
  * [📝 Notes](#-notes)

## 🌩 Install
Install the NPM modules with `yarn`

## 🛠 Configuration
  * Add author details into `/config/authors.json`
  * Questions can be configured from inside `/generators/blog-posts-generator.js`
  * Blog post format can be configured in `/templates/blog-post-md.template`

## 🕹 Usage
Run the CLI using `yarn run generate`

## 📝 Notes
  * Generates blogs posts into a `/posts` folder
  * Blog posts are formatted into `yyyy-mm-dd--your-post-title.md`

## 🤓 Author
I'm [Adam Holloway], a JavaScript Software Engineer from the [UK].

[![Follow adam-m-holloway on GitHub][github badge]][github]
[![Follow adam_holloway on Twitter][twitter badge]][twitter]

<!-- images -->
[github badge]: https://img.shields.io/github/followers/adam-m-holloway.svg?style=social&label=Follow
[twitter badge]: https://img.shields.io/twitter/follow/adam_holloway.svg?style=social&label=Follow

<!-- links -->
[adam holloway]: https://www.linkedin.com/in/adam-holloway21/
[twitter]: https://twitter.com/adam_holloway
[github]: https://github.com/adam-m-holloway
[uk]: https://www.google.com/maps/place/UK/
