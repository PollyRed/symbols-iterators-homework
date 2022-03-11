import Person from '../Person';
import Team from '../Team';

test('Итерирование Team', () => {
  const person1 = new Person('Ubivaka', 'daemon');
  const person2 = new Person('Kusaka', 'zombie');
  const persons = [person1, person2];

  const team = new Team(persons);
  const result = [];

  for (const teammate of team) {
    result.push(teammate);
  }

  expect(result).toEqual(persons);
});
