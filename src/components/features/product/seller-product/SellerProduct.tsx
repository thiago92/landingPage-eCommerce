import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import image1 from '../../../../../public/assets/images/products/seller-product/product-1.webp';
import image2 from '../../../../../public/assets/images/products/seller-product/product-2.webp';

export default function SellerProduct() {
  // Seus dados de produtos
  const products = [
    {
        id: 1,
        name: 'Produto 1',
        price: 'R$ 100,00',
        image: image1,
    },
    {
        id: 2,
        name: 'Produto 2', 
        price: 'R$ 200,00',
        image: image2,
    },
    {
        id: 1,
        name: 'Produto 1',
        price: 'R$ 100,00',
        image: image1,
    },
    {
        id: 2,
        name: 'Produto 2', 
        price: 'R$ 200,00',
        image: image2,
    },
  ];

    return (
	<div className='w-full border-t-2 border-gray-300 pt-4'>
		<h3 className='text-lg font-semibold mb-4'>
			Produtos do Vendedor
		</h3>
		<Carousel
			opts={{
                align: 'start',
                slidesToScroll: 1, // Move um item por vez
                }}
			className='w-full md:w-[60%] relative'
            >
			<CarouselContent className='-ml-1'>
				{products.map((product) => (
					<CarouselItem 
						key={product.id} 
						className='pl-4 basis-1/2 md:basis-1/2 lg:basis-1/2' // Mostra 2 por vez
                    >
						<div className='p-2'>
							<div className='flex items-center gap-1 p-4 border rounded-lg'>
								<div className='h-20 w-1/2 rounded-md flex items-center justify-center'>
									<img 
										src={product.image} 
										alt={product.name}
										className='h-full object-contain'
                            />
								</div>
								<div>
									<h3 className='font-medium'>{product.name}</h3>
									<p className='text-sm text-gray-600'>{product.price}</p>
									<Button variant='outline' size='sm'>
										Ver detalhes
									</Button>
								</div>
                        
							</div>
						</div>
					</CarouselItem>
                ))}
			</CarouselContent>
                
			{/* Navegação personalizada */}
			<div className='flex gap-2 justify-end mt-4'>
				<CarouselPrevious 
					variant='ghost'
					size='icon'
					className='static translate-y-0'
                >
					<ChevronLeft className='h-4 w-4' />
				</CarouselPrevious>
				<CarouselNext
					variant='ghost' 
					size='icon'
					className='static translate-y-0'
                >
					<ChevronRight className='h-4 w-4' />
				</CarouselNext>
			</div>
		</Carousel>
	</div>
    );
}