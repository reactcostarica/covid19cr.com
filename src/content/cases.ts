import { Case } from '../types/content'
import { Country } from '../types/countries'

const cases: Case[] = [
  {
    detected: new Date('2019-03-06'),
    updated: new Date('2019-03-06'),
    status: 'active',
    gender: 'f',
    age: 49,
    nationality: Country.UnitedStates,
  },
  {
    detected: new Date('2019-03-07'),
    updated: new Date('2019-03-07'),
    status: 'active',
    gender: 'm',
    age: 49,
    nationality: Country.UnitedStates,
  },

  {
    detected: new Date('2019-03-07'),
    updated: new Date('2019-03-07'),
    status: 'active',
    gender: 'm',
    age: 54,
    nationality: Country.CostaRica,
  },
  {
    detected: new Date('2019-03-07'),
    updated: new Date('2019-03-07'),
    status: 'active',
    gender: 'f',
    age: 73,
    nationality: Country.CostaRica,
  },
  {
    detected: new Date('2019-03-07'),
    updated: new Date('2019-03-07'),
    status: 'active',
    gender: 'f',
    age: 41,
    nationality: Country.CostaRica,
  },
  {
    detected: new Date('2019-03-08'),
    updated: new Date('2019-03-08'),
    status: 'active',
    gender: 'f',
    age: 54,
    nationality: Country.CostaRica,
  },
  {
    detected: new Date('2019-03-08'),
    updated: new Date('2019-03-08'),
    status: 'active',
    gender: 'f',
    age: 56,
    nationality: Country.CostaRica,
  },
  {
    detected: new Date('2019-03-08'),
    updated: new Date('2019-03-08'),
    status: 'active',
    gender: 'm',
    age: 34,
    nationality: Country.CostaRica,
  },
  {
    detected: new Date('2019-03-08'),
    updated: new Date('2019-03-08'),
    status: 'active',
    gender: 'f',
    age: 70,
    nationality: Country.UnitedStates,
  },
]

export default cases
