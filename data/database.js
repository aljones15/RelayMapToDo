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
  return ToDos.filter((td) => td.city_id === city_id);
}

/***
 * add a to do posted from relay to the in memory db
 * @ param {Object} a to do class
 */
export function AddToDo({city_id, text}){
  let id = ToDos.length + 1;
  let todo = new ToDo(city_id, text, id);
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
