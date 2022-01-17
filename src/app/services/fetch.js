/* Carrega um número aleatorio entre 1 e 300 da url
 * "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300"
 */
export const loadNumber = async () => {
	try {
		const response = await fetch(
			"https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300",
		);
		const data = await response.json();
		return data?.value || data;
	} catch (e) {
		console.error(e);
	}
};
