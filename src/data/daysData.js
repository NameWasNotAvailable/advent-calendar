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
    descriptionHref: 'https://devhints.io/jest',
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
    description:
      'Discover a powerful duo that transforms your objects into arrays and vice versa ✨',
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
    title: 'Customize Scrollbars ',
    description:
      'Discover the magic of ::-webkit-scrollbar for personalized scrollbar styles. Elevate your web design with ease! 🌟🎨',
    descriptionHref: 'https://ishadeed.com/article/custom-scrollbars-css/',
    language: 'css',
    codeSnippet: `
/* Set the width of the scroll bar*/
::-webkit-scrollbar{
  width: 10px;
}
/* Change the track */
::-webkit-scrollbar-track{
  background-color: blue;
  border-radius: 10px;
}
/* Making the thumb */
::-webkit-scrollbar-thumb{
  background: gray;
  border-radius: 10px
}
  `,
  },
  {
    index: 15,
    title: 'Tailwind CSS Peer Magic! 🎩✨',
    description:
      'When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element 🎯',
    descriptionHref:
      'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-sibling-state',
    language: 'xml',
    codeSnippet: `
    <div class="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-64">
    <div class="p-4">
      <div class="flex items-center">
          <span class="peer text-gray-500">Answer?</span>
          <span class="peer-hover:bg-green-300 ml-2 p-1">1200</span>
          <span class="peer-hover:bg-red-300 ml-2 p-1">-125</span>
          <span class="peer-hover:bg-red-300 ml-2 p-1">12</span> 
      </div>
    </div>
  </div>
  `,
  },
  {
    index: 16,
    title: 'Rocket-Powered Websites 🚀',
    description:
      "Revolutionize your website's speed with the dynamic rel=preconnect! Wave goodbye to sluggish loading times as these powerful tags team up to establish early connections. Elevate your user experience with a site that's as quick as it is captivating.",
    descriptionHref:
      'https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect',
    language: 'xml',
    codeSnippet: `

<head>
  <!-- ... -->
  <link rel="preconnect" href="https://essential-api.com">
</head>

  `,
  },
  {
    index: 17,
    title: 'Mastering CSS Wizardry with :has 🧙‍♂️',
    description:
      "Discover the enchantment of CSS with :has! 🚀 Elevate your styling prowess and effortlessly target elements based on content. Dive into the magic – it's time to transform your designs! ✨",
    descriptionHref: 'https://css-tricks.com/the-css-has-selector/',
    language: 'css',
    codeSnippet: `
form:has(input:invalid) { 
  /*there an invalid input*/
  background: red; 
}

form:not(:has(input:invalid)) { 
  /*all inputs valid*/
  background: green 
}

  `,
  },
  {
    index: 18,
    title: 'Proxy Prestige ✨',
    description:
      'It unveils the power of Proxies, offering an enchanting way to observe and control object mutations. Watch as your code transforms into a symphony of observation! 🚀',
    descriptionHref:
      'https://melkornemesis.medium.com/javascript-proxy-objects-and-why-you-should-care-with-examples-f9773662e779',
    language: 'javascript',
    codeSnippet: `
const handler = {
  set(target, key, value) {
    // Your custom logic goes here
    target[key] = value;
    return true;
  },
};

const observedObject = new Proxy({}, handler);

  `,
  },
  {
    index: 19,
    title: 'Web Workers🔧',
    description:
      'Web Workers in JavaScript enable concurrent execution of code in the background, enhancing performance by preventing resource-intensive tasks from impacting the main thread and user interface. They operate independently, offering isolation and efficient communication with the main thread via a messaging system. This feature is particularly useful for computationally heavy or network-related tasks, promoting a smoother user experience in web applications 🚀',
    descriptionHref:
      'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers',
    language: 'javascript',
    codeSnippet: `
const worker = new Worker('worker.js');
worker.postMessage('Hello from main thread!');
  `,
  },
  {
    index: 20,
    title: 'Scroll Sorcery ✨',
    description:
      'It brings forth the magic of Intersection Observer, allowing you to conjure responsive actions as elements come into view. Experience the thrill of seamlessly orchestrated scroll events! 🚀',
    descriptionHref:
      'https://blog.webdevsimplified.com/2022-01/intersection-observer/',
    language: 'javascript',
    codeSnippet: `
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('Element is in view!');
    }
  });
});

observer.observe(document.querySelector('.target-element'));
  `,
  },
  {
    index: 21,
    title: 'Empowering Flexibility: Dependency Injection',
    description:
      'By adopting dependency injection, your code gains newfound adaptability, making it a symphony of modular components harmoniously working together. Embrace a paradigm shift towards cleaner, maintainable, and extensible JavaScript applications ! ',
    descriptionHref:
      'https://medium.com/geekculture/dependency-injection-in-javascript-2d2e4ad9df49',
    language: 'javascript',
    codeSnippet: `
//without dependency injection   
class Client { 
  constructor() {
  this.api = new Api();
  }
} 

//with dependency injection
class AwesomeClient { 
  constructor(api) {
  this.api = api;
  }
} 
  `,
  },
  {
    index: 22,
    title: 'Get a little bit of ES14 : toSorted() method 🛹',
    description:
      'The toSorted() method simplifies array sorting in JavaScript, providing a concise and non-destructive way to obtain a new array with elements sorted in ascending order. The original array remains unaltered, providing flexibility in managing mutable and immutable data structures !',
    descriptionHref:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted',
    language: 'javascript',
    codeSnippet: `
const nums = [5, 2, 6, 3, 1, 7, 4];
const sorted = nums.toSorted();

console.log(sorted);  // [1, 2, 3, 4, 5, 6, 7]
console.log(nums);  // [5, 2, 6, 3, 1, 7, 4]
// Array remains unaltered !
  `,
  },
  {
    index: 23,
    title: 'My most precious extension 💎',
    description:
      "Embark on a code-hunting journey like never before! Introducing the Grepper Extension, your trusty sidekick in the vast landscape of programming. Unleash the power of instant code searches, insightful snippets, and community-driven solutions, all within the cozy confines of your favorite editor. With Grepper Gold, your coding adventures are about to reach new heights. Level up, learn more, and conquer code challenges with this must-have extension by your side. Don't just code—Grepp your way to greatness! 🚀💻",
    descriptionHref: 'https://www.grepper.com/',
    language: 'xml',
    codeSnippet: `
  `,
  },
  {
    index: 24,
    title: 'Merry Christmas!🎄',
    description:
      "As we wrap up this year's coding advent calendar, we want to express our heartfelt gratitude for your enthusiastic participation. Your curiosity and dedication have made each day of coding exploration truly special.May this Christmas bring you moments of joy, warmth, and inspiration. Thank you for being part of our coding community.Get ready for an exciting coding journey next year! We can't wait to share more tips, tricks, and surprises in the upcoming calendar.Wishing you a Merry Christmas and a Happy New Year filled with endless possibilities and coding adventures.🎄🚀 -Teva",
    descriptionHref: 'https://www.youtube.com/watch?v=aAkMkVFwAoo',

    language: 'javascript',
    codeSnippet: `
console.log("   *   ");
console.log("  ***  ");
console.log(" ***** ");
console.log("*******");
console.log("  | |  ");
`,
  },
]

export default daysData
