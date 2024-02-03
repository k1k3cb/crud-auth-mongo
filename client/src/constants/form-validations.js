const messages = {
	name: {
		required: 'El campo es obligatorio',
		wrong: 'El campo no es valido'
	},
	number: {
		required: 'El campo es obligatorio',
		wrong: 'El campo no es valido, solo se admiten números'
	}
};

const pattern = {
	onlyLetters: /[a-z]+$/,
	onlyNumbers: /^\d+$/
};

export const FORM_VALIDATIONS = {
	NAME: {
		required: messages.name.required,
		pattern: {
			value: pattern.onlyLetters,
			message: messages.name.wrong
		}
	},
	CARD_NUMBER: {
		required: messages.number.required,
		pattern: {
			value: pattern.onlyNumbers,
			message: messages.number.wrong
		}
	}
};