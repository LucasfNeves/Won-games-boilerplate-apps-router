import { render, screen } from '@testing-library/react'
import { Main } from '.'

describe('<Main />', () => {
  it('should render heading', () => {
    // Renderiza o componente
    render(<Main />)
    // Verifica se o heading "Main" está presente no documento
    expect(screen.getByRole('heading', { name: /main/i })).toBeInTheDocument()
  })
})
