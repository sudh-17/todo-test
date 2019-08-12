import { host, api } from "./index";
import axios from "axios";

var instance = axios.create({
  baseURL: host,
  timeout: 10000
});

export function getAll() {
  return instance.get(api.GetAll);
}

export function addTodo(params) {
  return instance({
    url: api.Add,
    method: "post",
    data: params
  });
}

export function deleteTodo(id) {
  //return instance.delete(api.Delete+"/"+params.id);
  return instance({
    url: api.Delete + "/" + id,
    method: "delete"
  });
}

export function updateTodo(todo) {
    //return instance.delete(api.Delete+"/"+params.id);
    return instance({
      url: api.Update,
      method: "post",
      data: todo
    });
  }
  