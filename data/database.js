import _ from 'lodash';

/***
 * basic class for the in memory city database
 */
export class City {
  constructor(id, lat, lng, name){
    this._id = id;
    this.lat = lat;
    this.lng = lng;
    this.name = name;
  }
}

/**
*  Class for Graph QL Nodes
* @ param {Object} is a todo
*/
export class QlNode {
  constructor(item){
    this.cursor = String(item._id);
    this.node = item;
  }
}
/***
 *  basic class for To Do
 */
export class ToDo {
  constructor(city, text, id){
    this.city_id = city;
    this.text = text;
    this.likes = 0;
    this._id = id;
  }
}

/***
 * various cities we seed with
 */
const changMai = new City(1, 18.7061, 98.9817, "Chang Mai");
const rangoon = new City(2, 16.8661, 96.1951, "Rangoon");
const hanoi = new City(3, 21.0278, 105.8342, "Hanoi");
const Cities = [changMai, rangoon, hanoi];
const ToDos = [];

/***
 * returns todos by city id
 * @ param {Number} city
 */
export function FetchToDos(city_id){
  return ToDos.
           filter((td) => td.city_id === city_id).
             sort((first, second) => first._id - second._id)
}

/***
* finds a todo
* @ param {number} id for a to do
*/
export function FindToDo(id){
  return ToDos.find((td) => td._id === id);
}

/***
* paginates a todo forward method for pagination
* @ param {number} the to do we want to find after
* @ param {number} first the number of items to find
* @ param {number} city_id
*/

export function PaginateToDo(todo_id, first, city_id){
  let todos = FetchToDos(city_id);
  console.log(todos);
  const after = todos.find((td) => td._id == todo_id);
  let index = todos.indexOf(after);
  if(todo_id == null){
    index = 0;
  }
  if(index < 0){
    return [];
  }
  console.log('First -> ' + first);
  let slice = _.take(_.drop(todos, index), first);
  console.log('Slice -> ');
  console.log(slice);
  todos = slice.map((item) => new QlNode(item));
  return todos;
}

/***
 * add a to do posted from relay to the in memory db
 * @ param {Object} a to do class
 */
export function AddToDo(params){
  let id = ToDos.length + 1;
  let todo = new ToDo(params.input.city_id, params.input.text, id);
  ToDos.push(todo);
  return todo;
}

/***
 * increments the like on a to do if it's present
 * @ param {Number} id
 */
export function LikeToDo(id){
  const td = ToDos.find((td) => td._id === id);
  if(!td){
    return false;
  }
  td.likes++;
  return true;
}

/***
 * decrements a like on a to do
 * @ param {Number} id
 */
export function DislikeToDo(id){
  const td = ToDos.find((td) => td._id === id);
  if(!td){
    return false;
  }
  td.likes--;
  return true;
}

/***
 * returns all the cities
 */
export function FetchCities(){
  return Cities;
}

/***
* fetch a single city
* @ param {Number} id
*/
export function FetchCity(id){
  return Cities.find((c) => c._id === id);
}
