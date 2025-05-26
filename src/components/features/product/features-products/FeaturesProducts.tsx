import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@/components/ui/table';

export function FeaturesProducts() {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    // Dados para a primeira tabela (sempre visível)
    const mainFeatures = [
        { label: 'Marca', value: 'TP-Link' },
        { label: 'Linha', value: 'Archer' },
        { label: 'Modelo', value: 'T4U Plus' }
    ];

    // Dados para a segunda tabela (com expansão)
    const allFeatures = [
        { label: 'Tecnologia de conectividade', value: 'WLAN' },
        { label: 'Interface', value: 'USB' },
        { label: 'Sistemas operativos compatíveis', value: 'Windows 7, Windows 8, Windows 10, Windows 11' },
        { label: 'Tipo de antena', value: 'Omnidirecional' },
        { 
        label: 'Standards', 
        value: (
	<ul className='list-disc pl-5'>
		<li>IEEE 802.11a/n/ac 5 GHz</li>
		<li>IEEE 802.11b/g/n 2.4 GHz</li>
	</ul>
        ) 
        },
        { label: 'Taxa de transferência de dados', value: '1,3 GB/s' },
        { label: 'Botão', value: 'WPS' },
        { label: 'Segurança sem fio', value: 'WEP, WPA/WPA2, WPA-PSK/WPA2-PSK' },
        { label: 'Modos sem fio', value: 'Modo de infraestrutura' },
        { label: 'Tipos de freqüências', value: '2.4 GHz - 5 GHz' },
        { label: 'Dimensões', value: '1.92 cm x 8.4 cm x 15.63 cm' },
        { label: 'Com indicador LED', value: 'Sim' }
    ];

    // Linhas visíveis na segunda tabela
    //const visibleFeatures = showAll ? allFeatures : allFeatures.slice(0, 5)

    return (
	<div className='w-full border-t-2 border-gray-300 pt-4 flex flex-col md:flex-row items-start justify-between gap-8'>
		{/* Tabela 1 - Sempre visível */}
		<div className='w-full md:w-[47.5%]'>
			<h3 className='text-lg font-semibold mb-4'>Características Principais</h3>
			<Table className='border'>
				<TableBody>
					{mainFeatures.map((row, index) => (
						<TableRow key={`main-${index}`}>
							<TableCell className='font-medium w-[200px] bg-gray-50'>{row.label}</TableCell>
							<TableCell>{row.value}</TableCell>
						</TableRow>
                    ))}
				</TableBody>
			</Table>
		</div>

		{/* Tabela 2 - Com expansão */}
		<div className='w-full md:w-[47.5%]'>
			<h3 className='text-lg font-semibold mb-4'>Outras Especificações</h3>
                
			{/* Container com animação */}
			<div className={`grid transition-all duration-500 ease-in-out ${showAll ? 'grid-rows-[1fr]' : 'grid-rows-[0.8fr]'}`}>
				<div className='overflow-hidden'>
					<Table className='border'>
						<TableBody>
							{allFeatures.map((row, index) => (
								<TableRow 
									key={`all-${index}`} 
									className={!showAll && index >= 5 ? 'hidden' : ''}
                            >
									<TableCell className='font-medium w-[200px] bg-gray-50'>{row.label}</TableCell>
									<TableCell>{row.value}</TableCell>
								</TableRow>
                            ))}
						</TableBody>
					</Table>
				</div>
			</div>

			{/* Overlay gradiente quando recolhido */}
			{!showAll && (
			<div className='relative'>
				<div className='absolute -top-12 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none' />
			</div>
                )}

			{/* Botão de controle */}
			<div className='flex justify-center mt-2'>
				<Button 
					variant='ghost' 
					className='text-blue-600 hover:text-blue-800 flex items-center gap-1'
					onClick={toggleShowAll}
                    >
					{showAll ? (
						<>
							<ChevronUp className='h-4 w-4' />
							Ver menos
						</>
                        ) : (
	<>
		<ChevronDown className='h-4 w-4' />
		Ver mais
	</>
                        )}
				</Button>
			</div>
		</div>
	</div>
    );
}