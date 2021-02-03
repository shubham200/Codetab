import React from 'react'
import '../index.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2'

function Editor(props) {
    
    const{
        language,
        displayName,
        value,
        onChange
    }=props
    

    function handleChange(editor, data,value){
        onChange(value)
    }


    return (
        <div className="editor-container">
        <div className="editor-title">
        {displayName}
        <button>O</button>
        
        </div>

        <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="codemirror-wrapper"
        options={{
            lineWrapping:true,
            line:true,
            mode:language,
            lineNumber:true,
            theme:'material'
        }}
        
        
        />
        
        </div>
    )
}

export default Editor
