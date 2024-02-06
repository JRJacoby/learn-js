/*class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this._persons = [];
  }

  showId() {
    return this.#id;
  }

}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  push(p) {
    return this._persons.push(p)
  }

  pop() {
    return this._persons.pop().age
  }
}

let pstack = new PStackImpl();
pstack.persons = [{name: 'Jojo', age: 21}, {name: 'Gabi', age: 29}]
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.persons);*/

class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this._persons = [];
  }

  showId() {
    return this.#id;
  }

  addPerson(person) {
    this._persons.push(person);
  }

  getPersons() {
    return this._persons.slice(); 
  }
}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  push(p) {
    return this._persons.push(p);
  }

  pop() {
    if (this._persons.length === 0) return undefined; 
    return this._persons.pop().age;
  }
}

let pstack = new PStackImpl();
pstack.addPerson({name: 'Jojo', age: 21});
pstack.addPerson({name: 'Gabi', age: 29});
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.getPersons()); 

