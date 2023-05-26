import { Dispatch, SetStateAction } from 'react'
import { Plate, TElement, TEditableProps } from '@udecode/plate'
import { basicElementsValue, basicMarksValue } from './testData'
import plugins from './plugins'
import Toolbar from './components/Toolbar/Toolbar'

interface Props {
  value: TElement[]
  setValue: Dispatch<SetStateAction<TElement[]>>
  disabled?: boolean
}

function Editor({ value, setValue, disabled }: Props) {
  const editableProps: TEditableProps = {
    placeholder: 'Content...',
    readOnly: disabled
  }

  return (
    <div>
      <Plate
        firstChildren={<Toolbar />}
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