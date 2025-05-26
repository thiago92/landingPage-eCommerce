import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header'; // Ajuste o caminho

jest.mock('../../../../public/assets/images/logo.png', () => 'logo-mock');
jest.mock('../../../../public/assets/images/carrinho.png', () => 'carrinho-mock');

describe('Header Component', () => {
    it('should render without errors', () => {
        render(<Header />);
        expect(screen.getByAltText('logo')).toBeInTheDocument();
    });
});