const daysData = [
  {
    index: 1,
    title: 'Semantic HTML 🧱',
    description:
      'Make your website a storyteller! Use semantic HTML tags to express your content clearly to both users and search engines. Its like giving your website a friendly voice that everyone can understand! 📖🌐',
    descriptionHref:
      'https://learntheweb.courses/topics/html-semantics-cheat-sheet/',
    language: 'xml',
    codeSnippet: `
  <header>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </nav>
</header>
`,
  },
  {
    index: 2,
    title: 'CSS Grid 📊',
    description:
      'Designing layouts made easy! CSS Grid is like having a magical blueprint for creating stunning structures on your website.   It effortlessly arranges content into rows and columns, making responsive layouts a breeze. Say goodbye to layout headaches and hello to sleek, superhero-style designs with the ultimate ally for web developers!🏰✨',
    descriptionHref:
      'https://css-tricks.com/almanac/properties/g/grid-template-rows/',
    language: 'css',
    codeSnippet: `

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
`,
  },
  {
    index: 3,
    title: 'Meta Tags for SEO 🔍',
    description:
      'Help your website make a grand entrance on the internet stage! Add meta tags that describe it well—like providing the perfect introduction for a good friend. 🌟🚀 ',
    descriptionHref:
      'https://developers.google.com/search/docs/crawling-indexing/special-tags',
    language: 'xml',
    codeSnippet: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="description" content="Author: A.N. Author">
    <meta name="google-site-verification" content="+nxGUDJ4Q">
    <title>Example Books - high-quality used books</title>
    <meta name="robots" content="noindex,nofollow">
  </head>
</html>
  `,
  },
  {
    index: 4,
    title: 'Git --fixup 🛠️',
    description:
      'Bid farewell to the verbose! Git Fixup commands are akin to concise and efficient dialogues with your commit history. 🛠️🔍It is especially useful when you want to associate a new commit with a previous one, indicating that the new commit is intended to fix or improve upon the earlier commit 📝',
    descriptionHref: 'https://dev.to/maxpou/git-cheat-sheet-advanced-3a17',
    language: 'bash',
    codeSnippet: `
git add .

git commit --fixup HEAD~1
# or replace HEAD~1 by the commit hash (fed14a4c)

git rebase -i HEAD~3 --autosquash
# save&quit the file (:wq in VI)
  `,
  },
  {
    index: 5,
    title: 'JSDoc Magic ✨',
    description:
      'JSDoc comments are your codes friendly manual! Theyre like post-it notes for developers, offering quick insights into functions, parameters, and examples. Lets make your code a breeze to understand! 🚀📝',
    descriptionHref: 'https://devhints.io/jsdoc',
    language: 'javascript',
    codeSnippet: `
/**
 * @typedef product
 * @property {string} name
 * @property {number} quantity
 */

/**
 * the current item in the cart
 * @type {product}
 * */
export let item;

//Autocompletion for item.name and item.quantity !

  `,
  },
  {
    index: 6,
    title: 'Early Return Elegance ⏩',
    description:
      'Unlock the power of early returns in JavaScript functions for cleaner, more elegant code. Learn to exit swiftly, making your logic clear and concise !',
    descriptionHref:
      'https://gomakethings.com/the-early-return-pattern-in-javascript/',
    language: 'javascript',
    codeSnippet: `
//Commun 
function proceed_bad(data, target) {
  if (data){
    data.sendTo(target);
    //extra indendation
  }
}

//With early return
function proceed_good(data, target) {
  if (!data) return;
  data.sendTo(target);
}

  `,
  },
  {
    index: 7,
    title: 'Libraries Unveiled: The Ultimate Tier List 📚',
    description:
      'Dive into the 2022 🌐 State of JavaScript with our exclusive library tier list! Uncover the top-performing libraries, frameworks, and tools that are shaping the future of web development. Based on the latest insights, this tier list provides a roadmap for developers to navigate the ever-evolving JavaScript ecosystem. Stay ahead in the game with our comprehensive guide to the State of JavaScript Libraries! ✨💻',
    descriptionHref: 'https://2022.stateofjs.com/en-US/libraries/',
    language: 'json',
    codeSnippet: `

  `,
  },
  {
    index: 8,
    title: 'Timezone-Aware in JS ⏰',
    description:
      'Uncover how timezones and execution contexts influence the behavior of date handling !',
    descriptionHref: 'https://devhints.io/js-date',
    language: 'javascript',
    codeSnippet: `
// Client-Side Rendering (Browser)
const clientSideDate = new Date();
console.log(clientSideDate); // Will be the client's timezone 

// Server-Side Rendering (Node.js)
const serverSideDate = new Date();
console.log(serverSideDate); // Will be the server's timezone

  `,
  },
  {
    index: 9,
    title: 'Jest: MockReturnValueOnce 📝',
    description:
      'Discover MockReturnValueOnce for dynamic mocks, seamlessly aligning with the Arrange-Act-Assert (AAA) pattern. Elevate your testing game effortlessly! 🚀',
    descriptionHref:
      'https://devhints.io/jest',
    language: 'javascript',
    codeSnippet: `
describe('The MockReturnValueOnce', () => {
  it('should handle calls', () => {
    // Arrange
    const mockFunction = jest.fn()
      .mockReturnValueOnce('First Call')
      .mockReturnValueOnce('Second Call');
    // Act
    const result1 = mockFunction();
    const result2 = mockFunction();
    const result3 = mockFunction();
    // Assert
    expect(result1).toBe('First Call');
    expect(result2).toBe('Second Call');
    expect(result3).toBeUndefined(); 
    // Additional calls return undefined
  });
});
    
  `,
  },
  {
    index: 10,
    title: 'CSS Variables 🎨',
    description:
      'Introduce variables to your CSS for easy theming. Its like changing the mood of your website with a simple switch! 🌈',
    descriptionHref:
      'https://developer.mozilla.org/en-US/docs/Glossary/Semantics',
    language: 'css',
    codeSnippet: `
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --font-family: 'Arial', sans-serif;
}

body {
  background-color: var(--primary-color);
}

h1{
  color: var(--secondary-color);
  font-family: var(--font-family)
}
  `,
  },
  {
    index: 11,
    title: 'Git Fame Unveiled: Know Your Impact 🌟',
    description:
      'Discover your Git footprint! Use these commands to reveal your commit legacy. Dive into the world of version control stardom and see where you stand among the top contributors. Git Fame awaits! 🚀',
    descriptionHref:
      'https://www.thegeekdiary.com/git-shortlog-command-examples/',
    language: 'bash',
    codeSnippet: `
# Will display your number of commits
git shortlog -sn --author="your username or email"

# Now let's see the top contributions ;)
git shortlog -sn | head -n 10
  `,
  },
  {
    index: 12,
    title: ' Object.entries and Object.fromEntries 🤝',
    description: 'Discover a powerful duo that transforms your objects into arrays and vice versa ✨',
    descriptionHref:
      'https://dev.to/hellonehha/javascript-object-entries-vs-fromentries-50nf',
    language: 'javascript',
    codeSnippet: `
const obj = { a: 1, b: 2, c: 3 };

const entries = Object.entries(obj);
console.log(entries);
//[ ['a', 1], ['b', 2], ['c', 3] ]

const newObj = Object.fromEntries(entries);
console.log(newObj);
//{ a: 1, b: 2, c: 3 }
    
  `,
  },
  {
    index: 13,
    title: 'Fast & Curious: console.time ⏰',
    description:
      'Zoom through JavaScript efficiency with console.time! Measure execution speed, optimize code, and become a time-traveling developer. Fast, curious, and code-savvy! ⚡️🕰️',
    descriptionHref:
      'https://medium.com/@anirudh.munipalli/stop-using-console-log-in-javascript-try-these-instead-72490d895a24',
    language: 'javascript',
    codeSnippet: `
// Start the timer
console.time('myCodeExecution');

// Your code snippet here
for (let i = 0; i < 100000; i++) {
  // Some intensive operation
}

// Stop the timer
console.timeEnd('myCodeExecution');
  `,
  },
  {
    index: 14,
    title: 'CSS Variables',
    description:
      '',
    descriptionHref:
      'https://developer.mozilla.org/en-US/docs/Glossary/Semantics',
    language: 'css',
    codeSnippet: `
    
    
  
//JS: 


  `,
  },
  {
    index: 15,
    title: 'Cybersecurity Best Practices',
    description:
      'Ensure your websites security with best practices. Its like putting on a superhero cape to protect your digital realm! 🦸‍♂️🔒',
    descriptionHref: 'https://your-custom-link-for-description',
    language: 'xml',
    codeSnippet: `
    <!-- Use HTTPS to encrypt data in transit -->
    <meta http-equiv="Content-Security-Policy" 
    content="upgrade-insecure-requests">
  `,
  },
  {
    index: 16,
    title: 'CSS Transitions',
    description:
      'Add delightful transitions to your elements. Its like giving your website a smooth choreography that captivates your users! 🕺💫',
    language: 'css',
    codeSnippet: `
    .element {
      transition: background-color 0.3s ease-in-out;
    }
    
    .element:hover {
      background-color: #f0f0f0;
    }
  `,
  },
  {
    index: 17,
    title: '',
    description: '',
    language: 'xml',
    codeSnippet: `


  `,
  },
  {
    index: 18,
    title: '',
    description: '',
    language: 'xml',
    codeSnippet: `

  `,
  },
  {
    index: 19,
    title: '',
    description: '',
    language: 'xml',
    codeSnippet: `

  `,
  },
  {
    index: 20,
    title: '',
    description: '',
    language: 'xml',
    codeSnippet: `

  `,
  },
  {
    index: 21,
    title: '',
    description: '',
    language: 'xml',
    codeSnippet: `

  `,
  },
  {
    index: 22,
    title: '',
    description: '',
    language: 'xml',
    codeSnippet: `

  `,
  },
  {
    index: 23,
    title: '',
    description: '',
    language: 'xml',
    codeSnippet: `



  `,
  },
  {
    index: 24,
    title: 'Merry Christmas !',
    description:
      'Wrap up your coding adventure with a festive spirit! Thanks for joining this calendar, and be ready for the next version! 🎄🚀',
    language: 'xml',
    codeSnippet: `

  `,
  },
]

export default daysData
