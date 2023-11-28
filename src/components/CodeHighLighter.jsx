import React, { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';


hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);


const CodeHighlighter = ({ children, language }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, [children, language]);

  const trimmedCode = children ? children.trim() : '';

  return (
    <pre>
      <code className={`language-${language}`}>
        {trimmedCode}
      </code>
    </pre>
  );
};

export default CodeHighlighter;
