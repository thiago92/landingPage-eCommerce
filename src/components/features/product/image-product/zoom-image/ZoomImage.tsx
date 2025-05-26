import { useState, type MouseEvent } from 'react';

interface ZoomImageProps {
  src: string;
  alt: string;
  onHoverChange?: (isHovered: boolean) => void;
  onPositionChange?: (position: string) => void;
}

export default function ZoomImage({ src, alt, onHoverChange, onPositionChange }: ZoomImageProps) {
    const [backgroundPos, setBackgroundPos] = useState('50% 50%');

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        const position = `${x}% ${y}%`;
        setBackgroundPos(position);
        onPositionChange && onPositionChange(position);
    };

    return (
	<div 
		className='w-full h-64 md:h-80 lg:h-96 relative overflow-hidden cursor-zoom-in flex items-center justify-center'
		onMouseEnter={() => onHoverChange && onHoverChange(true)}
		onMouseLeave={() => {
                onHoverChange && onHoverChange(false);
                setBackgroundPos('50% 50%');
                onPositionChange && onPositionChange('50% 50%');
            }}
		onMouseMove={handleMouseMove}
        >
		<img 
			src={src} 
			alt={alt}
			className='w-[85%] h-full object-cover'
            />
	</div>
    );
}