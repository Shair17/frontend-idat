export const Perfil = ({ id, name, image }) => {
	return (
		<div>
			<p>
				{id}. {name}
			</p>
			<img src={image} alt={name} />
		</div>
	);
};
