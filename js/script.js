import { url, resultContainer } from "./constants/constants.js";

async function callApi() {
	try {
		const response = await fetch(url);
		const json = await response.json();
		console.log(json);
		createHtml(json);
	} catch (error) {
		console.log(error);
		resultContainer.innerHTML = displayMessage("error", error);
	}
}

callApi();

function displayMessage(type, message) {
	return `<div class="message ${type}">${message}</div>`;
}

function createHtml(data) {
	resultContainer.innerHTML = "";

	for (let i = 0; i < 7; i++) {
		resultContainer.innerHTML += `<div class="result">
                                        <h4>${data[i].name}</h4>
                                        <p>Birthday: <b>${
																					data[i].birthday
																				}</b></p>
                                        <p>Nickname: <b>${
																					data[i].nickname
																				}</b></p>
                                        <div>Occupations:                                         
                                            ${createTags(data[i].occupation)}
                                        </div>
                                    </div>`;
	}
}

function createTags(list = []) {
	let tags = "";

	list.forEach((item) => (tags += `<span>${item}</span>`));

	return tags;
}
