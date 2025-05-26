import { useState } from 'react';
import DetailProduct from './detail-product/DetailProduct';
import ImageProduct from './image-product/ImageProduct';
import imageGaleria1 from '../../../../public/assets/images/products/antena/antena-wifi-galera-1.webp';
import SellerProduct from './seller-product/SellerProduct';
import { FeaturesProducts } from './features-products/FeaturesProducts';

export default function Product() {
    const [isHovered, setIsHovered] = useState(false);
    const [zoomPosition, setZoomPosition] = useState('50% 50%');
    const [currentImage, setCurrentImage] = useState(imageGaleria1);

    return (
	<section className='flex items-center justify-center w-full'>
		<div className='container flex flex-col items-center justify-center bg-white px-4 py-8 my-12 rounded-sm shadow-lg relative'>
			<div className='flex flex-col md:flex-row items-center justify-center relative gap-4'>
				<ImageProduct 
					onHoverChange={setIsHovered}
					onPositionChange={setZoomPosition}
					onImageChange={setCurrentImage} // Adicione esta linha
                />
                
				{/* Container normal do DetailProduct */}
				<div className={`w-full md:w-[60%] transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
					<DetailProduct />
				</div>
                    
				{/* Zoom que aparece durante o hover */}
				{isHovered && (
				<div className='hidden md:block absolute top-0 left-[40%] w-[60%] h-full z-10 bg-white p-4'>
					<div 
						className='w-full h-full bg-contain bg-no-repeat bg-center pt-4 border'
						style={{
                                    backgroundImage: `url(${currentImage})`,
                                    backgroundPosition: zoomPosition,
                                    backgroundSize: '175%'
                                }}
                            />
				</div>
                    )}
			</div>
			<div className='py-4 flex flex-col items-center justify-between w-full'>
				<SellerProduct />
				<FeaturesProducts />
			</div>
		</div>
	</section>
    );
}