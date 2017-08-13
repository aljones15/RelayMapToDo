import { 
  FetchToDos,
  AddToDo,
  LikeToDo,
  DislikeToDo,
  FetchCities,
  FetchCity,
  PaginateToDo
} from './database';

import {
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLObjectType,
  GraphQLEnumType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLInputObjectType
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

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'An array of Cities',
  fields: () => ({
    cities: { 
      type: new GraphQLList(City),
      resolve: () => FetchCities()
    },
    city: {
      type: City,
      args: {
        cityID: {type: new GraphQLNonNull(GraphQLInt)}
      },
      resolve: (source, {cityID}) => FetchCity(cityID)
    }
  })
});

const City = new GraphQLObjectType({
  name: 'City',
  description: 'A city to be used on the map',
  fields: () => ({
    _id: {type: new GraphQLNonNull(GraphQLInt)},
    lat: {type: GraphQLFloat},
    lng: {type: GraphQLFloat},
    todo:{ 
      type: ToDoConnection,
      args: {
        first: {type: GraphQLInt}, 
        after: {type: GraphQLString},
        last: {type: GraphQLInt}, 
        before: {type: GraphQLString} 
      },
      resolve: ({_id}, {first, after, last, before}) => {
        return {
          id: _id, 
          first: first, 
          after: after, 
          last: last, 
          before: before,
          todos: FetchToDos(_id)
        };
      } 
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
    _id: {type: new GraphQLNonNull(GraphQLInt)}
  })
});

const ToDoEdge = new GraphQLObjectType({
  name: 'ToDoEdge',
  description: 'To Do Edge',
  fields: () => ({
    node: {type: ToDo},
    cursor: {type: new GraphQLNonNull(GraphQLString)}
  })
});

const ToDoPageInfo = new GraphQLObjectType({
  name: 'ToDoPageInfo',
  description: 'ToDo Page Info',
  fields: () => ({
    hasPreviousPage: {
      type: new GraphQLNonNull(GraphQLBoolean),
      args: {
        first: {type: GraphQLInt}, 
        after: {type: GraphQLString},
        last: {type: GraphQLInt}, 
        before: {type: GraphQLString} 
      }, 
      resolve: ({after, todos}) => {
        const current = todos.find(t => t._id == after);
        const index = todos.indexOf(current);
        const before = todos.slice(0, index);
        return before.length > 0;
      }
    },
    hasNextPage: {
      type: new GraphQLNonNull(GraphQLBoolean),
      args: {
        first: {type: GraphQLInt}, 
        after: {type: GraphQLString},
        last: {type: GraphQLInt}, 
        before: {type: GraphQLString} 
      }, 
      resolve: (args) => {
        const current = args.todos.find(t => t._id == args.id);
        const index = args.todos.indexOf(current) + args.first;
        const after = args.todos.slice(index, index + args.first);
        return after.length > 0;
      } 
    },
    startCursor: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({todos}) => todos[0] ? todos[0]._id : 1
    },
    endCursor: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({todos}) => {
        const end = todos.length - 1; 
        return todos[end] ?  todos[end]._id : 1; }
    }
  }) 
});

const ToDoConnection = new GraphQLObjectType({
  name: 'ToDoConnection',
  description: 'To Do Connection',
  fields: () => ({
    edges: {
      type: new GraphQLList(ToDoEdge),
      resolve: (args) => {
       console.log('ToDoConnect edges args ');
       console.log(args);
       if(args.first){
          return PaginateToDo(args.after, args.first, args.id); 
        }
        if(args.last){
          throw 'PAGINATE BEFORE NOT IMPLEMENTED YET'; 
        }
        return [];
      }
   },
    pageInfo: {
      type: ToDoPageInfo,
      resolve: (one) => {
        return one;
      }
    }
  })
});

const ToDoInput = new GraphQLInputObjectType({
  name: 'ToDoInput',
  fields: {
    city_id: {type: new GraphQLNonNull(GraphQLInt)},
    text: {type: GraphQLString},
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Mutations for the To Do List',
  fields: () => ({
    createToDo: {
      type: ToDo,
      args: {
        input: {type: ToDoInput}
      },
      resolve: (source, args) => {
        return AddToDo(args);
      }
    }
  })
});

export const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
