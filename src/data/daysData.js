const daysData = [

  {
    codeSnippet: `
/*CSS: flex container w/ centered items */
.container {
display: flex;
justify-content: center;
align-items: center;
}

//JS: Spread Operator
const dkt1 = [1, 2, 3];
const dkt2 = [...arr1, 4, 5];
console.log(arr2);
`,
  },
  {
    codeSnippet: `
/*CSS: Variables to define values*/
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
  }
body {
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }

//JS: Check if an array contains an element
const array = [1, 2, 3, 4, 5];
const element = 3;
const isInArray = array.includes(element);
console.log(isInArray); // true

`,
  },
  {
    codeSnippet: `
/*CSS: Add smooth transitions */
.element {
transition: background-color 0.3s ease-in-out;
}
.element:hover {
background-color: #f0f0f0;
}

//JS: Merge objects with the spread operator
const defaults = { theme: 'light', fontSize: 16 };
const userSettings = { fontSize: 18 };
const mergedSettings = { ...defaults, ...userSettings };

  `,
  },
  {
    codeSnippet: `
/*CSS: Grid Layout */
.grid-container {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 10px;
}


//JS: Get Current Date in MM/DD/YYYY Format:
const currentDate = new Date().toLocaleDateString();
console.log(currentDate);

  `,
  },
  {
    codeSnippet: `
/*CSS: Create a Sticky Navabar*/
nav {
    position: sticky;
    top: 0;
    background-color: #333;
    z-index: 100;
    }

//JS: Fetch JSON Data from an API
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

  `,
  },
  {
    codeSnippet: `
/*CSS: Center position absolute element*/
.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }


//JS: Use localStorage for simple client-side data storage
localStorage.setItem('username', 'john_doe');
  `,
  },
  {
    codeSnippet: `
/*CSS: Gradient Background*/
body {
    background: linear-gradient(to right, #ff7e5f, #feb47b);
  }
    
  
//JS: Use map and filter for efficient array manipulation
const doubledNumbers = numbers.map(num => num * 2);
const evenNumbers = numbers.filter(num => num % 2 === 0);

  `,
  },
  {
    codeSnippet: `
/*CSS:Hover Effect with Scale */
.scale-on-hover {
    transition: transform 0.3s ease-in-out;
  }
  
  .scale-on-hover:hover {
    transform: scale(1.1);
  }
    
  
//JS: 


  `,
  },
  {
    codeSnippet: `
/*CSS:Creating a Triangle: */
.triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #3498db;
  }
    
  
//JS: 


  `,
  },
  {
    codeSnippet: `
/*CSS:Animating Background Gradient: */
.animated-gradient {
    background: linear-gradient(45deg, #ff7e5f,
      #feb47b, #ff7e5f, #feb47b);
    background-size: 400% 400%;
    animation: gradientAnimation 15s infinite;
  }
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
//JS: 


  `,
  },
  {
    codeSnippet: `
/*CSS: Animating Buttons with Keyframes:*/
.animated-button {
    animation: bounce 1s infinite;
  } 
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
40% {
      transform: translateY(-20px);
    }
60% {
      transform: translateY(-10px);
    }
  }  
  
//JS: 


  `,
  },
  {
    codeSnippet: `
/*CSS: Creating a Flip Card:*/
.flip-card {
    perspective: 1000px;
  }
  
.flip-card-inner {
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }
  
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
 
//JS: 


  `,
  },
  {
    codeSnippet: `
/*CSS: Gradient Text Effect:*/
.gradient-text {
    background: linear-gradient(45deg,
       #ff7e5f, #feb47b);
    -webkit-background-clip: text;
    color: transparent;
  }
    
  
//JS: 


  `,
  },
  {
    codeSnippet: `
/*CSS: Creating a Progress Bar*/
.progress-bar {
    width: 100%;
    height: 20px;
    background-color: #f1f1f1;
    border-radius: 10px;
    overflow: hidden;
  }
  
.progress-bar-inner {
    height: 100%;
    width: 50%;
    background-color: #3498db;
  }
    
  
//JS: 


  `,
  },
  {
    codeSnippet: `
/*CSS: Using :not Selector:*/
/* Select all divs that are not of class "exclude" */
div:not(.exclude) {
  color: #3498db;
}


    
  
//JS: 


  `,
  },
  {
    codeSnippet: `
/*CSS: */


//JS: 


  `,
  },
  {
    codeSnippet: `
/*CSS: Creating a Card with Shadow and Hover Effect:*/
.card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
  }
  
  .card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
    
  
//JS: 


  `,
  },
  {
    codeSnippet: `
/*CSS:Creating a Responsive Flip Card */
.flip-card {
    perspective: 1000px;
  }
  
  .flip-card-inner {
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }
  
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
 
//JS: Toggle Dark Mode
const body = document.body;
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});



  `,
  },
  {
    codeSnippet: `
/*CSS: Creating a Circular Loader */
.loader {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
    
  
//JS: Toggle Password Visibility:
const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('togglePassword');

toggleButton.addEventListener('click', () => {
  passwordInput.type = passwordInput.type === 
  'password' ? 
  'text' 
  : 'password';
});


  `,
  },
  {
    codeSnippet: `
/*CSS:Effet de bascule en 3D  */
.flip-card-3d {
    transform-style: preserve-3d;
    transition: transform 0.5s;
  }
  
  .flip-card-3d:hover {
    transform: rotateY(180deg);
  }
    
  
//JS: 


  `,
  },
  {
    codeSnippet: `
/*CSS: */

    
  
//JS: 


  `,
  },
  {
    codeSnippet: `
/*CSS: */

    
  
//JS: 


  `,
  },
  {
    codeSnippet: `
/*CSS: */

    
  
//JS: 


  `,
  },
  {
    codeSnippet: `
/*CSS: */

    
  
//JS: 


  `,
  },
]

export default daysData

