import { Dispatch, SetStateAction } from 'react'
import { Plate, TElement, TEditableProps } from '@udecode/plate'
import plugins from './plugins'
import Toolbar from './components/Toolbar/Toolbar'

interface Props {
  value: TElement[]
  setValue?: Dispatch<SetStateAction<TElement[]>>
  disabled?: boolean
  readOnly?: boolean
}

function Editor({ value, setValue, disabled, readOnly }: Props) {
  const editableProps: TEditableProps = {
    ...(!readOnly && {
      placeholder: 'Content...'
    }),
    readOnly: disabled || readOnly
  }

  return (
    <div>
      <Plate
        firstChildren={readOnly ? null : <Toolbar />}
        plugins={plugins}
        value={value}
        onChange={setValue}
        editableProps={editableProps}
      />
    </div>
  )
}

export default Editor
