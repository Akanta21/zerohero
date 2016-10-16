var animals = [
  {name: 'Much', species: 'dog'},
  {name: 'Leess', species: 'dog'},
  {name: 'More', species: 'cat'},
  {name: 'Mimp', species: 'fish'}
]

var dogs = animals.filter(isDog)

var isDog = function(animal) {
  return animal.species === 'dog'
}

var otherAnimals = animals.reject(isDog)
/* for(var i = 0; i < animals.length; i++) {
  if(animalss[i].species === 'dog')
  dogs.push(animals[i])
} */
