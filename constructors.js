// Hey PunchCode! Enjoy!
// Make sure to open your js consoles!

//          __  _ ___ __  _
//   __  __/ /_(_) (_) /_(_)__  _____/
// / /_/ / /_/ / / / /_/ /  __(__  )
// \__,_/\__/_/_/_/\__/_/\___/____/

// a simple "it" function for naming groups of expectations
function it(description, contents) {
  console.log('\n\n"It ' + description + '"')
  contents()
}

// A simple function for expecting values
// Ex: expect(sadie.color).toBe('black'); // should return true
function expect(target) {
  return {
    toBe: function (expectation) {
      if (target === expectation) {
        console.log(
          "\n     %cPASSED",
          "color:green;",
          "Expected",
          target,
          "to be",
          expectation
        )
        return true
      } else {
        console.log(
          "\n     %cFAILED",
          "color:red;",
          "Expected",
          target,
          "to be",
          expectation
        )
        return false
      }
    },
  }
}

//                          __                  __
//   _________  ____  _____/ /________  _______/ /_____  __________
//  / ___/ __ \/ __ \/ ___/ __/ ___/ / / / ___/ __/ __ \/ ___/ ___/
// / /__/ /_/ / / / (__  ) /_/ /  / /_/ / /__/ /_/ /_/ / /  (__  )
// \___/\____/_/ /_/____/\__/_/   \__,_/\___/\__/\____/_/  /____/
//
// Only add code to *THIS* section!

// ????????

function Dog(x) {
  //This code below changes the value of dog.color but
  //  still brings err about "'color' is undefined"
  // this.color = x.color
  // this.color = "black"
  this.color = x === undefined ? "red" : x.color
  // if (x === undefined) {
  //   this.color = x.color
  // }
  // this.prototype = function (x) {
  //   x.color = this.color
  // }
  // this.color = color
  // this.hungry = hungry
  this.status = "normal"
  this.hungry = true
  console.log()
  // function pet() {
  //   return this.status == "happy"
  // }
  // this.prototype.pet = function () {
  //   return (this.status = "happy")
  // }

  // this.pet = function () {
  //   this.status = "happy"
  // }

  // this.owner = null
  // if (mason.pet(sadie)) {
  //   return (this.status = happy)
  // }
  console.log(this)
}
//This code below is weird and works the same as
// this.color = x.color   inside of function Dog

// Dog.prototype = function (x) {
//   this.color = x.color
// }
// Dog.color = function (x) {}
// Dog.prototype = function (x) {
//   if ((x.hungry = false)) {
//     return true
//   } else {
//     x.hungry = true
//   }
// }
Human.prototype.feed = function (x) {
  if (x.hungry === undefined) x.hungry = false
}

Human.prototype.pet = function (x) {
  x.status = "happy"
}

function Human() {
  // this.pet = function () {
  //   return (Dog.status = "happy")
  // }
}

// Dog.prototype.status  = "normal"

// Dog.prototype.color = color

// sadie.status = "normal"

// Dog.prototype.status = function () {
// return
// }
// ????????
// ????????

//        D O G S

var sadie = new Dog({
  color: "black",
  hungry: false,
})

var moonshine = new Dog({
  color: "blue-red",
})

var atticus = new Dog()

//   H U M A N S

var mason = new Human()

var julia = new Human({
  cool: true,
})

//                     __           __  __    _                             __
//    ____ ___  ____ _/ /_____     / /_/ /_  (_)____   _      ______  _____/ /__
//   / __ `__ \/ __ `/ //_/ _ \   / __/ __ \/ / ___/  | | /| / / __ \/ ___/ //_/
//  / / / / / / /_/ / ,< /  __/  / /_/ / / / (__  )   | |/ |/ / /_/ / /  / ,<
// /_/ /_/ /_/\__,_/_/|_|\___/   \__/_/ /_/_/____/    |__/|__/\____/_/  /_/|_|
//
// Don't edit this section. Instead make these tests pass by writing
// constructors in the constructor section above ;D

it("should make Sadie happy when Mason pets her", function () {
  expect(sadie.status).toBe("normal")
  mason.pet(sadie)
  expect(sadie.status).toBe("happy")
})

it("should make Sadie black", function () {
  expect(sadie.color).toBe("black")
})

it("should be make Moonshine hungry and Sadie not hungry", function () {
  expect(moonshine.hungry).toBe(true)
  expect(sadie.hungry).toBe(false)
})

it("should make Moonshine no longer hungry when you feed him", function () {
  julia.feed(moonshine)
  expect(moonshine.hungry).toBe(false)
})

it("should not affect Atticus and Moonshine's owner properties when setting Mason as Sadie's owner ", function () {
  sadie.owner = mason
  expect(moonshine.owner).toBe(undefined)
  expect(atticus.owner).toBe(undefined)
})

it("should make Julia cool and Mason not cool", function () {
  sadie.owner = mason
  expect(julia.cool).toBe(true)
  expect(mason.cool).toBe(false)
})
