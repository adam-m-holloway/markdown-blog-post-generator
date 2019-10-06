const fs = require('fs');
const inputRequired = require('../utils');

const authors = JSON.parse(fs.readFileSync('./config/authors.json'));

module.exports = plop => {
  plop.setGenerator('blog post', {
    prompts: [
      // Question 1
      {
        type: 'input',
        name: 'title',
        message: 'Blog post title?',
        validate: inputRequired('title')
      },
      // Question 2
      {
        type: 'list',
        name: 'author',
        message: 'The author of blog post?',
        choices: authors.map(author => ({ name: author.id, value: author.id }))
      },
      // Question 3
      {
        type: 'input',
        name: 'tags',
        message: 'tags? (separate with coma)'
      },
      // Question 4
      {
        type: 'confirm',
        name: 'draft',
        message: "It's a draft?"
      }
    ],
    actions: data => {
      // Get the current date
      data.date = new Date().toISOString().split('T')[0];

      // Parse tags as YAML array
      if (data.tags) {
        data.tags = `\ntags:\n  - ${data.tags.split(',').join('\n  - ')}`;
      }

      return [
        {
          type: 'add',
          path: './posts/{{date}}--{{dashCase title}}.md',
          templateFile: '../templates/blog-post-md.template'
        }
      ];
    }
  });
};
