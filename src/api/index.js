/*
 * @Author: Teaism
 * @Date: 2019-03-14 17:02:35
 * @Last Modified by: Teaism
 * @Last Modified time: 2019-03-14 17:06:26
 */
const data = require("./mock-data");
const LATENCY = 16;

export function getAllMessages(cb) {
  setTimeout(() => {
    cb(data);
  }, LATENCY);
}

export function createMessage({ text, thread }, cb) {
  const timestamp = Date.now();
  const id = "m_" + timestamp;
  const message = {
    id,
    text,
    timestamp,
    threadID: thread.id,
    threadName: thread.name,
    authorName: "Chen"
  };
  setTimeout(function() {
    cb(message);
  }, LATENCY);
}
