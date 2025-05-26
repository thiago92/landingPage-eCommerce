import { render, screen, fireEvent } from '@testing-library/react';
import MobileMenuBar from '../MobileMenuBar';

// Mock dos componentes
jest.mock('@/components/features/header/dialog-search-cep/DialogSearchCep', () => () => (
    <div data-testid="dialog-search-cep" />
));

jest.mock('lucide-react', () => ({
    Menu: () => <div data-testid="menu-icon" />,
    X: () => <div data-testid="close-icon" />,
}));

// Mock melhorado do framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        nav: ({ children, ...props }: any) => (
        <nav {...props} data-testid="mobile-menu">
            {children}
        </nav>
        ),
        ul: ({ children }: any) => <ul>{children}</ul>,
        li: ({ children }: any) => <li>{children}</li>,
        div: ({ children }: any) => <div>{children}</div>,
    },
    AnimatePresence: ({ children }: any) => (
        <div data-testid="animate-presence">{children}</div>
    ),
}));

describe('MobileMenuBar Component', () => {
    it('deve abrir e fechar o menu mobile', async () => {
        render(<MobileMenuBar />);
        
        // Menu não deve estar visível inicialmente
        expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
        
        // Clica para abrir o menu
        fireEvent.click(screen.getByRole('button', { name: /abrir menu/i }));
        
        // Menu deve estar visível agora
        const menu = await screen.findByTestId('mobile-menu');
        expect(menu).toBeInTheDocument();
        
        // Verifica itens do menu
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Loja')).toBeInTheDocument();
        expect(screen.getByText('Serviço')).toBeInTheDocument();
        expect(screen.getByText('Sobre Nós')).toBeInTheDocument();
        expect(screen.getByText('Contato')).toBeInTheDocument();
        expect(screen.getByText('Faça seu login')).toBeInTheDocument();
        
        // Clica para fechar o menu
        fireEvent.click(screen.getByRole('button', { name: /fechar menu/i }));
        
        // Menu não deve mais estar visível
        expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
    });
});