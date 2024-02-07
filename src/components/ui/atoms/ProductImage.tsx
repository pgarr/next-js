export const ProductImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="bg-white p-5">
			<img src={src} alt={alt} width={320} height={320} className="hover:scale-105" />
		</div>
	);
};
