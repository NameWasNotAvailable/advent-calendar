import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/core';
import { registerLanguages } from './CodeHighLighter.utils'; 


const supportedLanguages = ['javascript', 'css', 'xml', 'json', 'bash'];
registerLanguages(supportedLanguages);

const CodeHighlighter = ({ children, language }) => {
  const codeRef = useRef();

  useEffect(() => {
    if (language && supportedLanguages.includes(language)) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [children, language]);

  const trimmedCode = children ? children.trim() : '';

  return (
    <pre>
      <code ref={codeRef} className={`language-${language}`}>
        {trimmedCode}
      </code>
    </pre>
  );
};

export default CodeHighlighter;
