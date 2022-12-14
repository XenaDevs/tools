type props = {
  disabled?: boolean
  onClick: () => void
  text: string
}

export const Button = ({disabled, onClick, text}: props) => {
  return (
    <button
    className={'bg-CTA text-Black p-2 rounded-md hover:bg-opacity-90 disabled:hover:cursor-not-allowed'}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
  )
}
