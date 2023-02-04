import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  padding: '$4',
})

export function App() {
  return (
    <div>
      <h1> Hello World!</h1>
      <Button> styled button!</Button>
    </div>
  )
}
