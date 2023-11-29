const daysData = [

  { index:1,
    title : 'Semantic HTML',
  description : 'Make your website a storyteller! Use semantic HTML tags to express your content clearly to both users and search engines. Its like giving your website a friendly voice that everyone can understand! 📖🌐',
  language : 'xml',
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
  {index:2,
    title : 'CSS Grid',
    description : 'Designing layouts made easy! CSS Grid is like having a magical blueprint for creating stunning structures on your website. 🏰✨',
    language : 'css',
    codeSnippet: `

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
`,
  },
  { index:3,
    title: 'Arrow Functions',
    description : 'Say goodbye to the long-winded! Arrow functions in JavaScript are like short and sweet conversations with your code. ➡️🗨️',
    language : 'javascript',
    codeSnippet: `
    const add = (a, b) => a + b;
  `,
  },
  { index:4,
    title : 'Svelte Components',
    description : 'Craft interactive and reactive UIs with Svelte components—your creative pals for building a fantastic user experience. 🎨🚀',
    language : 'javascript',
    codeSnippet: `
<script>
    let count = 0;
    $: doubled = count * 2;
</script>
  
  <button on:click={() => count += 1}>
    Click me: {count}
  </button>
  
  <p>{count} doubled is {doubled}</p>

  `,
  },
  { index:5,
    title : 'Environment Variables',
    description : 'Keep your secrets safe with environment variables! Its like having a secret handshake for sensitive information. 🤫🔐',
    language : 'javascript',
    codeSnippet: `
    const API_KEY = process.env.API_KEY;

  `,
  },
  { index:6,
    title : 'Meta Tags for SEO',
    description : 'Help your website make a grand entrance on the internet stage! Add meta tags that describe it well—like providing the perfect introduction for a good friend. 🌟🚀',
    language : 'xml',
    codeSnippet: `

    <meta name="description" content="Your page description">
  `,
  },
  { index:7,
    title : 'npm Scripts',
    description : 'Manage your project tasks with ease! npm scripts are like the conductors orchestrating the symphony of your code. 🎶💻',
    language : 'json',
    codeSnippet: `
  {
  "scripts": {
    "start": "node server.js",
    "build": "webpack --mode production",
    "test": "jest"
  }
}
  `,
  },
  { index:8,
    title : 'Array Methods (e.g., Map)',
    description : 'Let your arrays dance with joy! Use array methods for efficient and readable code—like having a party in your codebase. 🕺🎉',
    language : 'javascript',
    codeSnippet: `
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
  `,
  },
  { index:9,
    title : 'Express Middleware',
    description : 'Enhance your Express app with middleware! Its like having trusty sidekicks ensuring everything runs smoothly. 🦸‍♂️🚀',
    language : 'javascript',
    codeSnippet: `
const express = require('express');
const app = express();
    
app.use(express.json());
    
  `,
  },
  { index:10,
    title : 'Svelte Transitions',
    description : 'Add a touch of magic to your UI! Svelte transitions are like enchantments that make your elements come to life. ✨🎭',
    language : 'javascript',
    codeSnippet: `
    <script>
    let visible = true;
  </script>
  
  {#if visible}
    <div transition:fade>
      This element fades in and out
    </div>
  {/if}


  `,
  },
  { index:11,
    title : 'Aria Roles',
    description : 'Improve accessibility by assigning roles to your elements. Its like giving each element a backstage pass to the webs inclusivity party! 🎉🌐',
    language : 'xml',
    codeSnippet: `
    <button aria-label="Close" role="button">
    X
    </button>

  `,
  },
  { index:12,
    title : '',
    description : '',
    language : 'xml',
    codeSnippet: `

  `,
  },
  { index:13,
    title : 'Accessible Forms',
    description : 'Design forms that are accessible and usable for all users. Its like inviting everyone to the party, regardless of their abilities! 📝',
    language : 'xml',
    codeSnippet: `
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
  `,
  },
  { index:14,
    title : 'CSS Variables',
    description : 'Introduce variables to your CSS for easy theming. Its like changing the mood of your website with a simple switch! 🌈🎨',
    language : 'css',
    codeSnippet: `
    :root {
      --primary-color: #3498db;
      --secondary-color: #2ecc71;
    }
    
    body {
      background-color: var(--primary-color);
      color: var(--secondary-color);
    }
    
  
//JS: 


  `,
  },
  { index:15,
    title : 'Cybersecurity Best Practices',
    description : 'Ensure your websites security with best practices. Its like putting on a superhero cape to protect your digital realm! 🦸‍♂️🔒',
    language : 'xml',
    codeSnippet: `
    <!-- Use HTTPS to encrypt data in transit -->
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
  `,
  },
  { index:16,
    title : 'CSS Transitions',
    description : 'Add delightful transitions to your elements. Its like giving your website a smooth choreography that captivates your users! 🕺💫',
    language : 'css',
    codeSnippet: `
    .element {
      transition: background-color 0.3s ease-in-out;
    }
    
    .element:hover {
      background-color: #f0f0f0;
    }
  `,
  },
  { index:17,
    title : '',
    description : '',
    language : 'xml',
    codeSnippet: `


  `,
  },
  { index:18,
    title : '',
    description : '',
    language : 'xml',
    codeSnippet: `

  `,
  },
  { index:19,
    title : '',
    description : '',
    language : 'xml',
    codeSnippet: `

  `,
  },
  { index:20,
    title : '',
    description : '',
    language : 'xml',
    codeSnippet: `

  `,
  },
  { index:21,
    title : '',
    description : '',
    language : 'xml',
    codeSnippet: `

  `,
  },
  { index:22,
    title : '',
    description : '',
    language : 'xml',
    codeSnippet: `

  `,
  },
  { index:23,
    title : '',
    description : '',
    language : 'xml',
    codeSnippet: `



  `,
  },
  { index:24,
    title : 'Merry Christmas !',
    description : 'Wrap up your coding adventure with a festive spirit! Thanks for joining this calendar, and be ready for the next version! 🎄🚀',
    language : 'xml',
    codeSnippet: `

  `,
  },
]

export default daysData

