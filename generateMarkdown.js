// function to generate markdown for README
function generateMarkdown(data) {
    return `${data.title} # ${data.description} # ${data.usage} # ${data.test}# ${data.github}# ${data.email}`;
  }
  
  module.exports = generateMarkdown;
  