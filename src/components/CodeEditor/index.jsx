import React from 'react'
import ReactCodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { BookmarkIcon } from '@heroicons/react/outline'
import Button from '../../ui/Button'

const CodeEditor = ({ code, onChangeCodeValue, onClickSaveCode }) => {
  return (
    <>
        <p className='text-end text-sm italic my-1 dark:text-gray-400 '>It`s a swetrix code editor and you can edit you extension js file. Good work for you)</p>
        <div className='text-[16px] lg:max-w-[80vw] max-w-[800px] mx-auto relative'>
          <ReactCodeMirror
            value={code}
            theme={dracula}
            height='600px'
            extensions={[javascript({ jsx: true })]}
            onChange={onChangeCodeValue}
            options={{
              mode: 'javascript',
              lineNumbers: true,
              lineWrapping: true,
              history: true,
              extraKeys: {
                'Ctrl-Space': 'autocomplete',
              },
              closeBrackets: true,
              matchBrackets: true,
              autoCloseBrackets: true,
              autoCloseTags: true,
              matchTags: true,
              foldGutter: true,
              gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
              autocompletion: true,
              styleActiveLine: true,
              styleSelectedText: true,
              highlightSelectionMatches: true,
              showCursorWhenSelecting: true,
              showTrailingSpace: true,
              continueComments: true,
              indentUnit: 2,
              tabSize: 2,
              indentWithTabs: false,
              smartIndent: true,
              electricChars: true,
              keyMap: 'sublime',
            }}
          />
            <Button
              className='absolute top-2 right-6 '
              secondary
              regular
              onClick={() => onClickSaveCode()}
            >
                <BookmarkIcon className='w-4 h-4 cursor-pointer'/>
            </Button>
        </div>
    </>
  )
}

export default CodeEditor
