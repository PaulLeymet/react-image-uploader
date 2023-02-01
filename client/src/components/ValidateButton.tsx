import {Button} from '@mui/material'

const ValidateButton = ({onValidate}: {onValidate: () => void}) => {
  return <Button onClick={onValidate}>Send</Button>
}

export default ValidateButton
