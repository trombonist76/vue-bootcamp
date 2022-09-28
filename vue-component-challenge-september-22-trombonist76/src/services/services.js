/**
 * Burada datayı fetch etmek ve gruplamak için kullanılan fonksiyonları yazdım.
 * Ek olarak; getGroups fonksiyonu içerisinde'nanoid' kullandım çünkü 
 * grupları v-for içinde dönerken index numarası değil de benzersiz bir id kullanmak istedim.
 * Bu fonksiyonları burada tutuyorum çünkü App.vue componentinde karmaşıklığı önlemek istedim.
 */

import axios from "axios";
import { nanoid } from "nanoid";

export async function fetchData() {
	const url = "https://raw.githubusercontent.com/Front-End-Bootcamp/vue-bootcamp/main/homework%201/data.json"
	const data = await axios(url).then(result => result.data)
	return data
}

function uniqueGroupNames(data) {
	const groupNames = data.map(person => person.group);
	const uniqueNames = [...new Set(groupNames)];
	return uniqueNames
}

export function getGroups(data){
	const groups = uniqueGroupNames(data)
	const groupsWithData = {}
	groups.forEach((group) => {
		const persons = data.filter(person => person.group == group);
		groupsWithData[group] = {
			id: nanoid(),
			name:group,
			persons
		}
	})

	return groupsWithData
}