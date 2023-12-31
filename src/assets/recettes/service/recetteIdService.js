import { config } from '../../../config';

class recetteIdService {
	endpoint = "lookup.php?i=";
	baseUrl = config.baseUrl;

	async GetRecetteById(id) {
		const response = await fetch(`${this.baseUrl}${this.endpoint}${id}`);
		if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
		const data = await response.json();
		return data.meals;
	}

}

export default recetteIdService;