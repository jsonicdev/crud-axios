const btn = document.getElementById('button')

btn.addEventListener('click', async () => {
	const input = document.getElementById('input')

	try {
		const response = await axios({
			method: 'POST',
			url: 'url',
			data: {
				exercise_id: 1,
				name: input.value,
			},
		})
	} catch (error) {
		console.error(error)
	}
})

document.addEventListener('DOMContentLoaded', () => {
	let studentsData = []

	async function getData() {
		try {
			const response = await axios({
				method: 'GET',
				url: 'url',
			})
			studentsData = response.data.students
			renderStudents(studentsData)
		} catch (error) {
			console.error(error.response.data)
		}
	}
	getData()

	const renderStudents = studentsData => {
		const container = document.getElementById('container')
		container.innerHTML = ''

		studentsData.forEach(student => {
			const studentElement = document.createElement('div')
			studentElement.className = ''
			studentElement.innerHTML = `
			<div class="border border-black m-2 px-4 rounded-xl">
			<p class="border-b border-black">ID: ${student.id}</p>
			<p>Name: ${student.name}</p>
			<p>Age: ${student.age}</p>
			<p>Gender: ${student.gender}</p>
			<p>Email: ${student.email}</p>
			<p>Phone: ${student.phone}</p>
			</div>
			`
			container.appendChild(studentElement)
		})
	}
})

const update = document.getElementById('update')

update.addEventListener('click', () => {
	const inputName = document.getElementById('inputName')
	const inputAge = document.getElementById('inputAge')
	const inputGen = document.getElementById('inputGen')
	const inputEmail = document.getElementById('inputEmail')
	const inputPhone = document.getElementById('inputPhone')

	async function updateData() {
		try {
			const response = await axios({
				method: 'PATCH',
				url: 'url',
				data: {
					exercise_id: 3,
					name: inputName.value,
					age: inputAge.value,
					gender: inputGen.value,
					email: inputEmail.value,
					phone: inputPhone.value,
				},
			})
			console.log(response.data.age)
			console.log(response)
			console.log('here')
		} catch (error) {
			console.error(error)
		}
	}
	updateData()
})

const deleteBtn = document.getElementById('deleteBtn')

deleteBtn.addEventListener('click', () => {
	async function deleteData() {
		try {
			const response = await axios({
				method: 'DELETE',
				url: 'url',
				data: {
					exercise_id: 4,
				},
			})
			console.log('here')
		} catch (error) {
			console.error(error)
		}
	}
	deleteData()
})
