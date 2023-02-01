import Button from '@mui/material/Button'

const ValidateButton = ({
  disabled,
  onValidate,
}: {
  disabled: boolean
  onValidate: () => void
}) => {
  return (
    <Button
      disabled={disabled}
      variant="contained"
      color={'success'}
      onClick={onValidate}>
      Send
    </Button>
  )
}

export default ValidateButton
