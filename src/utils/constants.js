const genderTypes = {
  MALE: 'Male',
  FEMALE: 'Female',
  UNKNOW: 'unknow',
};

const statusType = {
  ALIVE: 'Alive',
  DEAD: 'Dead',
  UNKNOW: 'unknow',
};

const genders = [
  {
    id: 1,
    name: 'Male',
    value: 'male',
  },
  {
    id: 2,
    name: 'Female',
    value: 'female',
  },
  {
    id: 3,
    name: 'Genderless',
    value: 'genderless',
  },
  {
    id: 4,
    name: 'Unknown',
    value: 'unknown',
  },
];
const status = [
  {
    id: 1,
    name: 'Alive',
    value: 'alive',
  },
  {
    id: 2,
    name: 'Dead',
    value: 'dead',
  },
  {
    id: 3,
    name: 'Unknown',
    value: 'unknown',
  },
];

export {genderTypes, statusType, genders, status};
