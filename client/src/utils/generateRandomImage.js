export const generateRandomImage = gender => {
	const randomNumber = Math.floor(Math.random() * 99);
	return `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`;
};