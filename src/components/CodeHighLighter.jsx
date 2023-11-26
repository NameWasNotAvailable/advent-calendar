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

  // Assurez-vous que children est défini avant d'appeler trim()
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
