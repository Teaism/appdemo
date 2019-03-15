/*
 * @Author: Teaism
 * @Date: 2019-03-07 11:33:02
 * @Last Modified by: Teaism
 * @Last Modified time: 2019-03-14 17:39:07
 */

import * as api from "../api";

export const getAllMessages = ({ commit }) => {
  api.getAllMessages(messages => {
    commit("receiveAll", messages);
  });
};

export const sendMessage = ({ commit }, payload) => {
  commit("switchThread", payload);
};
