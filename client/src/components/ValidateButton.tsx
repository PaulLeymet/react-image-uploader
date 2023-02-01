import {Button} from '@mui/material'

const ValidateButton = ({onValidate}: {onValidate: () => void}) => {
  return <Button onClick={onValidate}>Validate</Button>
}

export default ValidateButton
