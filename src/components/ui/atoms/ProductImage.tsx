import NextImage from "next/image";

export const ProductImage = ({
	src,
	alt,
	width,
	height,
}: {
	src: string;
	alt: string;
	width?: number;
	height?: number;
}) => {
	return (
		<div className="bg-white p-5">
			<NextImage
				src={src}
				alt={alt}
				width={width || 200}
				height={height || 200}
				className="w-full object-contain object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};
