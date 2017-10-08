function readData() {
	for (var i=0; i<data.length; i++)
		console.log(data[i])
}
readData();

// console.log(data[1].dealsOfTheDay.products)

function findEntryByName(name) {
	for (var i=0; i<data.length; i++) {
		if (name in data)
			console.log("sda")
	}
}

findEntryByName("navbar")

function findEntryByName() {
	for (var i=0; i<data.length; i++) {
		if (data.navbar !== undefined)
			console.log("asfas")
		}
}

findEntryByName()

function findEntryByIndex(index, string1, string2) {
	console.log(data[index].string1.string2)
}

findEntryByIndex(5,"discountsForYou","products")

// console.log(data[5])

// var test = {"a": "test", 
// 			"b": { 
// 					"d": 4
// 				}, 
// 			"c": "ted"}

// if (test.b.d !== undefined)
// 	console.log("asfs")
