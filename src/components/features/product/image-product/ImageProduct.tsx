import { useState } from 'react';
import imageGaleria1 from '../../../../../public/assets/images/products/antena/antena-wifi-galera-1.webp';
import imageGaleria2 from '../../../../../public/assets/images/products/antena/antena-wifi-galera-2.webp';
import imageGaleria3 from '../../../../../public/assets/images/products/antena/antena-wifi-galera-3.webp';
import imageGaleria4 from '../../../../../public/assets/images/products/antena/antena-wifi-galera-4.webp';
import imageGaleria5 from '../../../../../public/assets/images/products/antena/antena-wifi-galera-5.webp';
import ZoomImage from './zoom-image/ZoomImage';

interface ImageProductProps {
    onHoverChange?: (isHovered: boolean) => void;
    onPositionChange?: (position: string) => void;
    onImageChange?: (image: string) => void; // Nova prop
}

export default function ImageProduct({ onHoverChange, onPositionChange, onImageChange }: ImageProductProps) {
    const [mainImage, setMainImage] = useState(imageGaleria1);
    const [selectedThumbnail, setSelectedThumbnail] = useState(0);

    const thumbnails = [imageGaleria1, imageGaleria2, imageGaleria3, imageGaleria4, imageGaleria5];

    const handleThumbnailClick = (image: string, index: number) => {
        setMainImage(image);
        setSelectedThumbnail(index);
        onImageChange && onImageChange(image); // Notifica o componente pai
    };

    return (
	<div className='flex flex-col items-center justify-center w-full md:w-[35%]'>
		<div className='w-full flex items-center justify-center'>
			<ZoomImage 
				src={mainImage} 
				alt='Produto em destaque' 
				onHoverChange={onHoverChange}
				onPositionChange={onPositionChange}
                />
		</div>
		<div className='w-full flex items-center justify-between mt-4'>
			{thumbnails.map((image, index) => (
				<div 
					key={index} 
					className={`flex items-center justify-center mt-2 p-1 border-2 hover:border-blue-800 cursor-pointer rounded-sm ${
                            selectedThumbnail === index ? 'border-blue-800' : 'border-white'
                        }`}
					onClick={() => handleThumbnailClick(image, index)}
                    >
					<img src={image} alt={`Imagem ${index + 1}`} className='w-[80px] h-[80px] object-cover rounded-sm' />
				</div>
                ))}
		</div>
	</div>
    );
}