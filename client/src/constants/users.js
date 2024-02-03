import { v4 } from "uuid";

export const USERS = [
	{
		id: v4(),
		name: 'Juan Pérez',
		nickname: 'juanito123',
		email: 'juan@example.com',
		gender: 'masculino',
		active: true,
		image: 'https://randomuser.me/api/portraits/men/18.jpg'
	},
	{
		id:  v4(),
		name: 'María González',
		nickname: 'mary85',
		email: 'maria@example.com',
		gender: 'femenino',
		active: false,
		image: 'https://randomuser.me/api/portraits/women/12.jpg'
	},
	{
		id:  v4(),
		name: 'Pedro Ramírez',
		nickname: 'pedrito22',
		email: 'pedro@example.com',
		gender: 'masculino',
		active: true,
		image: 'https://randomuser.me/api/portraits/men/34.jpg'
	},
	{
		id:  v4(),
		name: 'Ana Martínez',
		nickname: 'anita_m',
		email: 'ana@example.com',
		gender: 'femenino',
		active: true,
		image: 'https://randomuser.me/api/portraits/women/52.jpg'
	}
];
