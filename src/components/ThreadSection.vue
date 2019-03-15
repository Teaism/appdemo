<template>
  <div class="thread-section">
    <div class="thread-count">
      <span v-show="unreadCount"> Unread threads: {{ unreadCount }} </span>
    </div>
    <ul class="thread-list">
      <thread
        v-for="thread in threads"
        :key="thread.id"
        :thread="thread"
        :active="thread.id === currenThread.id"
        @switch-thread="switchThread"
      ></thread>
    </ul>
  </div>
</template>

<script>
import Thread from "./Thread.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "threadSection",
  components: { Thread },
  computed: mapGetters(["threads", "currentThread", "unreadCount"]),
  methods: mapActions(["switchThread"])
};
</script>
