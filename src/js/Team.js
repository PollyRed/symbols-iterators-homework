export default class Team {
  constructor(persons) {
    this.persons = persons;
  }

  [Symbol.iterator]() {
    let nextIdx = 0;
    const team = this;

    return {
      next() {
        if (nextIdx !== team.persons.length) {
          const value = team.persons[nextIdx];
          nextIdx += 1;

          return {
            done: false,
            value,
          };
        }

        return {
          done: true,
        };
      },
    };
  }
}
