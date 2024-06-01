import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>('');

  return (
    <div>
      <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
        <Editor
          height="85vh"
          width='150%'
          defaultLanguage="python"
          value={code}
          defaultValue="// enter Python code here"
          onChange={(value) => setCode(value || '')}
        />
      </div>
      <div className="mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 mr-2">
          Test Code
        </button>
        <button className="bg-green-500 text-white py-2 px-4 mr-2">
          Submit Code
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;
