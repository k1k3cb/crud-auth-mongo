import { useRef, useState } from 'react';
import { URLS } from '../../constants/urls';
import { uploadData } from '../../utils/api/api';
import { StyledBox, StyledInputFile } from './styles';

const InputFile = ({ setUserImage }) => {
	const [preview, setPreview] = useState();
	const inputRef = useRef(null);

	return (
		<>
			<h1>File Reader</h1>
			<StyledBox src={preview} />
			<button onClick={() => inputRef.current.click()}>Upload New Image</button>
			<StyledInputFile
				ref={inputRef}
				type='file'
				id='file-input'
				name='photo'
				accept='image/*'
				onChange={event => uploadFile(event, setPreview, setUserImage)}
			/>
		</>
	);
};

export default InputFile;

const fileToDataURL = async file => {
	return new Promise((resolve, reject) => {
		const fileReader = new FileReader();

		fileReader.addEventListener('loadend', () => resolve(fileReader.result));

		fileReader.addEventListener('abort', () => reject(new Error('Aborted')));

		fileReader.addEventListener('error', () =>
			reject(new Error('Error reading file'))
		);

		fileReader.readAsDataURL(file);
	});
};

const uploadFile = async (event, setPreview) => {
	const file = event.target.files[0];

	if (!file) {
		console.log('NOT FILE');
		return;
	}

	const dataUrl = await fileToDataURL(file);

	const formData = new FormData();
	formData.append('photo', file);

	console.log(URLS.API_UPLOAD);
	const response = await uploadData(URLS.API_UPLOAD, formData);

	const url = response.url;

	console.log(url);

	setPreview(dataUrl);
};
