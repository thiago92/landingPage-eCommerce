import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import DialogSearchCep from '../dialog-search-cep/DialogSearchCep';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenuBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Variantes de animação
    const menuVariants = {
        open: { 
            opacity: 1,
            y: 0,
            transition: { 
                type: 'spring',
                stiffness: 300,
                damping: 30
            }
        },
        closed: { 
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2
            } 
        }
    };

    return (
	<nav className='container md:hidden flex items-center justify-between bg-gray-900 w-full py-2 px-4 relative'>
		<DialogSearchCep />

		{/* Botão hambúrguer */}
		<Button
			onClick={() => setMenuOpen(!menuOpen)}
			className='text-white p-2 rounded-md hover:bg-gray-800 transition-colors'
			aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
			{menuOpen ? (
				<X className='w-6 h-6' />
                ) : (
	<Menu className='w-6 h-6' />
                )}
		</Button>

		{/* Menu mobile com animação */}
		<AnimatePresence>
			{menuOpen && (
			<motion.nav
				initial='closed'
				animate='open'
				exit='closed'
				variants={menuVariants}
				className='absolute top-full left-0 w-full bg-gray-800 text-white shadow-lg z-50'
                    >
				<motion.ul 
					className='space-y-1 p-4'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
                        >
					{['Home', 'Loja', 'Serviço', 'Sobre Nós', 'Contato'].map((item) => (
						<motion.li 
							key={item}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className='block py-3 px-4 hover:bg-gray-700 rounded-md transition-colors'
                            >
							{item}
						</motion.li>
                        ))}
					<motion.li
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className='mt-2'
                            >
						<Button 
							variant='default' 
							className='w-full bg-white text-black hover:bg-gray-100'
                                >
							Faça seu login
						</Button>
					</motion.li>
				</motion.ul>
			</motion.nav>
                )}
		</AnimatePresence>
	</nav>
    );
}