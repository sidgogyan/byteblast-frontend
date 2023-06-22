import React from 'react'
import "./CodeEditor.css"

import MonacoEditor from 'react-monaco-editor';
import Editor from '@monaco-editor/react';
import EditorSetting from '../EditorSetting/EditorSetting';






const CodeEditor = () => {
  return (
    <div className='CodeEditor_wrapper'>


<Editor  className='monoco' language="java" value="console.log('Hello, World!');" theme='vs-dark' />
      
     
    {/* <EditorSetting/> */}
    </div>
  )
}

export default CodeEditor
