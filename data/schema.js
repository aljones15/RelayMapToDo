import {
  City,
  ToDo,
  FetchToDos,
  AddToDo,
  LikeToDo,
  DislikeToDo,
  FetchCities,
  FetchCity
} from './database';

/***
* graph QL function that maps Queries to functions that fetch the correct obj
* function return is destructured to all us acces to the interface ani fields
*/
const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    const {type, id} = fromGlobalId(globalId);
    if(type === 'City'){
      return FetchCity(id);
    } else if (type === 'ToDo'){
      return FetchToDos(id);
    } else if (type === 'Cities') {
      return FetchCities();
    } else {
      return null;
    }
  },
  (obj) => {
    if(obj instanceof City){
      return cityType;
    } else if (obj instanceof ToDo) {
      return toDoType;
    } else if(obj instanceof Cities){
      return citiesType;
    } else {
      return null;
    }
  }
);

const citiesType = new GraphQLObjectType({
  name: 'Cities',
  description: 'An array of Cities'
});

const cityType = new GraphQLObjectType({
  name: 'City',
  description: 'A city to be used on the map',
  fields: () => ({
    id: globalIdField('City');
    tdods: FetchToDos(id);
  })
});
