import { render, screen, fireEvent } from '@testing-library/react';
import { SearchInput } from '../SearchInput';

// Mock dos ícones do lucide-react
jest.mock('lucide-react', () => ({
    Search: () => <div data-testid="search-icon" />,
    X: () => <div data-testid="clear-icon" />,
}));

describe('SearchInput Component', () => {
    it('deve renderizar corretamente', () => {
        render(<SearchInput />);
        
        // Verifica se os elementos estão presentes
        expect(screen.getByTestId('search-icon')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Buscar...')).toBeInTheDocument();
        expect(screen.queryByTestId('clear-icon')).not.toBeInTheDocument();
    });

    it('deve atualizar o valor quando digitado', () => {
        render(<SearchInput />);
        
        const input = screen.getByPlaceholderText('Buscar...');
        fireEvent.change(input, { target: { value: 'teste' } });
        
        expect(input).toHaveValue('teste');
    });

    it('deve mostrar o botão de limpar quando há texto', () => {
        render(<SearchInput />);
        
        const input = screen.getByPlaceholderText('Buscar...');
        fireEvent.change(input, { target: { value: 'teste' } });
        
        expect(screen.getByTestId('clear-icon')).toBeInTheDocument();
    });

    it('deve limpar o input quando o botão de limpar é clicado', () => {
        render(<SearchInput />);
        
        const input = screen.getByPlaceholderText('Buscar...');
        fireEvent.change(input, { target: { value: 'teste' } });
        
        const clearButton = screen.getByTestId('clear-icon');
        fireEvent.click(clearButton);
        
        expect(input).toHaveValue('');
        expect(screen.queryByTestId('clear-icon')).not.toBeInTheDocument();
    });

    it('deve manter o foco no input após limpar', () => {
    render(<SearchInput />);
    
    const input = screen.getByPlaceholderText('Buscar...');
    
    // Primeiro focamos no input manualmente
    input.focus();
    expect(input).toHaveFocus();
    
    // Digita algo e verifica o botão de limpar
    fireEvent.change(input, { target: { value: 'teste' } });
    const clearButton = screen.getByTestId('clear-icon');
    
    // Clica no botão de limpar
    fireEvent.click(clearButton);
    
    // Verifica se o input ainda tem foco
    expect(input).toHaveFocus();
    });
});