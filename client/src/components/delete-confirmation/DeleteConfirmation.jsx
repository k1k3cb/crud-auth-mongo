const DeleteConfirmation = ({confirmDeleteUser, closeModal}) => {
	return (
		<div>
			<h3>¿Estás seguro de que quieres borrar este usuario?</h3>
			<button onClick={confirmDeleteUser}>Sí</button>
			<button onClick={closeModal}>No</button>
		</div>
	);
};



export default DeleteConfirmation;
