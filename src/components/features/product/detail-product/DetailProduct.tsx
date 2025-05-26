import { Button } from '@/components/ui/button';
import estrela from '../../../../../public/assets/images/estrela.png';
import retorno from '../../../../../public/assets/images/retorno.png';
import compraSegura from '../../../../../public/assets/images/compra-segura.png';

export default function DetailProduct() {
    return (
	<div className='flex items-center justify-center w-full'>
		<div className='container flex flex-col md:flex-row items-start justify-between'>
			<div className='w-full md:w-[47.5%] bg-white flex flex-col items-start justify-center pt-4'>
				<span className='text-gray-500 text-[14px]'>Novo | +1000 vendidos</span>
				<div className='flex items-center justify-start gap-2 text-[12px] my-4'>
					<span className='bg-gray-800 text-white font-[600] p-1 rounded-sm'>MAIS VENDIDOS</span> <span>8º em Placas de Rede TP-LINK</span>
				</div>
				<h1 className='text-[24px] font-[700]'>Usb Red TP-Link Archer T4u Plus Ac1300 de banda dupla Mexx 1</h1>
				<div className='flex items-center justify-start gap-2 mt-2'>
					<span>4.8</span>
					<div className='flex items-center justify-start gap-1'>
						{[estrela, estrela, estrela, estrela, estrela].map((item, index) => (
							<img key={index} src={item} alt='estrela' className='w-[20px] h-[20px] object-cover' />
                            ))}
					</div>
					<span>(169)</span>
				</div>
				<div>
					<span className='text-[32px] font-[400]'>R$183,90</span>
					<span className='text-[16px] font-[600]'> em 12x R$18,11</span>
				</div>
				<div>
					<span className='text-blue-900 font-[600] text-[16px]'>Ver meios de pagamentos</span>
				</div>
				<div className='mt-2 flex flex-col items-start justify-start gap-2'>
					<span className='text-[14px] font-[600]'>O que você precisa saber sobre este Produto</span>
					<ul className='flex flex-col items-start justify-start gap-2 ml-2'>
						<li className='text-[12px] font-[400]'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta fugit nobis unde sequi iure omnis?
						</li>
						<li className='text-[12px] font-[400]'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta fugit nobis unde sequi iure omnis?
						</li>
						<li className='text-[12px] font-[400]'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta fugit nobis unde sequi iure omnis?
						</li>
					</ul>
				</div>
				<div className='mt-4'>
					<a href='#' className='text-blue-900 font-[600] text-[16px]'>Ver Caracteristicas do produto</a>
				</div>
				<div className='mt-4 flex flex-col items-start justify-start'>
					<span>Opção de compra:</span>
					<span className='text-blue-900 font-[600] text-[16px]'>21 produtos novos a partir de R$180</span>
				</div>
			</div>
			<div className='w-full md:w-[47.5%] border-2 border-gray-200 rounded-sm p-4 bg-[#f8f8f8] flex flex-col gap-2'>
				<p className='text-[16px]'>
					<span className='text-green-700 font-[700]'>Chegará grátis</span> entre terça-feira e quarta-feira
				</p>
				<span className='text-blue-900 font-[600] text-[12px]'>Mais informações sobre a entrega</span>
				<p className='text-[16px] mt-2'>
					<span className='text-green-700 font-[700]'>Retire grátis</span> entre terça-feira e quarta-feira em uma agência Mercado Livre
				</p>
				<span className='text-blue-900 font-[600] text-[12px]'>Ver no mapa</span>
				<p className='text-[16px] font-[700] mt-2'>
					Estoque Disponível
				</p>
				<Button className='mt-6 bg-gray-800 text-white w-full h-[50px] rounded-sm hover:bg-gray-900 transition-all cursor-pointer'>
					Comprar agora
				</Button>
				<Button className='mt-2 bg-gray-200 text-black w-full h-[50px] rounded-sm hover:bg-gray-300 transition-all cursor-pointer'>
					Adicionar ao carrinho
				</Button>
				<p className='text-[16px] mt-6'>Vendidos por <span className='text-blue-900'>EXPRESENT</span></p>
				<p className='text-[16px] font-[600]'>+ 10 mil vendidos</p>
				<div className='flex items-start justify-start gap-2 mt-4'>
					<img src={compraSegura} alt='Compra Segura' className='w-[20px] h-[20px] object-cover' />
					<span className='text-[12px] font-[400]'>Compra segura com Mercado Pago. receba o produto que está esperando ou devolvemos o dinheiro.</span>
				</div>
				<div className='flex items-start justify-start gap-2 mt-4'>
					<img src={retorno} alt='Retorno' className='w-[20px] h-[20px] object-cover' />
					<span className='text-[12px] font-[400]'>Devolução grátis. Você tem 30 dias a partir do recebimento</span>
				</div>
			</div>
		</div>
	</div>
    );
}