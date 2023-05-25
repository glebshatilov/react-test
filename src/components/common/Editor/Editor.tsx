import { useState, Dispatch, SetStateAction } from 'react'
import { Plate, TElement, TEditableProps } from '@udecode/plate'
import { basicElementsValue, basicMarksValue } from './testData'
import plugins from './plugins'
import Toolbar from './components/Toolbar/Toolbar'
import TestToolbarButtons from './components/Toolbar/TestToolbarButtons'
import BasicMarkToolbarButtons from './components/Toolbar/BasicMarkToolbarButtons'

interface Props {
  value: TElement[]
  setValue: Dispatch<SetStateAction<TElement[]>>
}

const editableProps: TEditableProps = {
  placeholder: 'Haha...'
}

function Editor({ value, setValue }: Props) {
  const ToolbarElement = (
    <Toolbar>
      <BasicMarkToolbarButtons />
    </Toolbar>
  )

  return (
    <div>
      <Plate
        firstChildren={ToolbarElement}
        initialValue={[...basicElementsValue, ...basicMarksValue]}
        plugins={plugins}
        value={value}
        onChange={setValue}
        editableProps={editableProps}
      />
    </div>
  )
}

export default Editor
