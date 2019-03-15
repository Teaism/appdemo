/*
 * @Author: Teaism
 * @Date: 2019-03-07 11:32:43
 * @Last Modified by: Teaism
 * @Last Modified time: 2019-03-15 10:02:22
 */

import Vue from "vue";
import Vuex from "vuex";
import { INCREMENT, DECREMENT } from "./mutation-types";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 5,
    todos: [
      { id: 1, text: "myfirst", done: true },
      { id: 2, text: "mylast", done: false },
      { id: 3, text: "myfirst3", done: true },
      { id: 6, text: "myfirst6", done: true }
    ]
  },
  mutations: {
    [INCREMENT](state, n) {
      state.count += n;
    },
    [DECREMENT](state, n) {
      state.count -= n;
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id);
    }
  },
  actions: {
    [INCREMENT](context) {
      context.commit(INCREMENT);
    },
    increment(context) {
      context.commit("increment");
    },
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit(INCREMENT);
      }, 1000);
    },
    getData() {
      let p = new Promise(resolve => {
        console.log("start getData");
        setTimeout(() => {
          resolve("getData ok: 1");
        }, 1000);
      });
      return p;
    },
    getOtherData() {
      console.log("this is getOtherData");
    },
    actionA({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit("someMutation");
          resolve();
        }, 1000);
      });
    },
    actionB({ dispatch, commit }) {
      return dispatch("actionA").then(() => {
        commit("someOtherMutation");
      });
    }
    /* async actionC({ commit }) {
      commit("gotData", await getData());
    },
    async actionD({ dispatch, commit }) {
      await dispatch("actionC");
      commit("gotOtherData", await getOtherData());
    } */
  }
});

/* const store = new Vuex.Store({
  mudoles: {
    app,
    customer,
    aaa,
    bbb
  },
  getters
}); */

export default store;
