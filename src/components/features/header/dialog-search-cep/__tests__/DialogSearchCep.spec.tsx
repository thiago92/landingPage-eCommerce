import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DialogSearchCep from '../DialogSearchCep';
import { useViaCEP } from '@/hooks/useViaCEP';

// Mock do hook useViaCEP
jest.mock('@/hooks/useViaCEP');

const mockUseViaCEP = useViaCEP as jest.MockedFunction<typeof useViaCEP>;

// Configuração para lidar com dialogs
beforeAll(() => {
    // Mock do dialog portal se necessário
    HTMLDialogElement.prototype.showModal = jest.fn();
    HTMLDialogElement.prototype.close = jest.fn();
});

describe('DialogSearchCep Component - Testes Básicos', () => {
    beforeEach(() => {
        mockUseViaCEP.mockReturnValue({
        data: null,
        loading: false,
        error: null,
        fetchCEP: jest.fn(),
        });
    });

    it('deve renderizar o botão de acionamento', () => {
        render(<DialogSearchCep />);
        expect(screen.getByText(/Pesquise aqui seu endereço pelo CEP/i)).toBeInTheDocument();
    });

    it('deve abrir o dialog quando o botão é clicado', async () => {
        render(<DialogSearchCep />);
        
        // Clique no botão para abrir o dialog
        fireEvent.click(screen.getByText(/Pesquise aqui/i));
        
        // Verifique se o título do dialog está visível
        await waitFor(() => {
        expect(screen.getByText(/Calcular Frete/i)).toBeInTheDocument();
        });
    });

    it('deve formatar corretamente o input de CEP', async () => {
        render(<DialogSearchCep />);
        fireEvent.click(screen.getByText(/Pesquise aqui/i));
        
        // Encontre o input e simule a digitação
        const input = await screen.findByPlaceholderText('00000-000');
        fireEvent.change(input, { target: { value: '12345678' } });
        
        // Verifique se a formatação foi aplicada
        expect(input).toHaveValue('12345-678');
    });

    it('não deve submeter com CEP inválido', async () => {
        const mockFetchCEP = jest.fn();
        mockUseViaCEP.mockReturnValue({
        data: null,
        loading: false,
        error: null,
        fetchCEP: mockFetchCEP,
        });

        render(<DialogSearchCep />);
        fireEvent.click(screen.getByText(/Pesquise aqui/i));
        
        const input = await screen.findByPlaceholderText('00000-000');
        const button = screen.getByText('Buscar');
        
        // Digite um CEP incompleto
        fireEvent.change(input, { target: { value: '12345' } });
        fireEvent.click(button);
        
        // Verifique se a função não foi chamada
        expect(mockFetchCEP).not.toHaveBeenCalled();
    });

    it('deve mostrar mensagem de erro quando houver', async () => {
        mockUseViaCEP.mockReturnValue({
        data: null,
        loading: false,
        error: 'CEP não encontrado',
        fetchCEP: jest.fn(),
        });

        render(<DialogSearchCep />);
        fireEvent.click(screen.getByText(/Pesquise aqui/i));
        
        // Verifique se a mensagem de erro aparece
        expect(await screen.findByText(/CEP não encontrado/i)).toBeInTheDocument();
    });
});