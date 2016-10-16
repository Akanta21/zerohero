//Map examples//
var animals = [
  {name: 'Much',  species: 'dog'},
  {name: 'Leess', species: 'dog'},
  {name: 'More',  species: 'cat'},
  {name: 'Mimp',  species: 'fish'}
]

var names = animals.map(function(animal) {
  return animal.name + 'is a' + animal.species
})
// ECMA 6
var names = animals.map((x) => x.name + 'is a' + x.species
)

// var names = []
//
// for (var i = 0; i < animals.length; i++) {
//   names.push(animals[i].name)
// }
