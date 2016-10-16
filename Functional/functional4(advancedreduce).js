var output = ["mark johnson blender 200 1",
              "mark johnson chicken 200 2",
              "mark johnson prince 100 2",
              "Nikita Smith price 2 1",
              "Nikita Smith pauper 2 1"]
      .map(line => line.split(' '))
      .reduce((customers, line) => {
        // console.log("hello", line)
        customers[line[0]] = customers[line[0]] || []
        customers[line[0]].push({
          last_name: line[1],
          order: line[2],
          price: line[3],
          quantity: line[4]
        })
        return customers
      }, {})

console.log("output", JSON.stringify(output, null, 2))
