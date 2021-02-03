// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title};
     # Description
     ${data.description};
     # Usage
     ${data.usage};
     # Test
      ${data.test};
     # GitHub Username
     ${data.github};
     # Email
     ${data.email}`;
  }
  
  module.exports = generateMarkdown;
  