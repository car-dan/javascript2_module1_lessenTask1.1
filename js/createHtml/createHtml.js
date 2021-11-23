import { callApi } from "../script.js";

export function createHtml(data) {
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

export function createTags(list = []) {
	let tags = "";

	list.forEach((item) => (tags += `<span>${item}</span>`));

	return tags;
}
