import drivers from '../data/drivers.json';

const fakeGoatVotes = {
  "Lewis Hamilton": 672,
  "Michael Schumacher": 451,
  "Ayrton Senna": 202,
  "Sebastian Vettel": 359,
  "Max Verstappen": 567,
  "Charles Leclerc": 456,
  "Lando Norris": 319,
  "Alain Prost": 105,
  "Niki Lauda": 123,
  "Juan Manuel Fangio": 120,
  "Jim Clark": 95,
  "Fernando Alonso": 407,
  "Nigel Mansell": 135,
  "Jackie Stewart": 130,
  "Nico Rosberg": 257,
  "Jenson Button": 202,
  "Kimi Räikkönen": 115,
  "Nelson Piquet": 40,
  "Mika Häkkinen": 15,
  "Graham Hill": 4,
  "Jacques Villeneuve": 42,
  "Damon Hill": 27,
  "Emerson Fittipaldi": 61,
  "Oscar Piastri": 201,
  "Oliver Bearman": 41,
  "Alexander Albon": 81,
  "Felipe Massa": 13,
  "Sergio Perez": 189,
};

const fakeToadVotes = {
  "Sergio Perez": 153,
  "Nikita Mazepin": 220,
  "Lance Stroll": 167,
  "Logan Sargeant": 204,
  "Liam Lawson": 7,
  "Zhou Guanyu": 145,
  "Nyck de Vries": 134,
  "Yuki Tsunoda": 42,
  "Mick Schumacher": 103,
  "Nicholas Latifi": 50,
  "Sergey Sirotkin": 49,
  "Antonio Giovinazzi": 27,
  "Pierre Gasly": 35,
  "Esteban Ocon": 131,
  "Brendon Hartley": 57,
  "Stoffel Vandoorne": 20,
  "Pascal Wehrlein": 15,
  "Jolyon Palmer": 10,
  "Felipe Nasr": 5,
  "Kevin Magnussen": 44,
  "Marcus Ericsson": 3,
  "Daniil Kvyat": 62,
  "Valtteri Bottas": 61,
  "Esteban Gutiérrez": 1,
  "Daniel Ricciardo": 41,
  "Nico Hülkenberg": 37,
  "Romain Grosjean": 19,
  "Robert Kubica": 19,
};

export const generateInitialVotes = () => {
  const votes = {
    goat: { ...fakeGoatVotes },
    toad: { ...fakeToadVotes }
  };
  localStorage.setItem('votes', JSON.stringify(votes));
  return votes;
};

export const getVotes = () => {
  const votes = localStorage.getItem('votes');
  return votes ? JSON.parse(votes) : generateInitialVotes();
};

export const saveVotes = (votes) => {
  localStorage.setItem('votes', JSON.stringify(votes));
};

export const getTopNDrivers = (votes, type, n = 5) => {
  const sortedDrivers = Object.keys(votes[type]).sort((a, b) => votes[type][b] - votes[type][a]);
  return sortedDrivers.slice(0, n).map(driver => ({
    name: driver,
    votes: votes[type][driver]
  }));
};
