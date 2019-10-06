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
