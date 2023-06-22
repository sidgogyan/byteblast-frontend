import React from 'react'
import './Editor.css'
import Drawer from '../components/Drawer/Drawer'
import CodeEditor from '../components/CodeEditor/CodeEditor'

const Editor = () => {
  return (
    <div className='Editor_main'>
        <Drawer/>
        <CodeEditor/>
    </div>
  )
}

export default Editor
