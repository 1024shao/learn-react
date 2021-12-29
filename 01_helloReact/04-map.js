const array = [
	{
		name: 'wu',
	},
	{
		name: 'shao',
	},
]

const newArr = array.map((item, index) => {
	item.age = index
	return item
})

console.log(newArr)
