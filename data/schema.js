import { 
  FetchToDos,
  AddToDo,
  LikeToDo,
  DislikeToDo,
  FetchCities,
  FetchCity
} from './database';

import {
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLEnumType,
  GraphQLNonNull,
  GraphQLSchema
} from 'graphql';

/***
* graph QL function that maps Queries to functions that fetch the correct obj
* function return is destructured to all us acces to the interface ani fields
*/

/*
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
*/
const Root = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'An array of Cities',
  fields: () => ({
    cities: { 
      type: new GraphQLList(City),
      resolve: () => FetchCities()
    },
    city: {
      type: City,
      args: {
        id: {type: GraphQLInt}
      },
      resolve: (source, {id}) => FetchCity(id)
    }
  })
});

const City = new GraphQLObjectType({
  name: 'City',
  description: 'A city to be used on the map',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLInt)},
    lat: {type: GraphQLFloat},
    lng: {type: GraphQLFloat},
    todo:{ 
      type: new GraphQLList(ToDo),
      resolve: (city) => FetchToDos(city.id)
    }
  })
});

const ToDo = new GraphQLObjectType({
  name: 'ToDo',
  description: 'A To Do for a city',
  fields: () => ({
    city_id: {type: new GraphQLNonNull(GraphQLInt)},
    text: {type: GraphQLString},
    likes: {
      type: GraphQLInt,
      resolve: (todo) => todo.likes || 0
    },
    id: {type: new GraphQLNonNull(GraphQLInt)}
  })
});

const Mutation = new GraphQLObjectType({
  name: 'ToDoMutations',
  description: 'Mutations for the To Do List',
  fields: () => ({
    createToDo: {
      type: ToDo,
      args: {
        city_id: {type: new GraphQLNonNull(GraphQLInt)},
        text: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve: (source, args) => {
        return AddToDo(args);
      }
    }
  })
});

export const Schema = new GraphQLSchema({
  query: Root,
  mutation: Mutation
});

export default Schema;
